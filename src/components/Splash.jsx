import { useEffect, useLayoutEffect } from "react"
import { 
	ActivityIndicator,
	Animated,
	Image,
	SafeAreaView, 
	StatusBar, 
	StyleSheet, 
	Text, 
	View,
	useWindowDimensions
} from "react-native"
import { FONTFAMILY } from "../theme/theme"
import Loader from "./Loader"
import COLORS from "../conts/colors"

// import Title from "../common/Title"

function SplashScreen({}) {

	// useLayoutEffect(() => {
	// 	navigation.setOptions({
	// 		headerShown: false
	// 	})
	// }, [])

	const translateY = new Animated.Value(0)
	const duration = 800

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(translateY, {
					toValue: 20,
					duration: duration,
					useNativeDriver: true
				}),
				Animated.timing(translateY, {
					toValue: 0,
					duration: duration,
					useNativeDriver: true
				})
			])
		).start()
	}, [])

	const {width, height} = useWindowDimensions();


	return (
		<SafeAreaView
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'white'
			}}
		>
			<StatusBar barStyle='light-content' />
			<Animated.View style={[{ transform: [{ translateY }] }]}>
		<View style={{flex: 1, flexDirection: 'column', alignItems: 'center',justifyContent: 'center',zIndex:1000}}>
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
        <View style={style.loader}>
          <ActivityIndicator size="large" color={COLORS.blue} />
          <Text style={{marginLeft: 10, fontSize: 16}}>Loading...</Text>
        </View>
        </View>
      </View>
			</Animated.View>
		</SafeAreaView>
	)
}

export default SplashScreen


const style = StyleSheet.create({
	loader: {
	  height: 70,
	  backgroundColor: COLORS.white,
	  marginHorizontal: 50,
	  borderRadius: 5,
	  flexDirection: 'row',
	  alignItems: 'center',
	  paddingHorizontal: 20,
	},
  });