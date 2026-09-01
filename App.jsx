import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './src/screens/splash/SplashScreen'
import LoginScreen from './src/screens/auth/login/LoginScreen'
import LoginPasswordScreen from './src/screens/auth/login/LoginPasswordScreen'
import CreateAccount from './src/screens/auth/createAccount/CreateAccount'
import ForgotPassword from './src/screens/auth/forgotPassword/ForgotPassword'
import ConfirmEmail from './src/screens/auth/confirmEmail/confirmEmail'
import InformationScreen from './src/screens/auth/informationScreen/InformationScreen'
import { SafeAreaView } from 'react-native-safe-area-context'



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     {/* <SplashScreen/> */}
     {/* <LoginScreen/> */}
     {/* <LoginPasswordScreen/> */}
     {/* <CreateAccount/> */}
     {/* <ForgotPassword/> */}
     {/* <ConfirmEmail/> */}
     <InformationScreen/>
    </SafeAreaView>
  )
}

export default App


const styles = StyleSheet.create({
    container: {
    flex: 1,
  },
})