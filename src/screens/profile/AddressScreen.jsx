import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
const AddressScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Icon style={styles.backIcon} name="chevron-back-outline" />
        </View>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Address</Text>
        </View>
      </View>
      <View style={styles.personalInfoWrapper}>
        <View style={styles.personalInfo}>
          <Text style={styles.titile}>
            2715 Ash Dr. San Jose, South Dakota 83475
          </Text>
        </View>
        <Pressable style={styles.editBtn}>
          <Text style={styles.editBtnText}>Edit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddressScreen;

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
    marginTop: 30,
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: Colors.SecondaryBtnColor,
    padding: 10,
    borderRadius: "50%",
  },
  backIcon: {
    fontSize:20,
  },
  headingWrapper:{
    width:"82%",
    alignItems:'center',
  },
  heading:{
    fontSize:16,
    fontWeight:'600',
  },
  personalInfoWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '90%',
    backgroundColor: Colors.SecondaryBtnColor,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  personalInfo: {
    width: '85%',
  },
  titile: {
    fontSize: 16,
    fontWeight: '500',
  },

  editBtn: {},
  editBtnText: {
    color: Colors.Primary,
    fontSize: 14,
    fontWeight: '600',
  },
});
