import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import Colors from '../../../assets/Colors/Colors';
import Images from '../../../assets/images/Images';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <View style={styles.formWrapper}>
        <Input
          placeholderText="Email Address"
          placeholderTextColor="#000"
          inputStyle={styles.input}
        />
        <Button
          title="Continue"
          func={() => navigation.navigate('LoginPasword')}
          btnStyle={styles.loginBtn}
          btnTextStyle={styles.btnText}
        />
      </View>
      <TouchableOpacity style={styles.createAccountWrapper} activeOpacity={0.7} onPress={()=>navigation.navigate("CreateAccount")}>
        <Text style={styles.createAccountText}>Dont have an Account ?</Text>
        <Text style={styles.TextBold}>Create One</Text>
      </TouchableOpacity>
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
  },
  createAccountWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  createAccountText: {
    fontSize: 14,
  },
  TextBold: {
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
