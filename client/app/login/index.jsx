import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

const index = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic form validation
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    // Implement your login logic here, like calling an API
    console.log('Login Details:', { username, password });

    // Navigate to home or dashboard after successful login
    router.push('/home');
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      <Text className="text-3xl font-bold mb-6 text-gray-800">Login</Text>
      
      <TextInput
        placeholder="Username"
        className="border border-gray-300 w-full rounded-lg px-4 py-2 mb-4"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      
      <TextInput
        placeholder="Password"
        className="border border-gray-300 w-full rounded-lg px-4 py-2 mb-6"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      
      <StyledPressable className="bg-sky-500 w-full py-3 rounded-lg" onPress={handleLogin}>
        <Text className="text-white text-center text-lg font-semibold">Login</Text>
      </StyledPressable>

      <Link href={'/register'}>Register</Link>
      <Link href={'/forgotpassword'}>Forget password</Link>

    </View>


  );
};

export default index;