import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import "./global.css"
import OnboardScreen from './src/screens/OnboardScreen'

export default function App() {
  return (
    <SafeAreaView className='flex-1  bg-white '>
      {/* <Text className='font-bold text-2xl' >Metro Config Error </Text>
      <Text>act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] cmp=com.societymanagement/.MainActivity act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] cmp=com.societymanagement/.MainActivity</Text> */}
      <OnboardScreen/>

    </SafeAreaView>
  )
}