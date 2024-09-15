import { View, Text, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker'; // For profile image selection
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

const index = () => {
  const router = useRouter();
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    dateOfBirth: '',
    bio: '',
    profileImage: null,
  });

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit the form or navigate to the next screen
      console.log('Form Data:', formData);
      router.push('/home'); // Example navigation to home after completion
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData({ ...formData, profileImage: result.uri });
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      {step === 1 && (
        <View className="w-full">
          <Text className="text-xl mb-2">Create Your Account</Text>
          <TextInput
            placeholder="Username"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            value={formData.username}
            onChangeText={(text) => setFormData({ ...formData, username: text })}
          />
          <TextInput
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            secureTextEntry
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
          />
          <StyledPressable className="bg-sky-500 py-2 rounded-lg" onPress={handleNextStep}>
            <Text className="text-white text-center">Next</Text>
          </StyledPressable>
        </View>
      )}

      {step === 2 && (
        <View className="w-full">
          <Text className="text-xl mb-2">Enter Your Date of Birth</Text>
          <TextInput
            placeholder="Date of Birth (YYYY-MM-DD)"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            value={formData.dateOfBirth}
            onChangeText={(text) => setFormData({ ...formData, dateOfBirth: text })}
          />
          <StyledPressable className="bg-sky-500 py-2 rounded-lg" onPress={handleNextStep}>
            <Text className="text-white text-center">Next</Text>
          </StyledPressable>
        </View>
      )}

      {step === 3 && (
        <View className="w-full">
          <Text className="text-xl mb-2">Add a Bio and Profile Image</Text>
          <TextInput
            placeholder="Your Bio"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            value={formData.bio}
            onChangeText={(text) => setFormData({ ...formData, bio: text })}
          />
          <StyledPressable className="bg-gray-300 py-2 mb-4 rounded-lg" onPress={pickImage}>
            <Text className="text-center">Pick Profile Image</Text>
          </StyledPressable>
          {formData.profileImage && (
            <Image
              source={{ uri: formData.profileImage }}
              className="w-32 h-32 rounded-full mb-4"
              style={{ resizeMode: 'cover' }}
            />
          )}
          <StyledPressable className="bg-sky-500 py-2 rounded-lg" onPress={handleNextStep}>
            <Text className="text-white text-center">Complete Registration</Text>
          </StyledPressable>
        </View>
      )}
            <Link href={'/login'}>Login</Link>
    </View>
  );
};

export default index;