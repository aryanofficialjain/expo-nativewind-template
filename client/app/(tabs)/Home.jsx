import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Video } from 'expo-av';

// Get screen width
const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Sample data for stories and posts
const STORIES = [
  { id: '1', uri: require('../../assets/profile.jpg') },
  { id: '2', uri: require('../../assets/profile.jpg') },
  { id: '2', uri: require('../../assets/post.jpeg') },
  { id: '2', uri: require('../../assets/profile.jpg') },
  { id: '2', uri: require('../../assets/profile.jpg') },
  { id: '2', uri: require('../../assets/profile.jpg') },
  { id: '2', uri: require('../../assets/profile.jpg') },
  // Add more stories here
];

const POSTS = [
  { id: '1', type: 'image', uri: require('../../assets/post.jpeg'), likes: 120, comments: 30 },
  { id: '2', type: 'video', uri: require('../../assets/1.mp4'), likes: 80, comments: 15 },
  // Add more posts here
];

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Stories Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
        {STORIES.map((story) => (
          <View key={story.id} style={styles.story}>
            <Image source={story.uri} style={styles.storyImage} />
          </View>
        ))}
      </ScrollView>

      {/* Posts Section */}
      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            {item.type === 'image' ? (
              <Image source={item.uri} style={styles.postImage} />
            ) : (
              <Video
                source={item.uri}
                style={styles.postVideo}
                resizeMode="cover"
                shouldPlay
                isLooping
                isMuted
              />
            )}
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text>Share</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.likes}>{item.likes} likes</Text>
            <Text style={styles.comments}>{item.comments} comments</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  storiesContainer: {
    height: 80,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  story: {
    marginRight: 10,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  postContainer: {
    width: SCREEN_WIDTH,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postVideo: {
    width: '100%',
    height: 300,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  actionButton: {
    padding: 10,
  },
  likes: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  comments: {
    paddingHorizontal: 10,
    color: '#666',
  },
});

export default Home;