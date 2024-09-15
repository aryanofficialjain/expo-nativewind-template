import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="text-white text-3xl font-bold mb-6">Welcome to InstaClone</Text>
      
      <StyledPressable
        className="w-60 py-3 mb-4 bg-white rounded-lg shadow-lg"
        onPress={() => router.push('/login')}
      >
        <Text className="text-center text-black text-lg font-semibold">Login</Text>
      </StyledPressable>
      
      <StyledPressable
        className="w-60 py-3 bg-white rounded-lg shadow-lg"
        onPress={() => router.push('/register')}
      >
        <Text className="text-center text-black text-lg font-semibold">Register</Text>
      </StyledPressable>

      <StyledPressable
        className="w-60 py-3 mt-5 bg-white rounded-lg shadow-lg"
        onPress={() => router.push('/(tabs)/Home')}
      >
        <Text className="text-center text-black text-lg font-semibold">Home</Text>
      </StyledPressable>
    </View>
  );
}

export default Index;