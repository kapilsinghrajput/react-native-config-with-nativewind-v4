import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
    
      navigation.reset({
        index: 0,
        routes: [{ name: 'OnboardScreen' }]
   })
    }, 1500);
  }, []);
  return (
    <View className='flex-1  justify-center items-center'>
      <Text style={{fontFamily:"RubikWetPaint-Regular" , fontSize:50 , position:"absolute" , top:"25%" }}>BLOOM </Text>
      <Text style={{fontFamily:"RubikWetPaint-Regular" , fontSize:40 , position:"absolute" , top:"32%" }}> Society</Text>
    <Image source={require('../assets/images/rb_1696.png')} className='w-[100%] h-[70%] object-cover absolute bottom-0 ' />
    </View>
  )
}

export default SplashScreen