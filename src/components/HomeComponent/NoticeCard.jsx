import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function NoticeCard() {
  return (
    <View className='p-5 bg-white '>
      {/* Notice Card */}
      <View style={styles.noticeCard} className='bg-blue-200'>
        <View style={styles.noticeContent}>
          <Text style={styles.noticeTitle}>NOTICE</Text>
          <Text style={styles.noticeText}>
            New year gathering in Bloom society's hall...
          </Text>
        </View>
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>New</Text>
        </View>
      </View>

      <View className=''>
        <Text className="text-xl font-semibold ">Community</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noticeCard: {
    // backgroundColor: '#76d7c4',
    borderRadius: 10,
    paddingHorizontal:15,
    paddingVertical:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noticeContent: {
    flex: 1,
  },
  noticeTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#272947',
    marginBottom: 5,
  },
  noticeText: {
    fontSize: 14,
    color: '#272947',
  },
  newBadge: {
    backgroundColor: '#0056D2',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
