import {StyleSheet, TouchableHighlight, View , KeyboardAvoidingView, TouchableWithoutFeedback,
    Keyboard, Text,
    FlatList,
    TouchableOpacity,
    Platform} from "react-native"
import { globalStyles } from "../../styles"
import { StepHeader } from "../StepHeader/StepHeader"
import { Field } from "../../Field/Field"
// import { ISubjectBody } from "../../../interfaces/IFormInput"
import { PERSONAL_INFO_INPUTS, SubjectBody_INPUTS } from "../../utils/const"
import { useEffect, useState } from "react"
import { useTheme } from "@react-navigation/native";

// import * as DocumentPicker from "expo-document-picker";
// import {
//     MaterialCommunityIcons,
//   } from "@expo/vector-icons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorsPalette } from '../../styles'
import { useTranslation } from 'react-i18next';
import DocumentPicker from 'react-native-document-picker';
import COLORS from "../../../../conts/colors"
import { Toast } from "react-native-toast-notifications";



export function SubjectBody({ subjectBody, errors, handleChangeInfo}) {

  const theme = useTheme();
  const { t } = useTranslation();

    const [selectedFile, setSelectedFile] = useState([]);
    const [responseFile , setresponseFile ] = useState([]);

    const step = 2

    useEffect(() => {
      handleChangeInfo("responseFile", responseFile)
    }, [responseFile])

    const SubjectBody = [
      {
        name: "name",
        label: t('Name'),
        placeHolder: t('Name_placeHolder'),
        keyboardType: "default",
        maxLength: 40
    },
    {
        name: "position",
        label:  t('position'),
        placeHolder: t('position_placeHolder'),
        keyboardType: "default",
        maxLength: 200
    },
    {
        name: "phone",
        label: t('Phone'),
        placeHolder: t('Phone_placeHolder'),
        keyboardType: "numeric",
        maxLength: 12,
    },
      {
          name: "body",
          label: t("body"),
          placeHolder: t("write_body"),
          keyboardType: "default",
          maxLength: 10000
      },
  ]

    useEffect(() => {
      const res = subjectBody.responseFile
     const filename = [];
     for (let i = 0; i < res.length; i++) {
       filename.push(res[i].name);
     }
     setSelectedFile(filename)
     setresponseFile(subjectBody.responseFile)
  }, [])

  console.log("response",responseFile)
  console.log("subjectBody.responseFile",subjectBody.responseFile)
    console.log("name", selectedFile)

    const pickFile = async () => {
        try {
          const response = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
            allowMultiSelection: true,
            presentationStyle: Platform.OS === 'ios' ? 'fullScreen' : 'modal'
          });

           console.log("result RRRRRRRRRRRRRRRRRRRRRRRRRR",response)
    const totalSize = response.map(file => file.size).reduce((acc, curr) => acc + curr, 0); // Calculate total size

    console.log("totalSize SSSSSSSSSSSS",   totalSize)

    const totalSize1 = responseFile.map(file => file.size).reduce((acc, curr) => acc + curr, 0);
           if ((totalSize1 + totalSize) > 15 * 1024 * 1024) { 
            Toast.show('Please upload files with a total size smaller than 15 MB.', { type: "danger" });
            return;
          }
     
          

          if (response.didCancel) {
            console.log('User cancelled document selection');
          } else {

            // handleChangeInfo("responseFile", response)
            // Update responseFile and selectedFile using spread operator and destructuring
           const updatedResponseFile = [...responseFile, ...response];
           const extractedFilenames = response.map(file => file.name); // Extract filenames efficiently
           const updatedSelectedFile = [...selectedFile, ...extractedFilenames];

           setresponseFile(updatedResponseFile);
           setSelectedFile(updatedSelectedFile);

          //   setresponseFile(response)

          //   const filename = [];
          //  for (let i = 0; i < response.length; i++) {
          //    filename.push(response[i].name);
          //  }
          //  setSelectedFile(filename)
            
          //   console.log("response",response)
          //   console.log("name", filename)
          }
          
        } catch (err) {
          console.error("Unexpected error:", err);
        }
      };

      const fileTypeToIcon = {
        pdf: "file-pdf-box",
        doc: "file-word",
        docx: "file-word",
        xls: "file-excel",
        xlsx: "file-excel",
        ppt: "file-powerpoint",
        pptx: "file-powerpoint",
        jpg: "file-image",
        jpeg: "file-image",
        png: "file-image",
        mp4: "television-play",
        txt: "text",
        m4a: "cast-audio",
        // Add more mappings for other file types
      };
    
      const FileIcon = ({ fileName }) => {
        const extension = fileName.split(".").pop().toLowerCase();
        const iconName = fileTypeToIcon[extension];
    
        if (iconName) {
          return <MaterialCommunityIcons name={iconName} size={18} color="black" />;
        } else {
          return;
        }
      };

      const removeFile = (name) => {
        setSelectedFile((files) => files.filter((file) => file !== name));
        const updatedResponseFile = responseFile.filter((file) => file.name !== name);
        setresponseFile(updatedResponseFile)

      };

    return (
      <>
      {/* <Header currentStep={step} /> */}
      <View style={{}}>
        {/* <KeyboardAvoidingView
                  behavior="position"
                  keyboardVerticalOffset={210}
                //   style={{ flex: 1 }}
                > */}
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
            <View style={globalStyles.stepSubContainer}>
                <StepHeader
                    // title="Subject Body"
                    title={t('s3-title')}
                    // subtitle="Please provide your Subject, Body."
                    subtitle={t('s3-description')}
                    style={styles.header}
                />
               
                          {SubjectBody.map((input) => {
                    return (
                        <View style={styles.field} key={input.name}>
                            <Field
                                name={input.name}
                                label={input.label}
                                placeholder={input.placeHolder}
                                keyboardType={input.keyboardType}
                                // // maxLenght={input.maxLength}
                                handleChange={handleChangeInfo}
                                value={subjectBody[input.name]}
                                errorMessage={errors[input.name]}
                                autoCapitalize={input.autoCapitalize}
                                autoCorrect={input.autoCorrect}
                            />
                        </View>
                    )
                })}

            
 <View   style={{alignSelf: "flex-end"}}>
    <TouchableOpacity   
    // onPress={buttonHandler}
    onPress={pickFile}
          style={{marginTop: 10, width: 150,  backgroundColor: "#F9A34C", flexDirection: 'row',alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding:5}}>
             <Text style={{fontWeight: 'bold', fontSize: 15, color: '#FFF', padding:10 , paddingRight: 3}}>{t('Attach File')}</Text>
             <MaterialCommunityIcons
                    name="attachment"
                    size={30}
                    color= "#FFF"
                    onPress={pickFile}
                  />
          </TouchableOpacity>
          <Text style={{ fontSize: 13, color: colorsPalette.grey.color, alignSelf: "center"}}>{t('maximum')} 15 MB</Text>
      </View> 

       
                
            </View>

          
        
        </TouchableWithoutFeedback>
    {/* </KeyboardAvoidingView> */}

    <FlatList
          data={selectedFile}
          showsVerticalScrollIndicator={true}
          renderItem={({ item, index }) => (
            <View
              style={{
                position: "relative",
                width: "95%",
                paddingHorizontal: 15,
                margin: 5,
              }}
            >
              <View style={{
                 flexDirection: "row",
                 justifyContent: "space-between",
                 alignItems: "center"
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: theme.colors.text,
                  padding: 2,
                  paddingLeft: 35,
                  // height: 48,
                  // borderRadius: 12,
                  backgroundColor: theme.colors.background,
                  // width: "100%",
                }}
              >
                {item}
              </Text>
              <TouchableOpacity onPress={() => removeFile(item)}>
              <MaterialCommunityIcons name='close-circle' size={18} color="red" />
              </TouchableOpacity>
              </View>
              <View
                style={{
                  position: "absolute",
                  left: 20,
                   top: 2,
                  opacity: 0.5,
                }}
              >
                <FileIcon fileName={item} />
              </View>
            </View>
          )}
        />
    </View>
    </>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 0,
    },
    field: {
        marginTop: 10,
    },

  
    iconContainer: {
    // borderRadius: 20,
    // padding: 6,
  },
   icon: {
    alignSelf: 'flex-end',
   },

   footerContainer: {
    height: 72,
    backgroundColor: colorsPalette.white.color,
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
   }
   
})



