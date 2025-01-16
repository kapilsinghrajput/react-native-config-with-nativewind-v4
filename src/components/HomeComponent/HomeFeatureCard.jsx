import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

const CardData = [
  {
    title: 'Members',
    screen_type:"MembersScreen",
    category: 'Connect Society Members',
    image: require('../../assets/images/members.png'),
  },
  {
    title: 'Visitors',
    screen_type:"VisitorsScreen",
    category: 'Mangage Visitors Members',
    image: require('../../assets/images/visitor.png'),
  },
  {
    title: 'Notice Board',
    screen_type:"NoticeBoardScreen",
    category: 'Society Announce and event',
    image: require('../../assets/images/noticeBoard.png'),
  },
  {
    title: 'Payment',
    screen_type:"PaymentScreen",
    category: 'Direct Payment Society Due',
    image: require('../../assets/images/payment.png'),
  },
  {
    title: 'Book Amenties',
    screen_type:"BookAmentieScreen",
    category: 'Pre book Society Amenties ',
    image: require('../../assets/images/booking.png'),
  },
  {
    title: 'Help Desk',
    screen_type:"HelpDeskScreen",
    category: 'Compaints & suggestion ',
    image: require('../../assets/images/help.png'),
  },
];

export default function HomeFeatureCard() {
   const navigation = useNavigation();
  return (
    <View className="flex flex-row flex-wrap gap-3 justify-center px-2 my-10 mb-[40%] ">
      {CardData.map((ele, id) => {
        return (
          <TouchableOpacity
          onPress={()=>{navigation.navigate(ele.screen_type)}}
            key={id}
            className="bg-blue-200 w-[45%] h-52 rounded-md p-2 ">
            <View>
              <Text className="text-xl font-semibold text-center text-slate-600">
                {ele.title}
              </Text>
              <Text className="text-center text-base  mt-2 font-bold text-slate-700">
                {ele.category}
              </Text>
            </View>

            <View className=" w-full h-full flex  items-center  mt-5  ">
              <FastImage
                source={ele.image}
                style={{width: 90, height: 90}}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
