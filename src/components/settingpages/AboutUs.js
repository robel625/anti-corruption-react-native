import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
  } from '../../theme/theme';

const AboutUs = () => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor="#FFFFFF" />
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center',zIndex:1000}}>
        <Image
          source={require('../../assets/eeu_images/eeu_pdf_logo.png')}
          style={{width: 130, height: 130, marginTop: 50}}></Image>
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
      <View style={styles.container}>
      <Text style={styles.heading}>Ethiopian Electric Utility</Text>
      <Text style={styles.paragraph}>
      The Ethiopian Electric Utility (EEU), a fully government-owned public enterprise, was established in 2014 after 
      having undergone restructuring made on the Ethiopian Electric Power Corporation (EEPCO).
      </Text>
      <Text style={styles.paragraph}>
      EEU is responsible for universal electrification programs, administration of 45/66 Kv sub-transmission, 
      administration of distribution network, and distribution and sale of electric power customers throughout the country. 
      </Text>
      <Text style={styles.paragraph}>
      The utility is working to outreach the supply of electricity and to expand the necessary infrastructure in all 
      parts of the country.  
      </Text>
     
        

      <Text style={styles.contact}>Contact Us</Text>
      <Text style={styles.contactInfo}>
        By email: eeu@gmail.com
      </Text>
      <Text style={styles.contactInfo}>
        By visiting this page on our website:{' '}
        <Text style={styles.link} onPress={() => Linking.openURL("http://www.ethiopianelectricutility.gov.et/")}>
        http://www.ethiopianelectricutility.gov.et/
        </Text>
      </Text>
      <Text style={styles.contactInfo}>By phone number: 905</Text>

      </View>

       
        
    </View>
  )
}

export default AboutUs

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },

      container: {
        flex:2,
        // alignItems: 'center',
        padding: 20,
      },

      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
      },
      link: {
        color: 'blue',
        textDecorationLine: 'underline',
      },
      paragraph: {
        fontSize: 14,
        marginBottom: 10,
        color: 'black',
      },
      contact: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: 'black',
      },
      contactInfo: {
        fontSize: 14,
        marginBottom: 5,
        color: 'black',
      },
      
      
})