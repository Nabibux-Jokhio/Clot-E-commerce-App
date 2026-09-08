import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from '../../assets/images/Images';

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Icon style={styles.backIcon} name="chevron-back-outline" />
        </View>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Add Address</Text>
        </View>
      </View>
      <View style={styles.cardHeadingWrapper}>
        <Text style={styles.cardHeading}>Cards</Text>
      </View>
      <View style={styles.cardsWrapper}>
        <Pressable style={styles.listItem}>
          <View style={styles.cardInfo}>
            <Text style={styles.listText}>123456789</Text>
            <Image
              source={Images.paymentCardImg}
              style={styles.paymentCardImg}
            />
          </View>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
        <Pressable style={styles.listItem}>
          <View style={styles.cardInfo}>
            <Text style={styles.listText}>123456789</Text>
            <Image
              source={Images.paymentCardImg}
              style={styles.paymentCardImg}
            />
          </View>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
      </View>
      <View style={styles.cardHeadingWrapper}>
        <Text style={styles.cardHeading}>PayPal</Text>
      </View>
      <View style={styles.cardsWrapper}>
        <Pressable style={styles.listItem}>
          <View style={styles.cardInfo}>
            <Text style={styles.listText}>abc@gmail.com</Text>
          </View>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    padding: 15,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 20,
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
  cardsWrapper: {
    width: '100%',
    gap: 10,
    marginBottom: 20,
  },
  listItem: {
    paddingVertical: 20,
    paddingHorizontal: 10,
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
  cardHeadingWrapper: {
    width: '100%',
    marginBottom: 10,
  },
  cardHeading: {
    fontWeight: '700',
    fontSize: 16,
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  paymentCardImg: {
    width: 24,
    resizeMode: 'contain',
  },
});
