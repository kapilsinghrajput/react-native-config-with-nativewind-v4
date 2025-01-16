import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

export default function ServiceCards() {
  const CardData = [
    {
      title: 'Home Cleaning',
      image: require('../../assets/images/Home_cleaning.png'),
    },
    {
      title: 'Applicances Repair',
      category: 'Mangage Visitors Members',
      image: require('../../assets/images/applicances_repair.png'),
    },
    {
      title: 'Carpenter Services',
      category: 'Society Announce and event',
      image: require('../../assets/images/carpenter_service.png'),
    },
    {
      title: 'Home Painter',
      category: 'Direct Payment Society Due',
      image: require('../../assets/images/home_Painter.png'),
    },
    {
      title: 'Pulmbing Service',
      category: 'Pre book Society Amenties ',
      image: require('../../assets/images/plumbingServices.png'),
    },
    {
      title: 'Packer & Movers ',
      category: 'Compaints & suggestion ',
      image: require('../../assets/images/packer&mover.png'),
    },
    {
      title: 'Home Sanitize',
      category: 'Compaints & suggestion ',
      image: require('../../assets/images/Home_cleaning.png'),
    },
    {
      title: 'Hair & Beauty',
      category: 'Compaints & suggestion ',
      image: require('../../assets/images/hair&beauty.png'),
    },
    {
      title: 'Plumbing Services',
      category: 'Compaints & suggestion ',
      image: require('../../assets/images/plumbingServices.png'),
    },
    {
      title: 'Loundry Services',
      category: 'Compaints & suggestion ',
      image: require('../../assets/images/loundry-service.png'),
    },
    {
      title: 'Gardening',
      category: 'Compaints & suggestion ',
      image: require('../../assets/images/gardening.png'),
    },
    {
      title: 'Cooking',
      category: 'Compaints & suggestion ',
      image: require('../../assets/images/cooking.png'),
    },
  ];
  return (
    <View className="flex flex-row justify-between flex-wrap gap-4 px-4 py-4 pb-20  ">
      {CardData.map((ele, ind) => {
        return (
          <View
            key={ind}
            className="bg-blue-200 w-[45%] h-32 flex justify-center items-center rounded-md  ">
            <FastImage
              source={ele.image}
              style={{width: 100, height: 80}}
              resizeMode={FastImage.resizeMode.contain}
              priority={FastImage.priority.normal}
            />
            <Text className="text-center text-lg text-gray-700 font-semibold ">
              {ele.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
