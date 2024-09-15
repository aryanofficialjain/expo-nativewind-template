import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock post data
  const posts = Array.from({ length: 12 }, (_, index) => ({ id: index + 1 }));

  const renderPost = ({ item }) => (
    <TouchableOpacity key={item.id} className="w-1/3 p-1">
      <View className="bg-gray-300 h-32 rounded-md" />
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white">
      {/* Search Bar */}
      <View className="p-4">
        <TextInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          className="bg-gray-200 p-3 rounded-md text-lg"
        />
      </View>

      {/* Posts Grid */}
      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPost}
        contentContainerStyle={{ padding: 4 }}
      />
    </View>
  );
};

export default Search;