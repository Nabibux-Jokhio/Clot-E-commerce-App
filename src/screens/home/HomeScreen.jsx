import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Images from '../../assets/images/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from "../../components/card/Card"
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imgWrapper}>
          <Image style={styles.profileImg} source={Images.profileImg} />
        </View>
        <View style={styles.genderDropdown}>
          <Text style={styles.dropdownText}>Men</Text>
          <Icon style={styles.dropdownIcon} name="chevron-down" color="black" />
        </View>
        <View style={styles.cartWrapper}>
          <Icon
            style={styles.cartIcon}
            name="bag-outline"
            size={10}
            color="black"
          />
        </View>
      </View>
      <View style={styles.searchBar}>
        <Icon style={styles.searchIcon} name="search-outline" />
        <TextInput
          placeholder='Search'
          placeholderTextColor={"#000"}
          style={styles.searchInput}
        />
      </View>
      <ScrollView>
        <View style={styles.sectionHeadingWrapper}>
          <View style={styles.headingWrapper}>
            <Text style={styles.sectionHeading}>Categories</Text>
          </View>
          <Pressable>
            <Text style={styles.seeAllBtn}>See All</Text>
          </Pressable>
        </View>
        <View style={styles.categoryCardWrapper}>
          <View style={styles.categoryCard}>
            <View style={styles.categoryImgWrapper}>
              <Image style={styles.categoryImg} source={Images.profileImg} />
            </View>
            <View style={styles.categoryTitleWrapper}>
              <Text style={styles.categoryTiTle}>Hoodies</Text>
            </View>
          </View>
          <View style={styles.categoryCard}>
            <View style={styles.categoryImgWrapper}>
              <Image style={styles.categoryImg} source={Images.profileImg} />
            </View>
            <View style={styles.categoryTitleWrapper}>
              <Text style={styles.categoryTiTle}>Hoodies</Text>
            </View>
          </View>
          <View style={styles.categoryCard}>
            <View style={styles.categoryImgWrapper}>
              <Image style={styles.categoryImg} source={Images.profileImg} />
            </View>
            <View style={styles.categoryTitleWrapper}>
              <Text style={styles.categoryTiTle}>Hoodies</Text>
            </View>
          </View>
          <View style={styles.categoryCard}>
            <View style={styles.categoryImgWrapper}>
              <Image style={styles.categoryImg} source={Images.profileImg} />
            </View>
            <View style={styles.categoryTitleWrapper}>
              <Text style={styles.categoryTiTle}>Hoodies</Text>
            </View>
          </View>
          <View style={styles.categoryCard}>
            <View style={styles.categoryImgWrapper}>
              <Image style={styles.categoryImg} source={Images.profileImg} />
            </View>
            <View style={styles.categoryTitleWrapper}>
              <Text style={styles.categoryTiTle}>Hoodies</Text>
            </View>
          </View>
        </View>
         <View style={styles.sectionHeadingWrapper}>
          <View style={styles.headingWrapper}>
            <Text style={styles.sectionHeading}>Top Selling</Text>
          </View>
          <Pressable>
            <Text style={styles.seeAllBtn}>See All</Text>
          </Pressable>
        </View>
       <View style={styles.cardWrapper}>
         <Card/> 
         <Card/> 
       </View>
        <View style={styles.sectionHeadingWrapper}>
          <View style={styles.headingWrapper}>
            <Text style={styles.sectionHeading}>New In</Text>
          </View>
          <Pressable>
            <Text style={styles.seeAllBtn}>See All</Text>
          </Pressable>
        </View>
         <View style={styles.cardWrapper}>
         <Card/> 
         <Card/> 
       </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgWrapper: {
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: Colors.blackText,
    overflow: 'hidden',
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
    width: '100%',
    backgroundColor: Colors.SecondaryBtnColor,
    marginVertical: 20,
    borderRadius: 30,
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 20,
    fontWeight: '500',
  },
  searchInput: {
    width: '85%',
    fontSize: 16,
    color: Colors.blackText,
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
  categoryCardWrapper:{
    flexDirection:'row',
    alignItems:'center'
  },
  categoryCard: {
    width:"20%",
    marginVertical:15,
    gap:10,
  },
  categoryImgWrapper: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
  categoryImg: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },
  categoryTitleWrapper: {},
  categoryTitle: {},
  cardWrapper: {
    flexDirection:'row',
    gap:10,
    marginBottom:20,
  },
  
});
