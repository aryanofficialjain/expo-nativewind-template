import { Slot, Stack } from 'expo-router';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HomeLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <SafeAreaView style={styles.safeArea}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="login/index"
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="register/index"
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="forgotpassword/index"
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: true }}
          />
        </Stack>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});