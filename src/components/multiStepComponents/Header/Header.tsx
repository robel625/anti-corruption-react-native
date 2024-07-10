import { ImageBackground, StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View, } from 'react-native'
import { BodyText } from '../Text/Text'
import { colorsPalette } from '../styles'
import i18n from '../../../local/i18n';
import { useEffect, useState } from 'react';
import CustomSwitch from '../CustomSwitch/CustomSwitch';
// import Icons from "@expo/vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import Carousel from '../../Carousel';

interface Props {
    currentStep: number,
}

const IMG_HEADER_BG = require("../../../assets/eeu_images/eeu_oldBuilding.png")

// const languages = { en: 'English', am: 'አማርኛ' };


export default function Header(props: Props): JSX.Element {

    const navigation = useNavigation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

    

    const steps: JSX.Element[] = []
    for (let i = 1; i < 4; i++) {
        steps.push(
            <View
                key={`step-${i}`}
                style={[
                    styles.ellipse,
                    props.currentStep === i ? styles.active : styles.unactive
                ]}>
                <BodyText
                    fontWeigth='bold'
                    customStyle={{
                        color: props.currentStep === i ? colorsPalette.denim.color : colorsPalette.white.color
                    }}>
                    {i.toString()}
                </BodyText>
            </View>
        )
    }

    return (
        <View>
        <StatusBar translucent backgroundColor="transparent" />
        <CustomSwitch />
        {/* <TouchableOpacity onPress={() => navigation.navigate("IntroScreen02")} style={{zIndex: 1000, position: "absolute", top: 30, left: 30}}>
          <Icon
          name= "arrow-back-ios"
          style={{color: "#000000", fontSize: 22, marginRight: 10}}
        />
        </TouchableOpacity> */}
        <View style={{backgroundColor: 'black',}}>
        {/* <ImageBackground
            source={IMG_HEADER_BG}
            style={styles.imgHeaderBG}
        >
            {steps}
        </ImageBackground> */}
        <Carousel/>
        <View style={{height: 200, display: 'flex',
        flexDirection: 'row',
        justifyContent: "center", marginTop: -200}}>
        {steps}
        </View>
        
        </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    imgHeaderBG: {
        height: 200,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        // backgroundColor: 'rgba(0, 0, 0, 0.3)',
        opacity: 0.6
        
    },
    ellipse: {
        width: 33,
        height: 33,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
        marginHorizontal: 18,
        
    },
    active: {
        backgroundColor: colorsPalette.skyBlue.color,
    },
    unactive: {
        borderWidth: 1,
        borderColor: colorsPalette.white.color,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },



   
})
