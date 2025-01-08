import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardScreen from '../screens/OnboardScreen';
import LogingScreen from '../screens/LogingScreen';
import MainScreen from '../screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function StacksRoutes() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
       
      />
      <Stack.Screen
        name="OnboardScreen"
        component={OnboardScreen}
       
      />
      <Stack.Screen
        name="LogingScreen"
        component={LogingScreen}
       
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
       
      />
    </Stack.Navigator>
  );
}
