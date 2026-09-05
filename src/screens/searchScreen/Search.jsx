import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/Colors/Colors';
import Images from '../../assets/images/Images';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <View style={styles.backBtnWrapper}>
          <Pressable style={styles.backBtn}>
            <Icon style={styles.backIcon} name="arrow-back" />
          </Pressable>
        </View>
        <View style={styles.search}>
          <Icon style={styles.searchIcon} name="search" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={'#000'}
          />
          <Icon style={styles.closeIcon} name="close" />
        </View>
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

export default Search;

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
    gap: 15,
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
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  search: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: Colors.SecondaryBtnColor,
    gap: 4,
  },
  searchInput: {
    color: '#000',
    width: '80%',
    fontSize: 16,
  },
  searchIcon: {
    fontSize: 16,
    fontWeight: '600',
  },
  closeIcon: {
    fontSize: 16,
    fontWeight: '600',
  },
});
