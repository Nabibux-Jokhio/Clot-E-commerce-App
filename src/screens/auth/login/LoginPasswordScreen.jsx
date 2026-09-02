import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import Colors from '../../../assets/Colors/Colors';
import { useNavigation } from '@react-navigation/native';

const LoginPasswordScreen = () => {
const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <View style={styles.formWrapper}>
        <Input
          placeholderText="Password"
          placeholderTextColor="rgba(0,0,0,0.5)"
          inputStyle={styles.input}
        />
        <Button
          title="Continue"
          btnStyle={styles.loginBtn}
          btnTextStyle={styles.btnText}
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("ForgotPassword")} style={styles.createAccountWrapper}>
        <Text style={styles.createAccountText}> Forgot Password ?</Text>
        <Text style={styles.TextBold}> Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPasswordScreen;

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
    borderRadius: 30,
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
});
