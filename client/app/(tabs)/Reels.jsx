import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Video } from 'expo-av';

// Get screen height
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

// Sample data for reels with local assets
const REELS = [
  { id: '1', title: 'Demo Reel 1', uri: require('../../assets/1.mp4') },
  { id: '2', title: 'Demo Reel 2', uri: require('../../assets/2.mp4') },
];

const Reels = () => {
  const translateY = useSharedValue(0);

  const handleGestureEvent = (event) => {
    translateY.value = event.translationY;
  };

  const handleGestureEnd = () => {
    if (translateY.value < -SCREEN_HEIGHT / 4) {
      translateY.value = withSpring(-SCREEN_HEIGHT, { damping: 2, stiffness: 150 }, () => {
        translateY.value = 0;
      });
    } else {
      translateY.value = withSpring(0, { damping: 2, stiffness: 150 });
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={REELS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PanGestureHandler onGestureEvent={handleGestureEvent} onEnded={handleGestureEnd}>
            <Animated.View
              style={[
                styles.reelContainer,
                animatedStyle,
              ]}
            >
              <Video
                source={item.uri}  // Use local file reference here
                style={styles.video}
                resizeMode="cover"
                shouldPlay
                isLooping
                isMuted
              />
              <View style={styles.captionContainer}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </Animated.View>
          </PanGestureHandler>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  reelContainer: {
    width: '100%',
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  captionContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 8,
    borderRadius: 4,
    zIndex: 1, // Ensure it is above the video
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Reels;