import { MusicaProvider } from '@/hooks/MusicaContext';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Orbitron-Regular': require('@/assets/fonts/Orbitron-Regular.ttf'),
    'Orbitron-Bold': require('@/assets/fonts/Orbitron-Bold.ttf'),
    'Orbitron-Black': require('@/assets/fonts/Orbitron-Black.ttf'),
    'Rajdhani-Regular': require('@/assets/fonts/Rajdhani-Regular.ttf'),
    'Rajdhani-SemiBold': require('@/assets/fonts/Rajdhani-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <MusicaProvider>
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false }} />
      </MusicaProvider>
    </SafeAreaProvider>
  );
}