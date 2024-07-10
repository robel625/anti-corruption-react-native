import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TabNavigator from './src/navigators/TabNavigator';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './src/components/Loader';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import VerificationScreen from './src/screens/VerificationScreen';
import ResetPassword from './src/screens/ResetPassword';
import SplashScreen from './src/components/Splash';
import { ToastProvider } from "react-native-toast-notifications";
import TermsAndCondition from './src/components/settingpages/TermsAndCondition';
import PrivacyPolcy from './src/components/settingpages/PrivacyPolcy';
import AboutUs from './src/components/settingpages/AboutUs';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRouteName, setInitialRouteName] = React.useState('');

  React.useEffect(() => {
    // setTimeout(() => {
    //   authUser();
    // }, 2000);
    authUser();
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (userData?.loggedIn) {
          setInitialRouteName('Tab');
        } else {
          setInitialRouteName('LoginScreen');
        }
      } else {
        setInitialRouteName('WelcomeScreen');
      }
    } catch (error) {
      setInitialRouteName('WelcomeScreen');
    }
  };
  return (
    <ToastProvider>
    <NavigationContainer>
      {!initialRouteName ? (
        // <Loader visible={true}/>
        <SplashScreen/>
      ) : (
        <>
      <Stack.Navigator 
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}>
      </Stack.Screen>
        <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{animation: 'slide_from_bottom'}}>
        </Stack.Screen>
        <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{animation: 'slide_from_bottom'}}>
        </Stack.Screen>
        <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{animation: 'slide_from_bottom'}}>
        </Stack.Screen>
        <Stack.Screen
            name="ForgetPasswordScreen"
            component={ForgetPasswordScreen}
            options={{animation: 'slide_from_bottom'}}>
        </Stack.Screen>
        <Stack.Screen
            name="VerificationScreen"
            component={VerificationScreen}
            options={{animation: 'slide_from_bottom'}}>
        </Stack.Screen>
        <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{animation: 'slide_from_bottom'}}>
        </Stack.Screen>
        <Stack.Screen
            name="TermsAndCondition"
            component={TermsAndCondition}
            options={{animation: 'slide_from_bottom'}}>
        </Stack.Screen>
        <Stack.Screen
            name="PrivacyPolcy"
            component={PrivacyPolcy}
            options={{animation: 'slide_from_bottom'}}>
        </Stack.Screen>
        <Stack.Screen
            name="AboutUs"
            component={AboutUs}
            options={{animation: 'slide_from_bottom'}}>
        </Stack.Screen>
        
        

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
      </>
      )}
    </NavigationContainer>
    </ToastProvider>
  )
}

export default App

const styles = StyleSheet.create({})