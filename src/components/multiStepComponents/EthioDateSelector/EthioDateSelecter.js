import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React, { useState } from 'react'
import DatePicker from "@react-native-community/datetimepicker";
// import Icons from "@expo/vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from "@react-navigation/native";
// import { colorsPalette } from '../../styles'
import { useTranslation } from 'react-i18next';
import {
    Calendar,
    LanguageCode,
    Mode,
    SelectedDate,
  } from 'react-native-ethiopian-calendar';
import { format } from 'date-fns'

const EthioDateSelecter = ({handleChangeDateInfo}) => {

    const theme = useTheme();
    const { t } = useTranslation();

    const [showPicker, setShowPicker] = useState(false);
    // const [selectedDate, setSelectedDate] = useState(new Date());
    const [dateSelected, setDateSelected] = useState(false);

    const [selectedDateError, setSelectedDateError] = useState("");

    const [mode, setMode] = React.useState('EC');
      const [locale, setLocale] = React.useState('AMH');
      const [selectedDate, setSelectedDate] = React.useState();

      console.log("selectedDate", selectedDate)

    const onDateChange = (date) => {
        setSelectedDate(date), 
        handleClose(), 
        setDateSelected(true)
    //     setShowPicker(false)
    //     // setSelectedDate(newDate);
    //     // setDateSelected(true);
        setSelectedDateError('')
    //     // setShowPicker(Platform.OS === "ios" ? true : false); // Keep picker open on iOS

       console.log("date", date)
    //    const formattedDate2 = `${date?.gregorian?.year}-${date?.gregorian?.month}-${date?.gregorian?.date}`;
    //    const formattedDate2 = format(
    //     new Date(selectedDate?.gregorian?.year, selectedDate?.gregorian.month - 1, selectedDate?.gregorian?.date),
    //     'yyyy-MM-dd'
    //   )
      const formattedDate2 = date?.gregorian ? format(
        new Date(date.gregorian.year, date.gregorian.month - 1, date.gregorian.date),
        'yyyy-MM-dd'
    ) : 'Invalid date';

        handleChangeDateInfo('incident_date', formattedDate2? formattedDate2 : "")

        console.log('incident_date', formattedDate2)
        
      };
    
      const handleClose = () => {
        setShowPicker(false);
      };
    
    //   const formattedDate = selectedDate.toLocaleDateString("en-US", {
    //     year: "numeric",
    //     month: "short",
    //     day: "numeric",
    //   });

      console.log("selectedDate", selectedDate)

    //   const formattedDate = `${selectedDate?.gregorian?.year}-${selectedDate?.gregorian?.month}-${selectedDate?.gregorian?.date}`;

      const formattedDateEthiopian = `${selectedDate?.ethiopian?.year}-${selectedDate?.ethiopian?.month}-${selectedDate?.ethiopian?.date}`;

    //   const formattedDate = format(
    //     new Date(selectedDate?.gregorian?.year, selectedDate?.gregorian.month - 1, selectedDate?.gregorian?.date),
    //     'yyyy-MM-dd'
    //   )
      
    //   const formattedDateEthiopian = format(
    //     new Date(selectedDate?.ethiopian?.year, selectedDate?.ethiopian.month - 1, selectedDate?.ethiopian?.date),
    //     'yyyy-MM-dd'
    //   )
      console.log(formattedDateEthiopian)

    return (
    //     <Calendar
    //     mode={mode}
    //     onDatePress={(date) => setSelectedDate(date)}
    //     onModeChange={(selectedMode) => setMode(selectedMode)}
    //     onLanguageChange={(lang) => setLocale(lang)}
    //     locale={locale}
    //   />
        <View>
            <View
                style={{ position: "relative", width: "100%" }}
            >
                <TouchableOpacity onPress={() => setShowPicker(true)}>
                    <>
                        {dateSelected ? (
                            <Text
                                // placeholder="Incident happend Date"
                                style={{
                                    fontSize: 16,
                                    fontWeight: "500",
                                    color: theme.colors.text,
                                    paddingLeft: 48,
                                    paddingRight: 12,
                                    height: 48,
                                    borderRadius: 12,
                                    backgroundColor: '#E9ECEF',
                                    width: "100%",
                                    paddingVertical: 12,
                                }}
                            >
                                {/* ድርጊቱ የተከናወነበትን ቀን :  */}
                                {formattedDateEthiopian}
                            </Text>
                        ) : (
                            <Text
                                // placeholder="Incident happend Date"
                                style={{
                                    fontSize: 16,
                                    fontWeight: "500",
                                    color: theme.colors.text,
                                    paddingLeft: 48,
                                    paddingRight: 12,
                                    height: 48,
                                    borderRadius: 12,
                                    backgroundColor: '#E9ECEF',
                                    width: "100%",
                                    opacity: 0.5,
                                    paddingVertical: 12,
                                    borderColor: selectedDateError
                                        ? "#ff5555"
                                        : "transparent",
                                    borderWidth: 1,
                                }}
                            >
                                {t("Select_Date")}
                            </Text>
                        )}
                         <Icon
                           name= "date-range"
                           style={{color: "#000000", fontSize: 22, position: "absolute",
                           left: 12,
                           top: 12,
                           opacity: 0.5,}}
                         />
                    </>
                </TouchableOpacity>
            </View>

            {/* <View> */}

            {showPicker && (
                // <DatePicker
                //     mode="date"
                //     value={selectedDate}
                //     onChange={onDateChange}
                //     // onClose={handleClose}
                //     style={styles.datePicker}
                // />
                    <Calendar
        mode={mode}
        onDatePress={(date) => onDateChange(date)}
        onModeChange={(selectedMode) => setMode(selectedMode)}
        onLanguageChange={(lang) => setLocale(lang)}
        locale={locale}
      />
            )}
        </View>
    )
}

export default EthioDateSelecter

const styles = StyleSheet.create({
    datePicker: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
      },
})