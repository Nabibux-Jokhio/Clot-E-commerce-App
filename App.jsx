import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/navigations/authNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='dark-content'/>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
