import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomSwitch from '../components/multiStepComponents/CustomSwitch/CustomSwitch';

const SettingScreen = ({navigation}) => {

  const [userDetails, setUserDetails] = React.useState();
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({...userDetails, loggedIn: false}),
    );
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff',  alignItems: 'center',
        justifyContent: 'center',paddingHorizontal: 20, }}>
      {/* <View style={styles.container}> */}
        {/* <ScrollView> */}
        <CustomSwitch />
          <View style={styles.section}>
            {/* <Text style={styles.sectionTitle}>Resources</Text> */}
            {/* <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                <FeatherIcon color="#fff" name="globe" size={20} />
              </View>
              <View>
              <Text style={styles.rowLabel}>Language</Text>
              <Text style={{}}>Change Language</Text>
              </View>
              <View style={styles.rowSpacer} />
              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
                <FeatherIcon color="#fff" name="user" size={20} />
              </View>
              <View>
              <Text style={styles.rowLabel}>Account</Text>
              <Text style={{}}>Change Password</Text>
              </View>
              <View style={styles.rowSpacer} />
              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => navigation.navigate('AboutUs')}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                <FeatherIcon color="#fff" name="info" size={20} />
              </View>
              <View>
              <Text style={styles.rowLabel}>About us</Text>
              <Text style={{}}>Learn more about us</Text>
              </View>
              <View style={styles.rowSpacer} />
              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('TermsAndCondition')}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                <FeatherIcon color="#fff" name="list" size={20} />
              </View>
              <View>
              <Text style={styles.rowLabel}>Terms and Conditions</Text>
              <Text style={{}}>Read the terms and Conditions</Text>
              </View>
              <View style={styles.rowSpacer} />
              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => navigation.navigate('PrivacyPolcy')}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                <FeatherIcon color="#fff" name="shield" size={20} />
              </View>
              <View>
              <Text style={styles.rowLabel}>Privacy Policy</Text>
              <Text style={{}}>View our privacy policy</Text>
              </View>
              <View style={styles.rowSpacer} />
              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                <FeatherIcon color="#fff" name="star" size={20} />
              </View>
              <Text style={styles.rowLabel}>Rate in App Store</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={logout}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: 'red' }]}>
                <FeatherIcon color="#fff" name="log-out" size={20} />
              </View>
              <View>
              <Text style={styles.rowLabel}>Logout</Text>
              <Text style={{}}>Sign out of your account</Text>
              </View>
              <View style={styles.rowSpacer} />
              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>


          </View>
        {/* </ScrollView> */}
      {/* </View> */}
    </SafeAreaView>
  );
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    // padding: 0,
    // flexGrow: 1,
    // flexShrink: 1,
    // flexBasis: 0,
  },
  /** Profile */
//   profile: {
//     padding: 24,
//     backgroundColor: '#fff',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   profileAvatarWrapper: {
//     position: 'relative',
//   },
//   profileAvatar: {
//     width: 72,
//     height: 72,
//     borderRadius: 9999,
//   },
//   profileAction: {
//     position: 'absolute',
//     right: -4,
//     bottom: -10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 28,
//     height: 28,
//     borderRadius: 9999,
//     backgroundColor: '#007bff',
//   },
//   profileName: {
//     marginTop: 20,
//     fontSize: 19,
//     fontWeight: '600',
//     color: '#414d63',
//     textAlign: 'center',
//   },
//   profileAddress: {
//     marginTop: 5,
//     fontSize: 16,
//     color: '#989898',
//     textAlign: 'center',
//   },
  /** Section */
  section: {
    // paddingHorizontal: 24,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // height: 50,
    padding:12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%"
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});