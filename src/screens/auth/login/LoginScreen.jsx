import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../../assets/Colors/Colors';
import Images from '../../../assets/images/Images';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const handleAuth = () => {
    console.log(email);
    navigation.navigate('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <View style={styles.formWrapper}>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor={'#000'}
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#000'}
          style={styles.input}
          value={Password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <Pressable
          style={styles.forgotWrapper}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.forgotText}> Forgot Password ?</Text>
        </Pressable>

        <TouchableOpacity style={styles.loginBtn} onPress={handleAuth}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Pressable
        style={styles.createAccountWrapper}
        onPress={() => navigation.navigate('CreateAccount')}
      >
        <Text style={styles.createAccountText}>Dont have an Account ?</Text>
        <Text style={styles.TextBold}>Create One</Text>
      </Pressable>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.otherMethodBtn}>
          <Image style={styles.logoIcon} source={Images.appleLogo} />
          <Text style={styles.otherMethodBtnText}>Continue With Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.otherMethodBtn}>
          <Image style={styles.logoIcon} source={Images.googleLogo} />
          <Text style={styles.otherMethodBtnText}>Continue With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.otherMethodBtn}>
          <Image style={styles.logoIcon} source={Images.facebookLogo} />
          <Text style={styles.otherMethodBtnText}>Continue With FaceBook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    padding: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 50,
  },
  formWrapper: {
    gap: 20,
  },
  loginBtn: {
    backgroundColor: Colors.Primary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 16,
  },
  btnText: {
    color: Colors.BackGroundColor,
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'rgba(39,39,39,0.1)',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#000',
  },
  createAccountWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotWrapper: {
    alignItems: 'flex-end',
  },
  createAccountText: {
    fontSize: 14,
  },
  TextBold: {
    fontWeight: '600',
    marginLeft: 2,
  },
  forgotText: {
    color:Colors.Primary,
    fontWeight: '600',
    marginLeft: 2,
  },
  btnWrapper: {
    marginVertical: 50,
    gap: 20,
  },
  otherMethodBtn: {
    backgroundColor: Colors.SecondaryBtnColor,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    gap: 10,
  },
  otherMethodBtnText: {
    fontSize: 18,
    fontWeight: '600',
  },
  logoIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
