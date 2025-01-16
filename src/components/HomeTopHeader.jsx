import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomeTopHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* User Info */}
      <View style={styles.userInfo}>
        <Image
          source={require("../assets/images/visitorThreat.png")} 
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.greeting}>Hi kapil singh</Text>
          <Text style={styles.societyInfo}>A-420 | Bloom society</Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon} onPress={()=>navigation.navigate("Notification")} >
          <Icon name="notifications-outline" size={24} color="#000" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#272947',
  },
  societyInfo: {
    fontSize: 14,
    color: 'gray',
  },
  notificationIcon: {
    marginLeft: 'auto',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});

export default HomeTopHeader;
