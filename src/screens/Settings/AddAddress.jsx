import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AddAddress = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.iconWrapper} onPress={()=>navigation.goBack()}>
          <Icon style={styles.backIcon} name="chevron-back-outline" />
        </Pressable>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Add Address</Text>
        </View>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Street Address"
              placeholderTextColor={'rgba(0,0,0,0.5)'}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="City"
              placeholderTextColor={'rgba(0,0,0,0.5)'}
            />
          </View>
          <View style={styles.flexDir}>
            <View style={styles.sideWrapper}>
              <TextInput
                style={styles.input}
                placeholder="State"
                placeholderTextColor={'rgba(0,0,0,0.5)'}
              />
            </View>
            <View style={styles.sideWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Zip Code"
                placeholderTextColor={'rgba(0,0,0,0.5)'}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    padding: 10,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 30,
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: Colors.SecondaryBtnColor,
    padding: 10,
    borderRadius: '50%',
  },
  backIcon: {
    fontSize: 20,
  },
  headingWrapper: {
    width: '82%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
  },
  inputWrapper: {
    backgroundColor: Colors.SecondaryBtnColor,
    width: '100%',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
  },
  flexDir: {
    flexDirection: 'row',
    gap: 20,
  },
  sideWrapper: {
    backgroundColor: Colors.SecondaryBtnColor,
    width: '47%',
    borderRadius: 10,
    paddingVertical: 10,
  },
  formWrapper:{
    flex:1,
    justifyContent:'space-between',
  },
  saveBtn: {
    backgroundColor: Colors.Primary,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom:10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color:"#fff"
  },
});
