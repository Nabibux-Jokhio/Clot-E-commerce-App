import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const WishlistScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={()=>navigation.goBack()} style={styles.iconWrapper}>
          <Icon style={styles.backIcon} name="chevron-back-outline" />
        </Pressable>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Wishlist</Text>
        </View>
      </View>
      <View style={styles.cardsWrapper}>
        <Pressable onPress={()=>navigation.navigate("Favorite")} style={styles.listItem}>
          <View style={styles.productCardInfoWrapper}>
            <Icon style={styles.likeIcon} name="heart-outline" />
            <View style={styles.cardInfo}>
              <Text style={styles.listText}>My Favorite</Text>
              <Text style={styles.productCount}>12 Products</Text>
            </View>
          </View>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
        <Pressable style={styles.listItem}>
          <View style={styles.productCardInfoWrapper}>
            <Icon style={styles.likeIcon} name="heart-outline" />
            <View style={styles.cardInfo}>
              <Text style={styles.listText}>T-shirts</Text>
              <Text style={styles.productCount}>4 Products</Text>
            </View>
          </View>
          <Icon style={styles.listIcon} name="chevron-forward-outline" />
        </Pressable>
      </View>
    </View>
  );
};

export default WishlistScreen;

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
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Colors.SecondaryBtnColor,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listText: {
    fontSize: 16,
    fontWeight: '700',
  },
  listIcon: {
    fontSize: 25,
  },

  cardInfo: {
    gap: 5,
  },
  productCardInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  likeIcon: {
    fontSize: 25,
  },
  productCount: {
    color: 'rgba(0,0,0,0.5)',
  },
});
