import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OnboardScreen() {
  const slides = [
    {
      id: 1,
      title: "Discover Best Places",
      description: "Find amazing spots and hidden gems around you.",
      image: require('../assets/images/rb_2267.png'), // Replace with a valid image path
    },
    {
      id: 2,
      title: "Best Society Areas",
      description: "Explore the best areas suited for your lifestyle.",
      image: require('../assets/images/rb_4423.png'), // Replace with a valid image path
    },
    {
      id: 3,
      title: "Amazing Society Features",
      description: "Experience top-notch amenities and services.",
      image: require('../assets/images/rb_7085.png'), // Replace with a valid image path
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex });
    }
  };

  const handleScroll = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        ref={flatListRef}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Ensures smooth updates
      />
      {currentIndex < slides.length - 1 ? (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width * 0.8,
    height: height * 0.5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#007BFF',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  getStartedButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#28A745',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
