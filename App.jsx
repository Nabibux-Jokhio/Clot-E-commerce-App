import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/navigations/authNavigation';
import HomeNavigation from './src/navigations/homenavigation';


const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='dark-content'/>
      <NavigationContainer>
        {/* <AuthNavigation /> */}
        <HomeNavigation/>
      </NavigationContainer>
    </SafeAreaProvider>
   
  );
};

export default App;
