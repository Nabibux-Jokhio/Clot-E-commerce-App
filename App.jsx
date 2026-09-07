import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/navigations/authNavigation';
import Home from "./src/screens/home/HomeScreen"
import CategoryScreen from "./src/screens/home/CategoryScreen"
import CategoryItem from "./src/screens/home/CategoryItem"
import Notification from "./src/screens/notification/NotificationScreen"
import OrderScreen from "./src/screens/orderScreen/OrderScreen"
import OrderDetails from "./src/screens/orderScreen/OrderDetails"
import Search from "./src/screens/searchScreen/Search"
const App = () => {
  return (
    // <SafeAreaProvider>
    //   <StatusBar barStyle='dark-content'/>
    //   <NavigationContainer>
    //     <AuthNavigation />
    //   </NavigationContainer>
    // </SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Home/> */}
      {/* <CategoryScreen/> */}
      {/* <CategoryItem/> */}
      {/* <Notification/> */}
      {/* <OrderScreen/> */}
      {/* <OrderDetails/> */}
      <Search/>
    </SafeAreaView>
  );
};

export default App;
