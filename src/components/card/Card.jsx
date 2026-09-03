import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from '../../assets/images/Images';
import Colors from '../../assets/Colors/Colors';
const Card = () => {
  return (
    <View style={styles.card}>
      <Icon style={styles.notLikeIcon} name="heart-outline" />
      <Image style={styles.cardImg} source={Images.profileImg} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Men's Harrington Jacket</Text>
        <Text style={styles.productPrice}>$148.00</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: Colors.SecondaryBtnColor,
    borderRadius: 15,
    position: 'relative',
    overflow: 'hidden',
  },
  cardImg: {
    width: "100%",
    height: 220,
    zIndex: 1,
    resizeMode: 'cover',
  },
  notLikeIcon: {
    fontSize: 20,
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
  productInfo: {
    marginVertical: 20,
    gap: 10,
    paddingHorizontal: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '700',
  },
});
