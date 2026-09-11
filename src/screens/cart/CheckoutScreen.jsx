import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Images from '../../assets/images/Images';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.backBtnWrapper}>
          <Icon style={styles.backIcon} name="chevron-back-outline" />
        </View>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Cart</Text>
        </View>
      </View>
      <View style={styles.cardsWrapper}>
        <Pressable style={styles.listItem}>
          <View style={styles.cardInfo}>
            <View style={styles.cardInfoHeadingWrapper}>
              <Text style={styles.cardInfoHeading}>Shipping Address</Text>
            </View>
            <View style={styles.cardAddressWrapper}>
              <Text style={styles.cardAddressText}>Add Shipping Address</Text>
            </View>
          </View>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
        <Pressable style={styles.listItem}>
          <View style={styles.cardInfo}>
            <View style={styles.cardInfoHeadingWrapper}>
              <Text style={styles.cardInfoHeading}>Payment Method</Text>
            </View>
            <View style={styles.cardAddressWrapper}>
              <Text style={styles.cardAddressText}>Add Payment Method</Text>
            </View>
          </View>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
      </View>
      <View style={styles.PriceCalcuteSection}>
        <View style={styles.InfoWrapper}>
          <View style={styles.subtotalWrapper}>
            <Text style={styles.subtotalText}>Subtotal</Text>
          </View>
          <View style={styles.subtotalPriceWrapper}>
            <Text style={styles.subtotalPriceText}>$200</Text>
          </View>
        </View>
        <View style={styles.InfoWrapper}>
          <View style={styles.subtotalWrapper}>
            <Text style={styles.subtotalText}>Subtotal</Text>
          </View>
          <View style={styles.subtotalPriceWrapper}>
            <Text style={styles.subtotalPriceText}>$200</Text>
          </View>
        </View>
        <View style={styles.InfoWrapper}>
          <View style={styles.subtotalWrapper}>
            <Text style={styles.subtotalText}>Subtotal</Text>
          </View>
          <View style={styles.subtotalPriceWrapper}>
            <Text style={styles.subtotalPriceText}>$200</Text>
          </View>
        </View>
        <View style={styles.InfoWrapper}>
          <View style={styles.subtotalWrapper}>
            <Text style={styles.subtotalText}>Subtotal</Text>
          </View>
          <View style={styles.subtotalPriceWrapper}>
            <Text style={styles.subtotalPriceText}>$200</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.cartBtnText}>Checkout </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerWrapper: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  backBtnWrapper: {
    backgroundColor: Colors.SecondaryBtnColor,
    padding: 10,
    borderRadius: '50%',
  },
  backIcon: {
    fontSize: 20,
    fontWeight: '700',
  },
  headingWrapper: {
    width: '80%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
  },
  PriceCalcuteSection: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
    gap: 10,
  },
  InfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  subtotalText: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 18,
  },
  subtotalPriceText: {
    fontSize: 18,
    fontWeight: '400',
  },
  cartBtn: {
    backgroundColor: Colors.Primary,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  cartBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  cardsWrapper: {
    width: '100%',
    gap: 10,
    marginBottom: 20,
  },
  listItem: {
    paddingVertical: 10,
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
    gap: 10,
  },
  paymentCardImg: {
    width: 24,
    resizeMode: 'contain',
  },
  cardInfoHeading: {
    color: 'rgba(0,0,0,0.5)',
  },
  cardAddressText: {
    fontSize: 20,
  },
});
