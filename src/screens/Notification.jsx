import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

const NotificationData = [
  {
    title: 'Members',
    category: 'Connect Society Members',
    image: require('../assets/images/members.png'),
    date: '2 min ago',
  },
  {
    title: 'Visitors',
    category: 'Mangage Visitors Members',
    image: require('../assets/images/visitor.png'),
    date: '2 min ago',
  },
  {
    title: 'Notice Board',
    category: 'Society Announce and event',
    image: require('../assets/images/noticeBoard.png'),
    date: '2 min ago',
  },
  {
    title: 'Payment',
    category: 'Direct Payment Society Due',
    image: require('../assets/images/payment.png'),
    date: '2 min ago',
  },
  {
    title: 'Book Amenties',
    category: 'Pre book Society Amenties ',
    image: require('../assets/images/booking.png'),
    date: '2 min ago',
  },
  {
    title: 'Help Desk',
    category: 'Compaints & suggestion ',
    image: require('../assets/images/help.png'),
    date: '2 min ago',
  },
  {
    title: 'Help Desk',
    category: 'Compaints & suggestion ',
    image: require('../assets/images/help.png'),
    date: '2 min ago',
  },
  {
    title: 'Help Desk',
    category: 'Compaints & suggestion ',
    image: require('../assets/images/help.png'),
    date: '2 min ago',
  },
  {
    title: 'Help Desk',
    category: 'Compaints & suggestion ',
    image: require('../assets/images/help.png'),
    date: '2 min ago',
  },
  {
    title: 'Help Desk',
    category: 'Compaints & suggestion ',
    image: require('../assets/images/help.png'),
    date: '2 min ago',
  },
  {
    title: 'Help Desk',
    category: 'Compaints & suggestion ',
    image: require('../assets/images/help.png'),
    date: '2 min ago',
  },
  {
    title: 'Help Desk',
    category: 'Compaints & suggestion ',
    image: require('../assets/images/help.png'),
    date: '2 min ago',
  },
  {
    title: 'Help Desk',
    category: 'Compaints & suggestion ',
    image: require('../assets/images/help.png'),
    date: '2 min ago',
  },
];

export default function Notification() {
  const renderItem = ({item}) => {
    return (
      <View className=" px-4 bg-white ">
        <View className="  px-3 py-2 bg-blue-200  mt-4 flex flex-row justify-between items-center rounded-md ">
          <Image
            source={require("../assets/images/visitorThreat.png")}
            className=" w-16 h-16 object-contain "
          />
          <View>
            <Text className="   rounded-md">{item.title}</Text>
            <Text className="   rounded-md">{item.category}</Text>
          </View>

          <View className=" top-4 ">
            <Text>{item.date}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={NotificationData} renderItem={renderItem} />
    </View>
  );
}
