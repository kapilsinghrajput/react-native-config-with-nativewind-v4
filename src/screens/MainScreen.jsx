import React, {useState} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './RootMainScreens/HomeScreen';
import ServiceScreen from './RootMainScreens/ServiceScreen';
import ProfileScreen from './RootMainScreens/ProfileScreen';
import FlashMenus from '../components/FlashMenus';
import HomeTopHeader from '../components/HomeTopHeader';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // headerShown:false,
          tabBarStyle: {
            position: 'absolute',
            left: 20,
            right: 20,
            height: 60,
            borderRadius: 15,
            overflow: 'hidden',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
          },

          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Services') {
              iconName = focused ? 'construct' : 'construct-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return (
              <Icon
                name={iconName}
                size={28}
                color={focused ? '#272947' : 'gray'}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#272947',
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => <HomeTopHeader />,
          }}
        />
        <Tab.Screen name="Services" component={ServiceScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <FlashMenus />
    </View>
  );
}
