import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colorsPalette} from '../components/multiStepComponents/styles';
// import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import {LocationInfo} from '../components/multiStepComponents/MultiStepForm/LocationInfo/LocationInfo';
import Header from '../components/multiStepComponents/Header/Header';
import Footer from '../components/multiStepComponents/Footer/Footer';
import {SubjectBody} from '../components/multiStepComponents/MultiStepForm/SubjectBody/SubjectBody';
import {FinishUp} from '../components/multiStepComponents/MultiStepForm/FinishUp/FinishUp';
import { ERROR_FIELD_REQUIRED, ERROR_FORMAT_INVALID, ERROR_SELECT_PLAN, REGEX_EMAIL, REGEX_NAME, REGEX_PHONE, theme } from '../components/multiStepComponents/utils/const';
import api from "../core/api"
// import ProgressCircle from 'react-native-progress-circle'
import PopUpAnimation from "../components/PopUpAnimation";
// import CircularProgress from 'react-native-circular-progress-indicator';
import { CircularProgress } from 'react-native-circular-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from "react-native-toast-notifications";

const MultiStep = ({navigation}) => {
  const [step, setStep] = useState(1);
  // const [personalInfo, setPersonalInfo] = useState({
  //   name: '',
  //   email: '',
  //   address: '',
  //   phone: '',
  // });
  const [errorMessages, setErrorMessages] = useState({});

  const [formIsSubmit, setFormIsSubmit] = useState(false);
  const [locationInfo, setLocationInfo] = useState({
    incident_date: '',
    Region: '',
    District: '',
    CSC: '',
    location: '',
  });

 

  const [subjectBody, setSubjectBody] = useState({
    name: '',
    position: '',
    phone: '',
    body: '',
    responseFile: [],
  });

  console.log('subjectBody', subjectBody);
  // const [officerInfo, setOfficerInfo] = useState({
  //   name: '',
  //   position: '',
  //   phone: '',
  // });

  const [progress, setProgress] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  function handleChangeLocationInfo(name, text) {
    setLocationInfo({
      ...locationInfo,
      [name]: text,
    });
    if (name == 'Region') {
      setLocationInfo(prevLocationInfo => ({
        ...prevLocationInfo,
        District: '', // Reset District to empty string on region change
        CSC: '', // Reset CSC to empty string on region change
      }));
    }
    if (name == 'District') {
      setLocationInfo(prevLocationInfo => ({
        ...prevLocationInfo,
        CSC: '',
      }));
    }
  }

  function handleChangeStep(stepToGo, isBackNavigation) {

    if (isBackNavigation || handleStepValidation(step)) {
      console.log('Form VVVVVVVVVVV valid');
      if (stepToGo !== 4) {
        setStep(stepToGo);
        setFormIsSubmit(false)
      } else {
        handleSubmit();
      }
    } else {
      console.log('Form invalid');
    }
  }

  function handleChangeSubjectBody(name, text) {
    setSubjectBody({
      ...subjectBody,
      [name]: text,
    });
  }

  function handleStepValidation(step) {
    let errors = {};
    setErrorMessages({});
    let stepFormIsValid = true;

    switch (step) {

      case 1:
        if (!locationInfo.location || locationInfo.location.length < 1) {
          errors["location"] = ERROR_FIELD_REQUIRED
          stepFormIsValid = false
        }
        
        setErrorMessages(errors)
        return stepFormIsValid

        case 2:
          if (!subjectBody.body || subjectBody.body.length < 3) {
            errors["body"] = ERROR_FIELD_REQUIRED
            stepFormIsValid = false
          }
          
          setErrorMessages(errors)
          return stepFormIsValid
      

      // case 3:
      //   if (!planSelected) {
      //     errors = {
      //       plan: ERROR_SELECT_PLAN
      //     }
      //     stepFormIsValid = false
      //   }

        // setErrorMessages(errors)
        // return stepFormIsValid

      default:
        return stepFormIsValid;
    }
  }

  async function handleSubmit() {

    let userData = await AsyncStorage.getItem('userData');
    if (userData) {
      userData = JSON.parse(userData);
      console.log("userData", userData)
    }
      
    const formdata = new FormData();
    formdata.append('full_name', userData?.fullname)
    formdata.append("email", '')
    formdata.append("phone_number", userData?.phone)
    formdata.append("address", '')

    // formdata.append("location", locationInfo.CSC ? locationInfo.CSC : locationInfo.District ? locationInfo.District
    //   : locationInfo.Region ? locationInfo.Region : "" )
    formdata.append("location", locationInfo.location )
    // formdata.append("incident_happend_Date", locationInfo.incident_date ? locationInfo.incident_date: "")
    formdata.append("incident_happend_Date", locationInfo.incident_date)
    formdata.append("eeu_office", locationInfo.CSC)
    formdata.append("report_detail", subjectBody.body)

    formdata.append("suspicious_name", subjectBody.name)
    formdata.append("suspicious_position", subjectBody.position)
    formdata.append("suspicious_phone", subjectBody.phone)
 
    
    if(subjectBody.responseFile.length > 0){
      console.log("yessssssssssssssssssssssssy")
     for (let i = 0; i < subjectBody.responseFile.length; i++) {
       formdata.append("attachments",{
         uri:subjectBody.responseFile[i].uri,
         type:subjectBody.responseFile[i].type,
         name:subjectBody.responseFile[i].name
       })
     }
   }

   console.log("formdata FFFFFFFFFFFFFFF", formdata)

   api({
    method: 'POST',
    url: '/api/mail/createmail/',
    data: formdata,
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log(percentCompleted);
      setProgress(percentCompleted)
      if (percentCompleted == 100){
        setProgress(0)}
    }
  })
  .then(response => {
      console.log('mail:', response.data)
      setLocationInfo(prevLocationInfo => ({
        ...prevLocationInfo,
        incident_date: '',
      Region: '',
      District: '',
      CSC: '',
      location: '',
      }));
      setSubjectBody(prevSubjectBody => ({
        ...prevSubjectBody,
        name: '',
      position: '',
      phone: '',
      body: '',
      responseFile: [],
      }));

      setShowAnimation(true);
      
        setTimeout(() => {
          setProgress(0);
          setFormIsSubmit(true)
          setShowAnimation(false);
          // navigation.navigate('mailDetails');
          
        }, 3000);
        
    })
    .catch(error => {
      if (error.isAxiosError && error.message.includes('Network Error')) { // Improved network error check
        Toast.show("Network error or timeout. Please try again.", { type: "danger" });
      } else if (error.response) {
        // Handle API response error (if any)
        Toast.show(error.response.data.msg || "An unexpected error occurred. Please try again.", { type: "danger" });
          // "Login failed. Please check your credentials.", { type: "danger" });
      } else {
        // Handle other errors
        Toast.show("An unexpected error occurred. Please try again.", { type: "danger" });
      }

      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    })

   
    // setFormIsSubmit(true);
  }

  const Progressbar = () => {
    return (
      <View style= {{
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <ProgressCircle
            percent={progress}
            radius={100}
            borderWidth={20}
            color="#2afa05"
            shadowColor="#999"
            bgColor= '#252A32'
        ></ProgressCircle> */}
    <CircularProgress
      size={200} // Diameter of the progress bar
      width={20} // Width of the progress line
      fill={progress} // Progress value (0-100)
      tintColor="green" // Color of the progress line
      backgroundColor="#f5ad05" // Color of the background circle

      // outerCircleColor="brown" 
      // progressCircleColor="orange"
      // strokeWidth={20} 
    />
          <Text  style={{ marginTop: 30, fontSize: 40, fontWeight:800, color:"#f5ad05" }}>
      uploading {progress}%
    </Text>
      </View>

    )}

  return (
    <View style={{flex: 1}}>
      <Header currentStep={step} />
     
      <View style={styles.container}>
      
        <View style={styles.stepContainer}>
        <ScrollView keyboardShouldPersistTaps="handled"> 
          {/* <Animated.View
            entering={FadeInUp.delay(100).duration(1000).springify()}> */}
            {step === 1 && (
              <LocationInfo
                handleChangeInfo={handleChangeLocationInfo}
                locationInfo={locationInfo}
                errors={errorMessages}
              />
            )}
          {/* </Animated.View> */}
        

        {step === 2 && (
          // <Animated.View
          //   entering={FadeInUp.delay(100).duration(1000).springify()}
          //   // style={styles.stepContainer}
          // >
            <SubjectBody
              subjectBody={subjectBody}
              errors={errorMessages}
              handleChangeInfo={handleChangeSubjectBody}
            />
          //  </Animated.View> 
        )}

        {step === 3 && (
          // <Animated.View
          //   entering={FadeInUp.delay(100).duration(1000).springify()}
          //   // style={styles.stepContainer}
          // >
            <FinishUp
              formIsSubmit={formIsSubmit}
              locationInfo={locationInfo}
              // officerInfo={officerInfo}
              subjectBody={subjectBody}
              // personalInfo={personalInfo}
              handleChangeStep={handleChangeStep}
            />
          // </Animated.View>
        )}
         </ScrollView>
        </View>
                
      </View>

      {(progress > 0 ) && <Progressbar/>}  
      {showAnimation ? (
        <PopUpAnimation
          style={{ flex: 1 }}
          source={require('../lottie/lottieflow-success.json')}
        />
      ) : (
        <></>
      )} 

      <Footer
        handleChangeStep={handleChangeStep}
        currentStep={step}
        formIsSubmit={formIsSubmit}
      />
    </View>
  );
};

export default MultiStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsPalette.bg.color,
  },
  stepContainer: {
    // flex: 1,
    marginTop: -70,
  },
});
