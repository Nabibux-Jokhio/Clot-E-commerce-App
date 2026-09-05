import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../../../assets/Colors/Colors';
import Images from '../../../assets/images/Images';
import { useNavigation } from '@react-navigation/native';


const ConfirmEmail = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image style={styles.messageImg} source={Images.messageImg} />
      <View style={styles.TextWrapper}>
        <Text style={styles.confirmText}>
          We Sent you an Email to reset your password.
        </Text>
      </View>
    
       <TouchableOpacity style={styles.BackBtn} onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.btnText}>Back to Login</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ConfirmEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  messageImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  confirmText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '500',
  },
  BackBtn: {
    backgroundColor: Colors.Primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  btnText: {
    color:Colors.BackGroundColor,
    fontWeight:500,
    fontSize:16,
  },
});
