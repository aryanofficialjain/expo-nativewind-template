import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'react-native'; // Import Image from react-native

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          paddingVertical:10, // Adjust vertical padding
          paddingHorizontal: 4, // Adjust horizontal padding
          height: 90,
          alignItems: 'center', // Center the tab items
          justifyContent: 'center' // Adjust height of the tab bar
        },
      }}
    >
      <Tabs.Screen 
        name="Home" 
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="home" size={35} color={color} />,
        }}  
      />
      <Tabs.Screen 
        name="Search" 
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="search" size={35} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="Post" 
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="add-circle-outline" size={35} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="Reels" 
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={35} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="Profile" 
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image 
              source={require('../../assets/profile.jpg')} // Path to your custom image
              style={{ width: 35, height: 35, tintColor: color, borderRadius: 99 }} // Adjust width, height, and tint color
            />
          )
        }} 
      />
    </Tabs>
  );
}