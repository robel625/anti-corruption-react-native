import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import React from 'react';
import {FONTFAMILY} from '../theme/theme';
import Input from '../components/Input';
import Button from '../components/Button';
import COLORS from '../conts/colors';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../core/api"
import { Toast } from "react-native-toast-notifications";

const SignUpScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    AsyncStorage.removeItem('userData')
    Keyboard.dismiss();
    let isValid = true;

    // if (!inputs.email) {
    //   handleError('Please input email', 'email');
    //   isValid = false;
    // } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
    //   handleError('Please input a valid email', 'email');
    //   isValid = false;
    // }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }else if (!inputs.phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
        handleError('Please input a valid phone number', 'phone');
        isValid = false;
      }

    

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 6) {
      handleError('Min password length of 6', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = async () => {
    // setLoading(true);
    setLoading(true);
    try {
      const response = await api({
        method: 'POST',
        url: '/api/registerAndroidApp/',
        data: {
          full_name: inputs.fullname,
          phone_number: inputs.phone,
          password: inputs.password,
        },
        timeout: 10000 // 10 seconds
      });
  
      setLoading(false);
      console.log("response.dataDDDDDDDDDDD.", response.data)
      const userData = {
        ...inputs,
        loggedIn: true,
        refreshToken: response.data.refresh, // Assuming 'refresh_token' is the correct spelling
        accessToken: response.data.access, // Assuming 'access_token' is the correct spelling
      };
      console.log('userData register', userData);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Toast.show("Registered successful!", { type: "success" });
      navigation.navigate('Tab');
    } catch (error) {
      setLoading(false);
  
      console.log("error RRRRRRRRRR", error)
      if (error.isAxiosError && error.message.includes('Network Error')) { // Improved network error check
        Toast.show("Network error or timeout. Please try again.", { type: "danger" });
      } else if (error.response) {
        // Handle API response error (if any)
        Toast.show(error.response.data.msg || "Registration failed.", { type: "danger" });
      } else {
        // Handle other errors
        Toast.show("An unexpected error occurred. Please try again.", { type: "danger" });
      }
  };
    















      // try {
      //   api({
      //     method: 'POST',
      //     url: '/api/registerAndroidApp/',
      //     data: {
      //       // fullname: inputs.fullname,
      //       phone_number: inputs.phone,
      //       password: inputs.password,
      //     }
      //   })
      //   .then(async (res) => {
      //     setLoading(false);
      //     const userData = {
      //       ...inputs, // Spread operator to include properties from inputs object
      //       loggedIn: true,
      //       refreshToken: res.data.refresh_token, // Assuming 'refresh_token' is the correct spelling
      //       accessToken: res.data.access_token, // Assuming 'access_token' is the correct spelling
      //     };
      //     console.log('userData',userData)
      //     await AsyncStorage.setItem('userData', JSON.stringify(userData));
      //     Toast.show("success", {
      //       type: "success",
      //     });
      //     navigation.navigate('VerificationScreen');
      //   })
      //   .catch((error) => {
      //     setLoading(false);
      //     if (error.response.data.msg){
      //     Toast.show(error.response.data.msg, {
      //       type: "danger",
      //     });
      //   }
      //   });
      //   // .catch(error => {
      //   //   setLoading(false);
      //   //   if (error.response) {
      //   //     console.log("data",error.response.data);
      //   //     console.log(error.response.status);
      //   //     console.log(error.response.headers);
      //   //   } else if (error.request) {
      //   //     console.log("request", error.request);
      //   //   } else {
      //   //     console.log('Error', error.message);
      //   //   }
      //   //   console.log(error.config);
      //   // })


      // } catch (error) {
      //   setLoading(false);
      //   Alert.alert('Error', 'Something went wrong');
      // }
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled"
    style={{flex:1, backgroundColor: COLORS.white}}
    > 
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      {/* <StatusBar backgroundColor="#FFFFFF" /> */}
      <StatusBar translucent backgroundColor="transparent" />
      <Loader visible={loading} />
      <View style={{}}>
        <ImageBackground
          source={require('../assets/eeu_images/park.jpg')}
          style={{
            width: '100%',
            height: 200,
            objectFit: 'contain',
            marginTop: 0,
          }}></ImageBackground>
      </View>
      {/* <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}> */}
      {/* <Loader visible={loading} /> */}
      <ScrollView
        contentContainerStyle={{paddingTop: 0, paddingHorizontal: 20}}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              letterSpacing: 0.7,
              fontFamily: FONTFAMILY.poppins_bold,
              fontSize: 35,
              color: '#F9A34C',
            }}>
            Register
          </Text>
          <Text style={{}}>Create Your New Account</Text>
        </View>

        <View style={{marginHorizontal: 0}}>
          {/* <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          /> */}

          <Input
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          
          <Button title="Register" onPress={validate} />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                color: COLORS.black,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Already have account ?
            </Text>
            <Text
              onPress={() => navigation.navigate('LoginScreen')}
              style={{
                color: '#F9A34C',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
                paddingLeft: 10,
              }}>
              Login
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
    </ScrollView> 
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
