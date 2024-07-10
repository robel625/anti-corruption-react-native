import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyComponent = () => {
  return (
    <View className="flex flex-col mx-auto w-full text-2xl font-bold bg-white max-w-[480px]">
    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2642c791df218dfc69016ad9c93f5556cdd684e692fd6c9852101bffa58d428?apiKey=042993f37fa74b26aa5f9b17574a15db&" }} className="w-full aspect-[1.33]" />
    <View className="flex overflow-hidden relative flex-col py-20 pr-16 pl-5 w-full min-h-[608px]">
      <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e445de143fd9c42b3c8366e113d5460c1b232fb51e5c435ee5a2e583b9e83e20?apiKey=042993f37fa74b26aa5f9b17574a15db&" }} className="object-cover absolute inset-0 size-full" />
      {/* <View className="relative self-start mt-14 text-3xl font-extrabold text-green-400 border border-black border-solid">
        <Text>
          <Text className="text-5xl">United</Text>
          <Text className="text-5xl text-stone-950">ግ</Text>
          <Text className="text-4xl font-medium text-green-400"> against Corruption </Text>
        </Text>
      </View> */}
   
    </View>
  </View>
  )
}

export default MyComponent

const styles = StyleSheet.create({})