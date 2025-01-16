import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import YourBooking from '../../components/ServiceComponent/YourBooking'
import ServiceCards from '../../components/ServiceComponent/ServiceCards'

export default function ServiceScreen() {
  return (
    <ScrollView className='mb-[16%] '>
      <YourBooking/>
      {/* <ServiceCards/> */}
    </ScrollView>
  )
}