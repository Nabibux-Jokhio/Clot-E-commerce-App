import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import Colors from '../../../assets/Colors/Colors';

const CreateAccount = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Account </Text>
      <View style={styles.formWrapper}>
        <Input
          placeholderText="First Name"
          placeholderTextColor="rgba(0,0,0,0.5)"
          inputStyle={styles.input}
        />
        <Input
          placeholderText="Last Name"
          placeholderTextColor="rgba(0,0,0,0.5)"
          inputStyle={styles.input}
        />
        <Input
          placeholderText="Email Address"
          placeholderTextColor="rgba(0,0,0,0.5)"
          inputStyle={styles.input}
        />
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
      <View style={styles.createAccountWrapper}>
        <Text style={styles.createAccountText}> back to </Text>
        <Text style={styles.TextBold}>Login</Text>
      </View>
    </View>
  );
};

export default CreateAccount;

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
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  createAccountText: {
    fontSize: 16,
  },
  TextBold: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 2,
  },
});
