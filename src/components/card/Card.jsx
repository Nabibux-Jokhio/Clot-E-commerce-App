import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from '../../assets/images/Images';
import Colors from '../../assets/Colors/Colors';
const Card = ({ data }) => {
  return (
    <View style={styles.card}>
      <Icon style={styles.notLikeIcon} name="heart-outline" />
      <Image style={styles.cardImg} source={{uri:data?.image}} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{data?.name} </Text>
        <Text style={styles.productPrice}>Rs:{data?.price}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: Colors.SecondaryBtnColor,
    borderRadius: 15,
    position: 'relative',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
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
