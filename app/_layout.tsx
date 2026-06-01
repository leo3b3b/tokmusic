import { MusicaProvider } from '@/hooks/MusicaContext';
import { Orbitron_700Bold, Orbitron_900Black, useFonts } from '@expo-google-fonts/orbitron';
import { Rajdhani_400Regular, Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Orbitron: Orbitron_700Bold,
    'Orbitron-Black': Orbitron_900Black,
    Rajdhani: Rajdhani_400Regular,
    'Rajdhani-SemiBold': Rajdhani_600SemiBold,
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