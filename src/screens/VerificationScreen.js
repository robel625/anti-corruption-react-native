import { Alert, Image, Keyboard, Modal, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import COLORS from '../conts/colors'
import Loader from '../components/Loader'
import Input from '../components/Input'
import Button from '../components/Button'
import Ionicons from 'react-native-vector-icons/Ionicons';
import VerificationModal from '../components/VerificationModal'
import ResendTimer from '../components/ResendTimer'
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerificationScreen = ({navigation}) => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
    const [modalVisible, setModalVisible] = useState(false)
    const [verificationSuccessful, setVerificationSuccessful] = useState(false)
    const [requestMessage, setRequestMessage] = useState('')

    const [Verifying, setVerifying] = useState(false)
    const [loading, setLoading] = React.useState(false);


    useEffect(() => {
      const values = Object.values(otp).join('');
      if (values.length == 4){
        setVerifying(true)
      }
      if (values.length != 4){
        setVerifying(false)
      }
    }, [otp])


    const submitOTpVerification = () => {
        const values = Object.values(otp).join('');
        console.log(values); 

        setLoading(true);
        setTimeout(async () => {
          setLoading(false);
          let userData = await AsyncStorage.getItem('userData');
          if (userData) {
            userData = JSON.parse(userData);
            if (
              // userData.Activated == false
              values == 1234
            ) {
              setModalVisible(true)
              setVerificationSuccessful(true)
              // navigation.navigate('Tab');
              AsyncStorage.setItem(
                'userData',
                JSON.stringify({...userData, loggedIn: true, Activated: true}),
              );
            } else {
              setModalVisible(true)
              setVerificationSuccessful(false)
              // Alert.alert('Error', 'Invalid OTP');
            }
          } else {
            Alert.alert('Error', 'User does not exist');
          }
        }, 2000);
      };

    const persistLoginAfterOTPVerification = async() => {
            navigation.navigate('Tab');
    };

    
    const handleResendOtp = () => {
      // Implement your resend OTP logic here (e.g., API call)
      console.log('Resending OTP...');
    };


  return (
    <View style={styles.container}>
       <Loader visible={loading} />
         <View style={{marginTop: 50, alignItems: 'center'}}>
          <Image
            source={require('../assets/eeu_images/new-email.png')}
            style={{width: 130, height: 130, marginTop: 40}}></Image>
          </View>     
        <View style={{paddingTop: 50, paddingHorizontal: 20}}>     
          <Text style={{textAlign:'center', color: '#F9A34C', fontSize: 40, fontWeight: 'bold'}}>
             Verification
          </Text>
          <Text style={{textAlign:'center', color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
            A 4-digits verification code we sent to your Phone Number. 
          </Text>
    <View style={styles.otpContainer}>
      <View style={styles.otpBox}>
        <TextInput
          style={styles.otpText}
          keyboardType="number-pad"
          maxLength={1}
          ref={firstInput}
          onChangeText={text => {
            setOtp({...otp, 1: text});
            text && secondInput.current.focus();
          }}
        />
      </View>
      <View style={styles.otpBox}>
        <TextInput
          style={styles.otpText}
          keyboardType="number-pad"
          maxLength={1}
          ref={secondInput}
          onChangeText={text => {
            setOtp({...otp, 2: text});
            text ? thirdInput.current.focus() : firstInput.current.focus();
          }}
        />
      </View>
      <View style={styles.otpBox}>
        <TextInput
          style={styles.otpText}
          keyboardType="number-pad"
          maxLength={1}
          ref={thirdInput}
          onChangeText={text => {
            setOtp({...otp, 3: text});
            text ? fourthInput.current.focus() : secondInput.current.focus();
          }}
        />
      </View>
      <View style={styles.otpBox}>
        <TextInput
          style={styles.otpText}
          keyboardType="number-pad"
          maxLength={1}
          ref={fourthInput}
          onChangeText={text => {
            setOtp({...otp, 4: text});
            !text && thirdInput.current.focus();
          }}
        />
      </View>
      
    </View>
    {/* <Button title="Verify" 
    onPress={submitOTpVerification}
         //   onPress={validate} 
        /> */}
    {Verifying ? <Button title="Verify" 
    onPress={submitOTpVerification}
        /> : <View
        // onPress={onPress}
        activeOpacity={0.7}
        style={{
          height: 55,
          width: '100%',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          marginVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
        }}>
        <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 18}}>
           Verify
        </Text>
      </View>}
      <ResendTimer onResendOtp={handleResendOtp} />
    <VerificationModal
      successful={verificationSuccessful}
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      requestMessage={requestMessage}
      persistLoginAfterOTPVerification=
      {persistLoginAfterOTPVerification}
      />
    </View>
  </View>
  )
}

export default VerificationScreen

