import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
// import {BlurView} from '@react-native-community/blur';
import HomeScreen from '../screens/HomeScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import CartScreen from '../screens/CartScreen';
// import OrderHistoryScreen from '../screens/OrderHistoryScreen';
// import CustomIcon from '../components/CustomIcon';
import MultiStep from '../screens/MultiStep';
import Message from '../screens/Message';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import SettingScreen from '../screens/SettingScreen';
import ComingSoonScreen from '../screens/ComingSoonScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarStyle: styles.tabBarStyle,
        // tabBarBackground: () => (
        //   <BlurView
        //     overlayColor=""
        //     blurAmount={15}
        //     style={styles.BlurViewStyles}
        //   />
        // ),
      }}>
      <Tab.Screen
        name="Home"
        component={MultiStep}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
          name= "home"
          size={30}
          color={
                 focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
        />
            // <CustomIcon
            //   name="home"
            //   size={25}
            //   color={
            //     focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            //   }
            // />
          ),
        }}></Tab.Screen>
        <Tab.Screen
        name="Chat"
        component={ComingSoonScreen}
        options={{
          tabBarBadge: 1,
          tabBarIcon: ({focused, color, size}) => (
                       <Icon2
                     name= "chat"
                     size={30}
                     color={
                            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                 />
            // <CustomIcon
            //   name="cart"
            //   size={25}
            //   color={
            //     focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            //   }
            // />
          ),
        }}
        >
          
        </Tab.Screen>
      <Tab.Screen
        name="settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
            name= "settings"
            size={30}
            color={
                   focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
        />
          ),
        }}></Tab.Screen>
      {/* <Tab.Screen
        name="History"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="bell"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
