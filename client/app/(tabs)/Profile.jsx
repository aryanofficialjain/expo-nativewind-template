import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Profile = () => {
  return (
    <ScrollView className="bg-white">
      <View className="p-4 items-center">
        {/* Profile Picture */}
        <Image
          source={require('../../assets/profile.jpg')} // Fixed for local image
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />

        {/* Username */}
        <Text className="text-xl font-bold mt-2">your_username</Text>

        {/* Bio Section */}
        <Text className="text-sm text-gray-500 text-center mt-2">
          This is the bio section. Add something cool about yourself.
        </Text>

        {/* Edit Profile Button */}
        <TouchableOpacity className="border border-gray-300 rounded-md mt-4 px-4 py-2">
          <Text className="text-gray-700 text-sm font-bold">Edit Profile</Text>
        </TouchableOpacity>

        {/* Stats (Posts, Followers, Following) */}
        <View className="flex-row justify-between w-full mt-6">
          <View className="items-center">
            <Text className="text-lg font-bold">10</Text>
            <Text className="text-gray-500">Posts</Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold">2500</Text>
            <Text className="text-gray-500">Followers</Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold">300</Text>
            <Text className="text-gray-500">Following</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;