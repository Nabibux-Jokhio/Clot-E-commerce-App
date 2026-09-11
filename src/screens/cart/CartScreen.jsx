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

const CartScreen = () => {
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
      <View style={styles.mainSection}>
        <View style={styles.notificationWrapper}>
          <Image source={Images.cartImg} style={styles.notificationIcon} />
          <Text style={styles.notificationText}>Your Cart is Empty</Text>
        </View>
        <TouchableOpacity style={styles.exploreBtn}>
          <Text style={styles.btnText}>Explore Categories</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.cartSection}>
        <View style={styles.removeBtn}>
          <Text style={styles.removeBtnText}>Remove All</Text>
        </View>
        <View style={styles.cartCardWrapper}>
          <View style={styles.cartCard}>
            <View style={styles.caartItemInfo}>
              <View style={styles.cartItemImgWrapper}>
                <Image source={Images.profileImg} style={styles.cartItemImg} />
              </View>
              <View style={styles.cartInfo}>
                <View style={styles.ItemTitleWrapper}>
                  <Text style={styles.ItemTitle}>Men's Harrington Jacket</Text>
                </View>
                <View style={styles.cartitemSizeWrapper}>
                  <View style={styles.sizeInfo}>
                    <Text style={styles.cartitemSize}>Size -</Text>
                    <Text style={styles.TextBold}>M</Text>
                  </View>
                  <View style={styles.sizeInfo}>
                    <Text style={styles.cartitemSize}>Color -</Text>
                    <Text style={styles.TextBold}>Lemon</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.priceInfoWrapper}>
              <View style={styles.proceWrapper}>
                <Text style={styles.TextBold}>$148</Text>
              </View>
              <View style={styles.qunatityCounter}>
                <Pressable style={styles.counterBtn}>
                  <Icon style={styles.counterIcon} name="add-outline" />
                </Pressable>
                <Pressable style={styles.counterBtn}>
                  <Icon style={styles.counterIcon} name="remove-outline" />
                </Pressable>
              </View>
            </View>
          </View>
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
      </View> */}
    </View>
  );
};

export default CartScreen;

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
  mainSection: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  notificationWrapper: {
    alignItems: 'center',
    gap: 20,
  },
  notificationIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  notificationText: {
    fontSize: 24,
    fontWeight: '500',
  },
  exploreBtn: {
    backgroundColor: Colors.Primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  btnText: {
    color: Colors.BackGroundColor,
    fontSize: 14,
    fontWeight: '600',
  },
  headingWrapper: {
    width: '80%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
  },
  cartSection: {
    flex: 1,
    width: '100%',
  },
  removeBtn: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  removeBtnText: {
    fontSize: 18,
    fontWeight: '400',
  },
  cartCard: {
    backgroundColor: Colors.SecondaryBtnColor,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartItemImgWrapper: {
    overflow: 'hidden',
    borderRadius: 10,
  },
  cartItemImg: {
    width: 64,
    height: 64,
    objectFit: 'cover',
  },
  caartItemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cartitemSizeWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  cartInfo: {
    gap: 10,
  },
  ItemTitle: {
    fontWeight: '500',
  },
  TextBold: {
    fontWeight: '500',
  },
  cartitemSize: {
    color: 'rgba(0,0,0,0.5)',
  },
  sizeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  qunatityCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  counterBtn: {
    backgroundColor: Colors.Primary,
    padding: 5,
    borderRadius: '50%',
  },
  counterIcon: {
    color: '#fff',
    fontSize: 15,
  },
  priceInfoWrapper: {
    gap: 10,
    alignItems: 'flex-end',
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
  PriceCalcuteSection: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
    gap:10,
  },
  InfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  subtotalText: {
    color:"rgba(0,0,0,0.5)",
    fontSize:18,
  },
  subtotalPriceText: {
    fontSize:18,
    fontWeight:'400',
  },
});
