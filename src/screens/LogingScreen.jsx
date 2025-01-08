import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export default function LogingScreen({navigation}) {
  return (
    <View className="flex-1 bg-green-100 ">
      <View className="  pt-10 items-center h-[50%] ">
        <Text className=" text-2xl font-bold ">LOGIN</Text>
        <Text> Please Login Your Account</Text>

        <View className="mt-10 flex justify-center items-center gap-2 w-full  ">
          <TextInput
            placeholderTextColor="#595757"
            className="bg-green-300 text-black w-[90%] px-4 font-medium text-lg  rounded-md "
            placeholder="Email Addrees... "
          />
          <TextInput
            placeholderTextColor="#595757"
            className="bg-green-300 text-black w-[90%] px-4 font-medium text-xl py-3 rounded-md "
            placeholder="Password..."
          />
        <TouchableOpacity 
        onPress={()=>navigation.navigate("MainScreen")}
        className="bg-blue-300 mt-3 text-black w-[90%] py-3 rounded-md
         ">
          <Text className='text-center text-xl  font-bold '>Log in</Text>
        </TouchableOpacity>
        </View>
      </View>

      <Image
        source={require('../assets/images/rb_9013.png')}
        className="w-[100%]  h-[40%] object-cover absolute right-0 left-0  -bottom-10 "
      />
    </View>
  );
}
