import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
// import ImageBackgroundInfo from '../components/ImageBackgroundInfo'

const WelcomeScreen = ({navigation}) => {
    const colors2 = ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)','rgba(0, 0, 0, 0.9)',// Blue with 80% opacity
    'rgba(0, 0, 0, 1)', // Darker blue with 50% opacity
];
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor="#FFFFFF" />
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center',zIndex:1000}}>
        <Image
          source={require('../assets/eeu_images/eeu_pdf_logo.png')}
          style={{width: 130, height: 130, marginTop: 15}}></Image>
        <View>
        <Text style={{marginTop:12, letterSpacing: 0.7,
           fontFamily: FONTFAMILY.poppins_bold,
           fontSize: 18, color: "#F9A34C"}}>
            የኢትዮጵያ  ኤሌክትሪክ አገልግሎት 
        </Text>
        <Text style={{marginTop:-10,letterSpacing: 0.5,
           fontFamily: FONTFAMILY.poppins_bold,
           fontSize: 20, color: "#69BF70"}}>
            Ethiopian Electric Utility
        </Text>
        </View>
      </View>
      <View style={{flex: 3,}}>
      {/* <LinearGradient colors={colors2} style={{position: 'static', width: "auto", height: "110%", marginTop:-50, zIndex:1}}>
      </LinearGradient> */}
      <Image
          source={require('../assets/eeu_images/eeu_line.png')}
          style={{width: "auto", height: 70}}></Image>
      <ImageBackground
          source={require('../assets/eeu_images/eeu_oldBuilding.png')}
          style={{flex: 3, // Cover the entire container
          resizeMode: 'cover'}}>
          <LinearGradient colors={colors2} style={{ width: "auto", height: "110%", marginTop: 50, zIndex:1}}>
                <View style={{}}>
                <Text style={{marginTop: -30, textAlign: 'center', letterSpacing: 0.7,
           fontFamily: FONTFAMILY.poppins_bold,fontWeight: 'bold',
           fontSize: 25,  
           color: "#000000",
           textShadow: '000000',
        //    textShadowRadius:1,
        //    textShadowOffset:{
        //       width: 1,
        //       height: 1,},
              }}>
            Ethics and Anti-Corruption Directorate
        </Text>
        <Text style={{ marginTop: 20, marginLeft: 20 , textAlign: 'left', letterSpacing: 0.7,
           fontFamily: FONTFAMILY.poppins_bold,
           fontSize: 40,  
           color: "#FF8000",
           textShadow: '000000',
           textShadowRadius:1,
           textShadowOffset:{
              width: 1,
              height: 1,},}}>
            United
        </Text>
        <Text style={{ marginTop: -20, marginLeft: 20 , textAlign: 'left', letterSpacing: 0.7,
           fontFamily: FONTFAMILY.poppins_semibold,
           fontSize: 30,  
           color: "#74DD7D",
           textShadow: '000000',
           textShadowRadius:1,
           textShadowOffset:{
              width: 1,
              height: 1,},}}>
            Against Corruption
        </Text>
        </View>
        </LinearGradient>
        </ImageBackground>

        <View style={{flex: 1,position:"absolute",bottom:50,width: '100%',alignItems:'center'}}>
           <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')} style={{width: "80%", margin: 10, padding:5, borderRadius: 100,   backgroundColor:"#F9A34C",  alignItems: 'center'}}>
               <Text style={{color:'black', fontFamily:FONTFAMILY.poppins_bold, fontSize: 20}}>Login</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')} style={{width: "80%", margin: 20, padding:5, borderRadius: 100,   backgroundColor:"#69BF70",  alignItems: 'center'}}>
               <Text style={{color:'white', fontFamily:FONTFAMILY.poppins_bold, fontSize: 20}}>SignUp</Text>
           </TouchableOpacity>
        </View>
     

      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    // backgroundColor: COLORS.primaryBlackHex,
    backgroundColor: '#FFFFFF',
  },
  // ScrollViewFlex: {
  //   flexGrow: 1,
  //   justifyContent: 'space-between',
  // },
  // FooterInfoArea: {
  //   padding: SPACING.space_20,
  // },
  // InfoTitle: {
  //   fontFamily: FONTFAMILY.poppins_semibold,
  //   fontSize: FONTSIZE.size_16,
  //   color: COLORS.primaryWhiteHex,
  //   marginBottom: SPACING.space_10,
  // },
  // DescriptionText: {
  //   letterSpacing: 0.5,
  //   fontFamily: FONTFAMILY.poppins_regular,
  //   fontSize: FONTSIZE.size_14,
  //   color: COLORS.primaryWhiteHex,
  //   marginBottom: SPACING.space_30,
  // },
  // SizeOuterContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   gap: SPACING.space_20,
  // },
  // SizeBox: {
  //   flex: 1,
  //   backgroundColor: COLORS.primaryDarkGreyHex,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: SPACING.space_24 * 2,
  //   borderRadius: BORDERRADIUS.radius_10,
  //   borderWidth: 2,
  // },
  // SizeText: {
  //   fontFamily: FONTFAMILY.poppins_medium,
  // },
});