const styles = StyleSheet.create({
      otpContainer: {
        margin: 20,
        marginBottom: 40,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
      },
      otpBox: {
        borderRadius: 5,
        borderColor: COLORS.grey,
        borderWidth: 0.5,
        backgroundColor: '#EFEDED',
      },
      otpText: {
        fontSize: 25,
        color: COLORS.black,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
      },
})
















// import { Image, Keyboard, SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import COLORS from '../conts/colors'
// import Loader from '../components/Loader'
// import Input from '../components/Input'
// import Button from '../components/Button'

// const VerificationScreen = () => {
//   return (
//     <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
//       {/* <Loader visible={loading} /> */}
//       <View style={{marginTop: 50, alignItems: 'center'}}>
//         <Image
//           source={require('../assets/eeu_images/new-email.png')}
//           style={{width: 130, height: 130, marginTop: 40}}></Image>
//         </View> 

//       <View style={{paddingTop: 50, paddingHorizontal: 20}}>
      
//         <Text style={{textAlign:'center', color: '#F9A34C', fontSize: 40, fontWeight: 'bold'}}>
//            Verification
//         </Text>
//         <Text style={{textAlign:'center', color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
//           A 4-digits verification code we sent to your Phone Number. 
//         </Text>
//         <View style={{marginVertical: 20, marginBottom:20}}>
         
//           <Button title="Continue" 
//         //   onPress={validate} 
//         />
          
//         </View>
        
//       </View>
      
//     </SafeAreaView>
//   )
// }

// export default VerificationScreen

// const styles = StyleSheet.create({})





















// import { Image, Keyboard, SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import COLORS from '../conts/colors'
// import Loader from '../components/Loader'
// import Input from '../components/Input'
// import Button from '../components/Button'

// const VerificationScreen = () => {
//     const [inputs, setInputs] = React.useState({email: '', password: ''});
//   const [errors, setErrors] = React.useState({});
//   const [loading, setLoading] = React.useState(false);

//   const validate = async () => {
//     Keyboard.dismiss();
//     let isValid = true;
//     if (!inputs.email) {
//       handleError('Please input email', 'email');
//       isValid = false;
//     }
//     if (!inputs.password) {
//       handleError('Please input password', 'password');
//       isValid = false;
//     }
//     if (isValid) {
//       login();
//     }
//   };

//   const login = () => {
//     setLoading(true);
//     setTimeout(async () => {
//       setLoading(false);
//       let userData = await AsyncStorage.getItem('userData');
//       if (userData) {
//         userData = JSON.parse(userData);
//         if (
//           inputs.email == userData.email &&
//           inputs.password == userData.password
//         ) {
//           navigation.navigate('HomeScreen');
//           AsyncStorage.setItem(
//             'userData',
//             JSON.stringify({...userData, loggedIn: true}),
//           );
//         } else {
//           Alert.alert('Error', 'Invalid Details');
//         }
//       } else {
//         Alert.alert('Error', 'User does not exist');
//       }
//     }, 3000);
//   };

//   const handleOnchange = (text, input) => {
//     setInputs(prevState => ({...prevState, [input]: text}));
//   };

//   const handleError = (error, input) => {
//     setErrors(prevState => ({...prevState, [input]: error}));
//   };
//   return (
//     <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
//       {/* <Loader visible={loading} /> */}
//       <View style={{marginTop: 50, alignItems: 'center'}}>
//         <Image
//           source={require('../assets/eeu_images/new-email.png')}
//           style={{width: 130, height: 130, marginTop: 40}}></Image>
//         </View> 

//       <View style={{paddingTop: 50, paddingHorizontal: 20}}>
      
//         <Text style={{textAlign:'center', color: '#F9A34C', fontSize: 40, fontWeight: 'bold'}}>
//            Verification
//         </Text>
//         <Text style={{textAlign:'center', color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
//           A 4-digits verification code we sent to your Phone Number. 
//         </Text>
//         <View style={{marginVertical: 20, marginBottom:20}}>
//           <Input
//             onChangeText={text => handleOnchange(text, 'email')}
//             onFocus={() => handleError(null, 'email')}
//             iconName="email-outline"
//             label="Email"
//             placeholder="Enter your email address"
//             error={errors.email}
//           />
//           {/* <Input
//             onChangeText={text => handleOnchange(text, 'password')}
//             onFocus={() => handleError(null, 'password')}
//             iconName="lock-outline"
//             label="Password"
//             placeholder="Enter your password"
//             error={errors.password}
//             password
//           /> */}
//          <View style={{marginTop:50}}>
//           <Button title="Continue" onPress={validate} />
//          </View>
          
//         </View>
        
//       </View>
      
//     </SafeAreaView>
//   )
// }

// export default VerificationScreen

// const styles = StyleSheet.create({})