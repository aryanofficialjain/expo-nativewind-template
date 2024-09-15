import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Post = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView className="bg-white p-4">
      <View className="items-center">
        <Button title="Select Photo" onPress={pickImage} />
        
        {image && (
          <View className="mt-4">
            <Image
              source={{ uri: image }}
              className="w-full h-80 rounded-lg border border-gray-300"
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Post;