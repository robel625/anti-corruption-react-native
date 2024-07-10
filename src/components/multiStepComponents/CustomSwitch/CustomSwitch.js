import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import i18n from '../../../local/i18n';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomSwitch = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  // const handleToggle = () => {

  //   const newLanguage = currentLanguage === 'en' ? 'am' : 'en';
  //   i18n.changeLanguage(newLanguage);
  //   setCurrentLanguage(newLanguage);
  // };
  // useEffect(() => {
  //   {i18n.language == 'en' ? 'አማ' : 'En'}
  // }, []);

  const handleChangeLanguage = (selectedItem) => {

    switch (selectedItem) {
      case "አማርኛ":
        i18n.changeLanguage("am");
        setCurrentLanguage("am");
        return 
      case 'English':
        i18n.changeLanguage("en");
        setCurrentLanguage("en");
         return
      case 'Afaan Oromoo':
        i18n.changeLanguage("or");
        setCurrentLanguage("or");
          return 
      case 'ትግርኛ':
        i18n.changeLanguage("tg");
        setCurrentLanguage("tg");
          return 
       case 'Af Somali':
        i18n.changeLanguage("sm");
        setCurrentLanguage("sm");
          return  
      case 'Qafar Af':
        i18n.changeLanguage("af");
        setCurrentLanguage("af");
        return 
      default:
        i18n.changeLanguage("en");
        setCurrentLanguage("en");
          return 
    }

    // const newLanguage = currentLanguage === 'en' ? 'am' : 'en';
    // i18n.changeLanguage(newLanguage);
    // setCurrentLanguage(newLanguage);
  };

  const Region = [ "አማርኛ", "English", "Afaan Oromoo", "ትግርኛ", "Af Somali","Qafar Af"]

  return (
    // <TouchableOpacity style={styles.container} onPress={handleToggle}>
    //   <View>
    //     <Text style={styles.text}>{i18n.language == 'en' ? 'አማ' : 'En'}</Text>
    //   </View>
    // </TouchableOpacity>
    <View style={styles.container}>
      {/* <Text style={[styles.text, {color: "black"}]}>{i18n.language == 'en' ? 'አማ' : 'En'}</Text> */}
    <SelectDropdown
                    data={Region}
                    onSelect={(selectedItem, index) => {
                      // handleChangeInfo("Region",selectedItem)
                      // BelowRegion(selectedItem),
                      handleChangeLanguage(selectedItem)
                      console.log(selectedItem, index);
                    }}
                    renderButton={(selectedItem, isOpened) => {
                      return (
                        <View style={styles.dropdownButtonStyle}>
                          {/* {selectedItem && (
                            <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
                          )} */}
                          <Text style={styles.dropdownButtonTxtStyle}>
                            {i18n.language == 'en' && 'En'}
                            {i18n.language == 'am' && 'አማ'}
                            {i18n.language == 'or' && 'Or'}
                            {i18n.language == 'tg' && 'Tg'}
                            {i18n.language == 'sm' && 'Sm'}
                            {i18n.language == 'af' && 'Af'}
                          </Text>
                          {/* <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} /> */}
                        </View>
                      );
                    }}
                    renderItem={(item, index, isSelected) => {
                      return (
                        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                          {/* <Icon name={item.icon} style={styles.dropdownItemIconStyle} /> */}
                          <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                        </View>
                      );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                  />
          </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#FFF',

    zIndex: 1000, position: "absolute", top: 30, right: 30
  },
  // text: {
  //   fontSize: 16,
  // },

  //  marginTop: 16,
// },
dropdownButtonStyle: {
    // width: 20,
    // height: 20,
    // backgroundColor: 'red',
    // borderRadius: 2,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    // flex: 1,
    fontSize: 16,
    // fontWeight: '500',
    color: '#151E26',
  },
  // dropdownButtonArrowStyle: {
  //   fontSize: 8,
  // },
  // dropdownButtonIconStyle: {
  //   fontSize: 28,
  //   marginRight: 8,
  // },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
    width: 150,
    marginLeft: -100
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#D2D9DF"
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },

});

export default CustomSwitch;