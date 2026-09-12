import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Images from '../../assets/images/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../../components/card/Card';
import { shoppingItems, uniqueCategories } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfoWraper}>
          <View style={styles.imgWrapper}>
            <Image style={styles.profileImg} source={Images.profileImg} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>UserName</Text>
          </View>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.searchBar}>
            <Icon style={styles.searchIcon} name="search-outline" />
          </View>
          <Pressable
            onPress={() => navigation.navigate('Cart')}
            style={styles.cartWrapper}
          >
            <Icon
              style={styles.cartIcon}
              name="bag-outline"
              size={10}
              color="black"
            />
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={styles.sectionHeadingWrapper}>
          <View style={styles.headingWrapper}>
            <Text style={styles.sectionHeading}>Categories</Text>
          </View>
          {/* <Pressable onPress={()=>navigation.navigate("Category")}>
            <Text style={styles.seeAllBtn}>See All</Text>
          </Pressable> */}
        </View>
        <FlatList
          contentContainerStyle={styles.categoryList}
          horizontal
          keyExtractor={item => item.id}
          data={uniqueCategories}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate('CategoryItem')}
              style={styles.categoryCard}
            >
              <View style={styles.categoryImgWrapper}>
                <Image
                  style={styles.categoryImg}
                  source={{ uri: item.image }}
                />
              </View>
              <View style={styles.categoryTitleWrapper}>
                <Text style={styles.categoryTitle}>{item.category}</Text>
              </View>
            </Pressable>
          )}
        />
        <View style={styles.sectionHeadingWrapper}>
          <View style={styles.headingWrapper}>
            <Text style={styles.sectionHeading}>Top Selling</Text>
          </View>
          <Pressable>
            <Text style={styles.seeAllBtn}>See All</Text>
          </Pressable>
        </View>
        <FlatList
          horizontal
          contentContainerStyle={styles.listContainer}
          keyExtractor={item => item.id.toString()}
          data={shoppingItems}
          renderItem={({ item }) => <Card data={item} />}
        />
        <View style={styles.sectionHeadingWrapper}>
          <View style={styles.headingWrapper}>
            <Text style={styles.sectionHeading}>New In</Text>
          </View>
          <Pressable>
            <Text style={styles.seeAllBtn}>See All</Text>
          </Pressable>
        </View>
        <FlatList
          horizontal
          contentContainerStyle={styles.listContainer}
          keyExtractor={item => item.id.toString()}
          data={shoppingItems}
          renderItem={({ item }) => <Card data={item} />}
        />
        <View style={styles.sectionHeadingWrapper}>
          <View style={styles.headingWrapper}>
            <Text style={styles.sectionHeading}>Products</Text>
          </View>
          <Pressable>
            <Text style={styles.seeAllBtn}>See All</Text>
          </Pressable>
        </View>
        <FlatList
          horizontal
          contentContainerStyle={styles.listContainer}
          keyExtractor={item => item.id.toString()}
          data={shoppingItems}
          renderItem={({ item }) => <Card data={item} />}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  userInfoWraper: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  imgWrapper: {
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: Colors.blackText,
    overflow: 'hidden',
  },
  iconWrapper: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  userName: {
    fontWeight: '700',
    fontSize: 20,
  },
  profileImg: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  genderDropdown: {
    backgroundColor: Colors.SecondaryBtnColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 20,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: '500',
  },
  dropdownIcon: {
    fontSize: 18,
    fontWeight: '500',
  },
  cartWrapper: {
    backgroundColor: Colors.Primary,
    padding: 10,
    borderRadius: '50%',
  },
  cartIcon: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.BackGroundColor,
  },
  searchBar: {
    backgroundColor: Colors.SecondaryBtnColor,
    borderRadius: '50%',
    padding: 10,
  },
  searchIcon: {
    fontSize: 18,
    fontWeight: '500',
  },

  sectionHeadingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '500',
  },
  seeAllBtn: {
    fontSize: 18,
    color: Colors.Primary,
  },
  categoryList: {
    marginVertical: 15,
    gap: 11,
  },
  categoryCard: {
    gap: 10,
    alignItems: 'center',
  },
  categoryImgWrapper: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
  categoryImg: {
    width: 56,
    height: 56,
    resizeMode: 'cover',
  },
  categoryTitleWrapper: {},
  categoryTitle: {
    fontSize: 10,
  },
  listContainer: {
    gap: 10,
    marginBottom: 20,
  },
});
