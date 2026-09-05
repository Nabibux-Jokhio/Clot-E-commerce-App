import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}> Forgot Password</Text>
      <View style={styles.formWrapper}>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor={'#000'}
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('ConfirmEmail')}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    padding: 16,
  },
  backBtn: {
    marginTop: 30,
    backgroundColor: Colors.SecondaryBtnColor,
    padding: 10,
    width: 50,
    borderRadius: '50%',
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
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
});
