import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme'

const Message = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color:COLORS.primaryLightGreyHex}}>
        Coming Soon
      </Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})