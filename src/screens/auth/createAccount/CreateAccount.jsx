import {
  Pressable,
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

const CreateAccount = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [gender, setGender] = useState("male");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>Create Account </Text>
      <View style={styles.formWrapper}>
        <TextInput
          placeholder="First Name"
          placeholderTextColor={'#000'}
          style={styles.input}
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />

        <TextInput
          placeholder="Last Name"
          placeholderTextColor={'#000'}
          style={styles.input}
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
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
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.radioWrapper}>
          <Pressable onPress={() => setGender('male')} style={styles.radioBtn}>
            <Text style={styles.radioText}>Male:</Text>
            <Icon
              style={styles.radioIcon}
              name={
                gender === 'male'
                  ? 'radio-button-on-outline'
                  : 'radio-button-off-outline'
              }
            />
          </Pressable>
          <Pressable
            onPress={() => setGender('female')}
            style={styles.radioBtn}
          >
            <Text style={styles.radioText}>female:</Text>
            <Icon
              style={styles.radioIcon}
              name={
                gender === 'female'
                  ? 'radio-button-on-outline'
                  : 'radio-button-off-outline'
              }
            />
          </Pressable>
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
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
    color: '#000',
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
  radioWrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.SecondaryBtnColor,
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  radioBtn: {
    flexDirection: 'row',
    alignItems:'center',
    gap:5,
  },
  radioText: {
    fontWeight:'500',
    fontSize:16,
  },
  radioIcon: {
    fontSize:16,
    color:Colors.Primary
  },

  
});
