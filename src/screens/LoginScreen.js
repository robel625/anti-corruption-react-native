import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert, StatusBar, ImageBackground, ScrollView } from 'react-native';
import COLORS from '../conts/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import api from "../core/api"
import utils from "../core/utils"
import { Toast } from "react-native-toast-notifications";

const LoginScreen = ({navigation}) => {
  // const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [inputs, setInputs] = React.useState({phone: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);


  const validate = async () => {

    Keyboard.dismiss();
    let isValid = true;
    // if (!inputs.email) {
    //   handleError('Please input email', 'email');
    //   isValid = false;
    // }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }else if (!inputs.phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
        handleError('Please input a valid phone number', 'phone');
        isValid = false;
      }

    if (isValid) {
      login();
    }
  };

  const login = async () => {
    setLoading(true);
    try {
      const response = await api({
        method: 'POST',
        url: '/api/loginAndroidtoken/',
        data: {
          phone_number: inputs.phone,
          password: inputs.password,
        },
        // Add timeout option (adjust timeout value as needed)
        timeout: 10000 // 10 seconds
      });
  
      setLoading(false);
      const userData = {
        ...inputs,
        loggedIn: true,
        fullname: response.data.user.full_name,
        refreshToken: response.data.refresh, // Assuming 'refresh_token' is the correct spelling
        accessToken: response.data.access, // Assuming 'access_token' is the correct spelling
      };
      console.log('userData login', userData);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      // Toast.show("Login successful!", { type: "success" });
      navigation.navigate('Tab');
    } catch (error) {
      setLoading(false);
  
      console.log("error RRRRRRRRRR", error)
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
      
      if (error.isAxiosError && error.message.includes('Network Error')) { // Improved network error check
        Toast.show("Network error. Please try again.", { type: "danger" });
      } else if (error.response) {
        // Handle API response error (if any)
        Toast.show(error.response.data.msg || "An unexpected error occurred. Please try again.", { type: "danger" });
          // "Login failed. Please check your credentials.", { type: "danger" });
      } else {
        // Handle other errors
        Toast.show("An unexpected error occurred. Please try again.", { type: "danger" });
      }
  };




    // try {
    //  await api({
    //     method: 'POST',
    //     url: '/api/loginAndroidtoken/',
    //     data: {
    //       // fullname: inputs.fullname,
    //       phone_number: inputs.phone,
    //       password: inputs.password,
    //     },
    //     timeout: 10000
    //   })
    //   .then(async (res) => {
    //     setLoading(false);
    //     const userData = {
    //       ...inputs, // Spread operator to include properties from inputs object
    //       loggedIn: true,
    //       fullname: res.data.user.full_name,
    //       refreshToken: res.data.refresh, // Assuming 'refresh_token' is the correct spelling
    //       accessToken: res.data.access, // Assuming 'access_token' is the correct spelling
    //     };
    //     console.log('userData login',userData)
    //     await AsyncStorage.setItem('userData', JSON.stringify(userData));
    //     Toast.show("success", {
    //       type: "success",
    //     });
    //     navigation.navigate('Tab');
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     if (error.response.data.msg){
    //     Toast.show(error.response.data.msg, {
    //       type: "danger",
    //     });
    //   }
    //   });


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
    // <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
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
            height: 250,
            objectFit: 'contain',
            marginTop: 0,
          }}></ImageBackground>
      </View>
      <View style={{paddingTop: 5, paddingHorizontal: 20, }}>
        <Text style={{textAlign: 'center',color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Log In
        </Text>
        <Text style={{textAlign: 'center',color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Login
        </Text>
        <View style={{marginVertical: 20}}>
          {/* <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          /> */}

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
          <Button title="Log In" onPress={validate} />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text
          style={{
            color: COLORS.black,
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
          }}>
          Don't have account ?
        </Text>
        <Text
           onPress={() => navigation.navigate('SignUpScreen')}
           style={{
            color: '#F9A34C',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
            paddingLeft: 10,
                      }}>
             Register
        </Text>
        </View>
        <Text
           onPress={() => navigation.navigate('ForgetPasswordScreen')}
           style={{
            color: COLORS.grey,
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 14,
            marginTop: 10,
                      }}>
             Forgot Password?
        </Text>
        </View>
      </View>
    </View>
    </ScrollView> 
  );
};

export default LoginScreen;
