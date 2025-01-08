import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export default function FlashMenus() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    if (menuVisible) setMenuVisible(false);
  };
  return (
    <View>
      <TouchableOpacity style={styles.flashButton} onPress={toggleMenu}>
        {menuVisible ? (
          <Icon name="close" size={30} color="red" />
        ) : (
          <Icon name="flash" size={30} color="green" />
        )}
      </TouchableOpacity>

      {menuVisible && (
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={styles.overlay} className="bg-red-900 flex-1">
            <TouchableWithoutFeedback>
              <View
                style={styles.menuContainer}
                className=" rounded-md bg-green-200 ">
                <View className="flex flex-row flex-wrap gap-4 justify-center  mt-5">
                  <TouchableOpacity className="w-36 h-36 bg-green-300 rounded-md flex justify-center items-center">
                    <Text className="text-center font-bold text-xl">
                      Fire Alert
                    </Text>
                    <Image
                      source={require('../assets/images/fireAlert.png')}
                      className="w-20 h-20 object-cover"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-36 h-36 bg-green-300 rounded-md flex justify-center items-center">
                    <Text className="text-center font-bold text-xl ">
                      Stuck In Lift
                    </Text>
                    <Image
                      source={require('../assets/images/LiftStack.png')}
                      className="w-20 h-20 object-cover"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-36 h-36 bg-green-300 rounded-md flex justify-center items-center">
                    <Text className="text-center font-bold text-xl leading-6">
                      Animal Threat
                    </Text>
                    <Image
                      source={require('../assets/images/dogsThreat.png')}
                      className="w-20 h-20 object-cover"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-36 h-36 bg-green-300 rounded-md flex justify-center items-center">
                    <Text className="text-center font-bold text-xl leading-6">
                      visiter Threat
                    </Text>
                    <Image
                      source={require('../assets/images/visitorThreat.png')}
                      className="w-20 h-20 object-cover"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  flashButton: {
    position: 'absolute',
    bottom: 65,
    right: 5,
    alignSelf: 'center',
    backgroundColor: '#272947',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // Optional: semi-transparent background
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: width * 0.8,
    height: height * 0.4,

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
    position: 'absolute',
    bottom: 150,
  },
  menuText: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
