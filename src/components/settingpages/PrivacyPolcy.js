
import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const PrivacyPolcy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Privacy Policy</Text>
      <Text style={styles.subheading}>Last updated: June 19, 2024</Text>
      <Text style={styles.paragraph}>
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </Text>
      <Text style={styles.paragraph}>
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy. 
        {/* This Privacy Policy has been
        created with the help of the{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.privacypolicies.com/privacy-policy-generator/')} >
          Privacy Policy Generator
        </Text> */}
      </Text>
      {/* ... rest of the privacy policy content ... */}
      <Text style={styles.contact}>Contact Us</Text>
      <Text style={styles.contactInfo}>
        By email: eeu@gmail.com
      </Text>
      <Text style={styles.contactInfo}>
        By visiting this page on our website:{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('http://www.ethiopianelectricutility.gov.et/')} >
          http://www.ethiopianelectricutility.gov.et/
        </Text>
      </Text>
      <Text style={styles.contactInfo}>By phone number: 905</Text>
    </View>
  );
};

export default PrivacyPolcy

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
      },
      subheading: {
        fontSize: 16,
        color: '#888',
        marginBottom: 10,
      },
      paragraph: {
        fontSize: 14,
        marginBottom: 10,
        color: 'black',
      },
      link: {
        color: 'blue',
        textDecorationLine: 'underline',
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