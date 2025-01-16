import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardScreen from '../screens/OnboardScreen';
import LogingScreen from '../screens/LogingScreen';
import MainScreen from '../screens/MainScreen';
import Notification from '../screens/Notification';
import MembersScreen from '../screens/HomeCardScreens/MembersScreen';
import VisitorsScreen from '../screens/HomeCardScreens/VisitorsScreen';
import NoticeBoardScreen from '../screens/HomeCardScreens/NoticeBoardScreen';
import PaymentScreen from '../screens/HomeCardScreens/PaymentScreen';
import BookAmentieScreen from '../screens/HomeCardScreens/BookAmentieScreen';
import HelpDeskScreen from '../screens/HomeCardScreens/HelpDeskScreen';

const Stack = createNativeStackNavigator();

export default function StacksRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
      <Stack.Screen name="LogingScreen" component={LogingScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="MembersScreen" component={MembersScreen} />
      <Stack.Screen name="VisitorsScreen" component={VisitorsScreen} />
      <Stack.Screen name="NoticeBoardScreen" component={NoticeBoardScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="BookAmentieScreen" component={BookAmentieScreen} />
      <Stack.Screen name="HelpDeskScreen" component={HelpDeskScreen} />

      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: true,
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
}
