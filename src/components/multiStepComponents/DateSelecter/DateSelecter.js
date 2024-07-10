import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React, { useState } from 'react'
import DatePicker from "@react-native-community/datetimepicker";
// import Icons from "@expo/vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from "@react-navigation/native";
// import { colorsPalette } from '../../styles'
import { useTranslation } from 'react-i18next';

const DateSelecter = ({handleChangeDateInfo}) => {

    const theme = useTheme();
    const { t } = useTranslation();

    const [showPicker, setShowPicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dateSelected, setDateSelected] = useState(false);

    const [selectedDateError, setSelectedDateError] = useState("");

    const onDateChange = (event, newDate) => {
        setSelectedDate(newDate);
        setDateSelected(true);
        setSelectedDateError('')
        setShowPicker(Platform.OS === "ios" ? true : false); // Keep picker open on iOS

        handleChangeDateInfo('incident_date', newDate? newDate.toISOString().split("T")[0] : "")
        
      };
    
      const handleClose = () => {
        setShowPicker(false);
      };
    
      const formattedDate = selectedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

    return (
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
                                {/* Incident happend Date:  */}
                                {formattedDate}
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
                        {/* <Icons
                            name="date-range"
                            size={24}
                            color={theme.colors.text}
                            style={{
                                position: "absolute",
                                left: 12,
                                top: 12,
                                opacity: 0.5,
                            }}
                        /> */}
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
                <DatePicker
                    mode="date"
                    value={selectedDate}
                    onChange={onDateChange}
                    // onClose={handleClose}
                    style={styles.datePicker}
                />
            )}
        </View>
    )
}

export default DateSelecter

const styles = StyleSheet.create({
    datePicker: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
      },
})