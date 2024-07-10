import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../styles';
import {StepHeader} from '../StepHeader/StepHeader';
import {
  Region,
  Addis_Ababa,
  Oromia,
  Amhara,
  SNNPR,
  Somalia,
  Tigray,
} from '../../utils/locationConst';
import * as CSCLocation from '../../utils/locationConst';
import {useEffect, useState} from 'react';

// import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colorsPalette} from '../../styles';
// import DateSelecter from "../../DateSelecter/DateSelecter"
import {useTranslation} from 'react-i18next';
// import Header from "../../Header/Header"
// import Footer from "../../Footer/Footer"
// import Button from "../../Button/Button"
import {BTN_ACTION_TYPE} from '../../utils/const';
import i18n from '../../../../local/i18n';
import DateSelecter from '../../DateSelecter/DateSelecter';
import EthioDateSelecter from '../../EthioDateSelector/EthioDateSelecter';
import SelectDropdown from 'react-native-select-dropdown';
import {FONTFAMILY} from '../../../../theme/theme';
import {Field} from '../../Field/Field';

import AddModel from '../../AddModel';

export function LocationInfo({handleChangeInfo, locationInfo, errors}) {
  const step =
    1 /
    useEffect(() => {
      if (locationInfo.Region) {
        BelowRegion(locationInfo.Region);
      }
      if (locationInfo.District) {
        BelowDistrict(locationInfo.District);
      }
    }, []);

  const {t} = useTranslation();

  const [optionDistrict, setOptionDistrict] = useState([]);
  const [optionCSC, setOptionCSC] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
   };

  function BelowRegion(region) {
    console.log('BelowRegion', region);
    switch (region) {
      case 'Addis Ababa':
        setOptionDistrict(Addis_Ababa);
        return;
      case 'ኦሮሚያ':
        setOptionDistrict(Oromia);
        return;
      case 'ደቡብ ብሄርስቦችና ህዝቦች':
        setOptionDistrict(SNNPR);
        return;
      case 'አማራ':
        setOptionDistrict(Amhara);
        return;
      case 'ሱማሌ':
        setOptionDistrict(Somalia);
        return;
      case 'ትግራይ':
        setOptionDistrict(Tigray);
        return;
      default:
        setOptionDistrict([]);
        return;
    }
  }

  function BelowDistrict(district) {
    console.log('BelowDistrict', district);
    switch (district) {
      case 'North Addis Ababa District':
        setOptionCSC(CSCLocation.North_Addis_Ababa_District);
        return;
      case 'East Addis Ababa District':
        setOptionCSC(CSCLocation.East_Addis_Ababa_District);
        return;
      case 'West Addis Ababa District':
        setOptionCSC(CSCLocation.West_Addis_Ababa_District);
        return;
      case 'South Addis Ababa District':
        setOptionCSC(CSCLocation.South_Addis_Ababa_District);
        return;
      case 'Assosa District':
        setOptionCSC(CSCLocation.Assosa_District);
        return;
      case 'Adama District':
        setOptionCSC(CSCLocation.Adama_District);
        return;
      case 'Ambo District':
        setOptionCSC(CSCLocation.Ambo_District);
        return;
      case 'Bale Robe District':
        setOptionCSC(CSCLocation.Bale_Robe_District);
        return;
      case 'Chiro District':
        setOptionCSC(CSCLocation.Chiro_District);
        return;
      case 'Finfine Zuria District':
        setOptionCSC(CSCLocation.Finfine_Zuria_District);
        return;
      case 'Jima District':
        setOptionCSC(CSCLocation.Jima_District);
        return;
      case 'Metu District':
        setOptionCSC(CSCLocation.Metu_District);
        return;
      case 'Nekemt District':
        setOptionCSC(CSCLocation.Nekemt_District);
        return;
      case 'Shashemene District':
        setOptionCSC(CSCLocation.Shashemene_District);
        return;
      case 'ሱማሌ':
        setOptionCSC(Somalia);
        return;
      case 'ትግራይ':
        setOptionCSC(Tigray);
        return;

      default:
        setOptionCSC([]);
        return;
    }
  }

  return (
    <>
      <View style={globalStyles.stepSubContainer}>
        <StepHeader
          title={t('s1-title')}
          // subtitle="Please provide incident happend Date, location Headoffice/Region, District, and CSC."
          subtitle={t('s1-description')}
          style={styles.header}
        />

      <View style={styles.labelErrorContainer}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontFamily: FONTFAMILY.poppins_regular,
                marginTop: 20,
                color: colorsPalette.denim.color,
              }}>
              {t("To which EEU (Region, District, CSC) to inform your suggestion (optional)")}
            </Text>
          </View>
        <TouchableOpacity onPress= {toggleModal}  >
                <View style={[styles.dropdownButtonStyle, {marginBottom: 20}]}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {locationInfo.CSC || t('Select (Region, District, CSC)')}
                  </Text>
                  <Icon
                    name={'chevron-down'}
                    style={styles.dropdownButtonArrowStyle}
                  />
                </View>
        </TouchableOpacity>
        
         <AddModel  handleChangeInfo={handleChangeInfo} modalVisible={modalVisible} onToggle={toggleModal}/>

      
         

          {/* <View style={styles.labelErrorContainer}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontFamily: FONTFAMILY.poppins_regular,
                marginTop: 15,
                color: colorsPalette.denim.color,
              }}>
              {t('region')}
            </Text>
          </View>
          <SelectDropdown
            data={Region}
            onSelect={(selectedItem, index) => {
              handleChangeInfo('Region', selectedItem);
              BelowRegion(selectedItem), console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {locationInfo.Region || t('Select_Region')}
                  </Text>
                  <Icon
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    style={styles.dropdownButtonArrowStyle}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && {backgroundColor: '#D2D9DF'}),
                  }}>
                  <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />

          <View style={styles.labelErrorContainer}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontFamily: FONTFAMILY.poppins_regular,
                marginTop: 10,
                color: colorsPalette.denim.color,
              }}>
              {t('district')}
            </Text>
          </View>
          <SelectDropdown
            data={optionDistrict}
            onSelect={(selectedItem, index) => {
              handleChangeInfo('District', selectedItem);
              BelowDistrict(selectedItem), console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {locationInfo.District
                      ? locationInfo.District
                      : t('Select_District')}
                  </Text>
                  <Icon
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    style={styles.dropdownButtonArrowStyle}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && {backgroundColor: '#D2D9DF'}),
                  }}>
                  <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
            disabled={false}
          />

          <View style={styles.labelErrorContainer}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontFamily: FONTFAMILY.poppins_regular,
                marginTop: 10,
                color: colorsPalette.denim.color,
              }}>
              {t('csc')}
            </Text>
          </View>
          <SelectDropdown
            data={optionCSC}
            onSelect={(selectedItem, index) => {
              handleChangeInfo('CSC', selectedItem);
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {locationInfo.CSC || t('Select_CSC')}
                  </Text>
                  <Icon
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    style={styles.dropdownButtonArrowStyle}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && {backgroundColor: '#D2D9DF'}),
                  }}>
                  <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={{
              marginTop: -100,
              backgroundColor: '#E9ECEF',
              borderRadius: 8,
            }}
            disabled={false}
          /> */}

          <View style={{marginTop: 10}}>
            <Field
              name="location"
              label= {t('Location')}
              placeholder={t('Location')}
              keyboardType="default"
              // // maxLenght={input.maxLength}
              handleChange={handleChangeInfo}
              value={locationInfo["location"]}
              errorMessage={errors["location"]}
              autoCapitalize="none"
              // autoCorrect={input.autoCorrect}
            />
          </View>

          <View style={styles.labelErrorContainer}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontFamily: FONTFAMILY.poppins_regular,
                marginTop: 10,
                color: colorsPalette.denim.color,
              }}>
              {t('date')}
            </Text>
          </View>
          {i18n.language == 'en' ? (
            <DateSelecter handleChangeDateInfo={handleChangeInfo} />
          ) : (
            <EthioDateSelecter handleChangeDateInfo={handleChangeInfo} />
          )}
      </View>
    </>

    // </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 6,
  },
  // field: {
  //     marginTop: 16,
  // },
  dropdownButtonStyle: {
    // width: 200,
    height: 45,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
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

  labelErrorContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  errorMessage: {
    color: colorsPalette.red.color,
  },

  footerContainer: {
    height: 72,
    backgroundColor: colorsPalette.white.color,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  button: {
		// position: 'absolute',
		// bottom: 30,
		// right: 30,
		// alignItems: 'center',
		// justifyContent: 'center',
		// padding: 10,

		backgroundColor: '#003F5A',
		borderColor: 'transparent',
		borderRadius: 10,
		borderWidth: 3,
		borderColor: 'white'
	  },
});
