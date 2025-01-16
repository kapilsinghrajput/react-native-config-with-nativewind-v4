import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/RootNavigation/RootNavigation';
import StacksRoutes from './src/navigation/StacksRoutes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LogingScreen from './src/screens/LogingScreen';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer ref={navigationRef}>
          <StacksRoutes />
          {/* <MainScreen/> */}
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
