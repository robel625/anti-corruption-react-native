import { Image, Keyboard, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../conts/colors'
import Loader from '../components/Loader'
import Input from '../components/Input'
import Button from '../components/Button'

const ForgetPasswordScreen = ({navigation}) => {
    const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    navigation.navigate('VerificationScreen');
    // setLoading(true);
    // setTimeout(async () => {
    //   setLoading(false);
    //   let userData = await AsyncStorage.getItem('userData');
    //   if (userData) {
    //     userData = JSON.parse(userData);
    //     if (
    //       inputs.email == userData.email &&
    //       inputs.password == userData.password
    //     ) {
    //       navigation.navigate('HomeScreen');
    //       AsyncStorage.setItem(
    //         'userData',
    //         JSON.stringify({...userData, loggedIn: true}),
    //       );
    //     } else {
    //       Alert.alert('Error', 'Invalid Details');
    //     }
    //   } else {
    //     Alert.alert('Error', 'User does not exist');
    //   }
    // }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      {/* <Loader visible={loading} /> */}
      <View style={{marginTop: 50, alignItems: 'center'}}>
        <Image
          source={require('../assets/eeu_images/new-email.png')}
          style={{width: 130, height: 130, marginTop: 40}}></Image>
        </View> 

      <View style={{paddingTop: 50, paddingHorizontal: 20}}>
      
        <Text style={{textAlign:'center', color: '#F9A34C', fontSize: 40, fontWeight: 'bold'}}>
          Forget Password
        </Text>
        <Text style={{textAlign:'center', color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Enter Your Email
        </Text>
        <View style={{marginVertical: 20, marginBottom:20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />
          {/* <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          /> */}
         <View style={{marginTop:50}}>
          <Button title="Continue" onPress={validate} />
         </View>
          
        </View>
        
      </View>
      
    </SafeAreaView>
  )
}

export default ForgetPasswordScreen

const styles = StyleSheet.create({})