import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Images from '../../assets/images/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profileImgWrapper}>
        <Image style={styles.profileImg} source={Images.profileImg} />
      </View>
      <View style={styles.personalInfoWrapper}>
        <View style={styles.personalInfo}>
          <Text style={styles.titile}>Gilbert Jones</Text>
          <Text style={styles.email}>Glbertjones001@gmail.com</Text>
          <Text style={styles.phoneNumber}>121-224-7890</Text>
        </View>
        <Pressable style={styles.editBtn}>
          <Text style={styles.editBtnText}>Edit</Text>
        </Pressable>
      </View>
      <View style={styles.settingList}>
        <Pressable
          style={styles.listItem}
          onPress={() => navigation.navigate('Address')}
        >
          <Text style={styles.listText}>Address</Text>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
        <Pressable
          style={styles.listItem}
          onPress={() => navigation.navigate('Wishlist')}
        >
          <Text style={styles.listText}>Wishlist</Text>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
        <Pressable
          style={styles.listItem}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.listText}>Payment</Text>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
        <Pressable style={styles.listItem}>
          <Text style={styles.listText}>Help</Text>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
        <Pressable style={styles.listItem}>
          <Text style={styles.listText}>Support</Text>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
      </View>
      <Pressable style={styles.signoutWrapper}>
        <Text style={styles.signoutText}>Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    padding: 10,
    alignItems: 'center',
  },
  profileImgWrapper: {
    borderRadius: '50%',
    overflow: 'hidden',
    marginTop: 80,
  },
  profileImg: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  personalInfoWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '90%',
    backgroundColor: Colors.SecondaryBtnColor,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  personalInfo: {
    gap: 10,
  },
  titile: {
    fontSize: 16,
    fontWeight: '700',
  },
  email: {
    color: 'rgba(0,0,0,0.5)',
  },
  phoneNumber: {
    color: 'rgba(0,0,0,0.5)',
  },
  editBtn: {},
  editBtnText: {
    color: Colors.Primary,
    fontSize: 14,
    fontWeight: '600',
  },
  settingList: {
    width: '90%',
    gap: 10,
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.SecondaryBtnColor,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listText: {
    fontSize: 18,
  },
  listIcon: {
    fontSize: 25,
  },
  signoutWrapper: {
    marginVertical: 30,
  },
  signoutWrapper: {
    marginVertical: 30,
  },
  signoutText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FA3636',
  },
});
