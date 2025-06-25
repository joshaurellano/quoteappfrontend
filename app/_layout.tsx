import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [loaded, error] = useFonts({
      'OpenSans': require('../assets/fonts/OpenSans-VariableFont_wdth_wght.ttf')
    });
  
    if (!loaded && !error) {
      return null;
    }
    
    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);

  return (
  <Stack>
    <Stack.Screen name='(tabs)' 
      options={
        { 
          headerShown: false 
        }
      } />

  </Stack>
)}
