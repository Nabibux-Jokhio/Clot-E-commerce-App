import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../assets/images/Images';
import Colors from '../../assets/Colors/Colors';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.splashContainer}>
        <Image source={Images.SplashLogo} style={styles.SplashLogo} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SplashLogo:{
    width:200,
    height:200,
    resizeMode:'contain'
  }
});
