import { View, Text, Image } from 'react-native'
import React from 'react'

export default function YourBooking() {
  return (
    <View className='px-4 py-2 bg-white' >
      <Text className='text-xl text-slate-600 font-semibold py-2'>Your Booking</Text>
      <View className=' w-full bg-blue-200 flex flex-row justify-between items-center px-3 py-2  rounded-md '>
        <View className='flex gap-1'>
            <Text className='font-semibold text-xl text-gray-700'>Home Painting </Text>
            <Text className='text-slate-500 font-medium'>Paint my Home </Text>
            <Text className='text-slate-600 font-medium'>20 jan 2025 | 3:30 pm </Text>
        </View>
        <View >
        <Image 
            source={require("../../assets/images/booking.png")} 
            style={{ width: 70, height: 70 ,  resizeMode: 'contain'}} 
          />
        </View>
      </View>
      <Text className='text-xl text-slate-600 font-semibold py-2'>Nearby service provider</Text>
      
    </View>
  )
}