import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/Colors/Colors';
import Images from '../../assets/images/Images';

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backBtnWrapper}>
        <Pressable style={styles.backBtn}>
          <Icon style={styles.backIcon} name="arrow-back" />
        </Pressable>
      </View>
      <View style={styles.categoryHeadingWrapper}>
        <Text style={styles.categoryHeading}>Shop by Categories</Text>
      </View>
      <View style={styles.categoryListWrapper}>
        <View style={styles.categoryListItem}>
          <View style={styles.categorylistImgWrapper}>
            <Image style={styles.categorylistImg} source={Images.profileImg} />
          </View>
          <View style={styles.categoryListHeadingWrapper}>
            <Text style={styles.categoryListHeading}>Hoodies</Text>
          </View>
        </View>
        <View style={styles.categoryListItem}>
          <View style={styles.categorylistImgWrapper}>
            <Image style={styles.categorylistImg} source={Images.profileImg} />
          </View>
          <View style={styles.categoryListHeadingWrapper}>
            <Text style={styles.categoryListHeading}>Hoodies</Text>
          </View>
        </View>
        <View style={styles.categoryListItem}>
          <View style={styles.categorylistImgWrapper}>
            <Image style={styles.categorylistImg} source={Images.profileImg} />
          </View>
          <View style={styles.categoryListHeadingWrapper}>
            <Text style={styles.categoryListHeading}>Hoodies</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.BackGroundColor,
  },
  backBtnWrapper: {
    alignItems: 'flex-start',
    marginTop: 30,
  },

  backBtn: {
    backgroundColor: Colors.SecondaryBtnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    padding: 10,
  },
  backIcon: {
    fontSize: 20,
  },
  categoryHeadingWrapper: {
    marginVertical: 10,
  },
  categoryHeading: {
    fontSize: 24,
    fontWeight: '800',
  },
  categoryListWrapper: {
    gap:15
  },
  categoryListItem: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    gap: 20,
    backgroundColor: Colors.SecondaryBtnColor,
    borderRadius: 10,
  },

  categorylistImgWrapper: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
  categorylistImg: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  categoryListHeading: {
    fontSize: 18,
  },
});
