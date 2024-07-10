import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ResendTimer = ({onResendOtp, resendInterval = 30}) => {

    const [secondsRemaining, setSecondsRemaining] = useState(resendInterval);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        if (secondsRemaining > 0) {
          setSecondsRemaining(secondsRemaining - 1);
        } else {
          clearInterval(intervalId);
          setIsActive(false); // Reset timer when it reaches 0
        }
      }, 1000); // Update timer every second
    }

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [isActive, secondsRemaining]);

  const handleResendOtp = () => {
    if (!isActive) { // Prevent multiple resends during cooldown
      setIsActive(true);
      setSecondsRemaining(resendInterval);
      onResendOtp(); // Call the provided function to trigger resend logic
    }
  };
  return (
    <View style={{ alignItems: "center"}}>
      <View style={{flexDirection: 'row',alignItems: 'center', gap: 10  }}>
        <Text>Didn't receive the OTP?</Text>
        {!isActive && <TouchableOpacity onPress={handleResendOtp}>
              <Text style={{color:'#F9A34C'}}>Resend</Text>
        </TouchableOpacity>}
      </View>
      {isActive ? (
        <Text>Resend in {secondsRemaining} seconds</Text>
      ) : (
        <></>
      )}
    </View>
  )
}

export default ResendTimer

const styles = StyleSheet.create({})