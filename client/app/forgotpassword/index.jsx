import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

const index = () => {
  const router = useRouter();
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    newPassword: '',
  });

  const handleNextStep = () => {
    if (step === 1 && !formData.email) {
      alert('Please enter your email');
      return;
    }
    if (step === 2 && !formData.otp) {
      alert('Please enter the OTP');
      return;
    }
    if (step === 3 && !formData.newPassword) {
      alert('Please enter a new password');
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Here, you can implement the final reset password logic
      console.log('Form Data:', formData);
      alert('Password reset successful');
      router.push('/login'); // Navigate to login after reset
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      {step === 1 && (
        <View className="w-full">
          <Text className="text-xl mb-2">Enter Your Email</Text>
          <TextInput
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
          <StyledPressable className="bg-sky-500 py-2 rounded-lg" onPress={handleNextStep}>
            <Text className="text-white text-center">Next</Text>
          </StyledPressable>
        </View>
      )}

      {step === 2 && (
        <View className="w-full">
          <Text className="text-xl mb-2">Enter OTP</Text>
          <TextInput
            placeholder="OTP"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            value={formData.otp}
            onChangeText={(text) => setFormData({ ...formData, otp: text })}
          />
          <StyledPressable className="bg-sky-500 py-2 rounded-lg" onPress={handleNextStep}>
            <Text className="text-white text-center">Next</Text>
          </StyledPressable>
        </View>
      )}

      {step === 3 && (
        <View className="w-full">
          <Text className="text-xl mb-2">Set New Password</Text>
          <TextInput
            placeholder="New Password"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            secureTextEntry
            value={formData.newPassword}
            onChangeText={(text) => setFormData({ ...formData, newPassword: text })}
          />
          <StyledPressable className="bg-sky-500 py-2 rounded-lg" onPress={handleNextStep}>
            <Text className="text-white text-center">Reset Password</Text>
          </StyledPressable>
        </View>
      )}

      {/* Link to navigate back to login */}
      <Link href={'/login'} className="mt-4 text-sky-600">Back to Login</Link>
    </View>
  );
};

export default index;