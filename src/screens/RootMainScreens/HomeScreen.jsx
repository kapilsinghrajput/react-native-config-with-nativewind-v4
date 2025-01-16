import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import NoticeCard from '../../components/HomeComponent/NoticeCard';
import HomeFeatureCard from '../../components/HomeComponent/HomeFeatureCard';

export default function HomeScreen() {
  return (
    <ScrollView className='' >
      <NoticeCard/>
      <HomeFeatureCard/>
    </ScrollView>
  )
}

