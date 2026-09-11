import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/Colors/Colors';
import { uniqueCategories } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';

const CategoryScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backBtnWrapper}>
        <Pressable onPress={()=>navigation.goBack()} style={styles.backBtn}>
          <Icon style={styles.backIcon} name="arrow-back" />
        </Pressable>
      </View>
      <View style={styles.categoryHeadingWrapper}>
        <Text style={styles.categoryHeading}>Shop by Categories</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.categoryHeadingWrapper}
        keyExtractor={item => item.id}
        data={uniqueCategories}
        renderItem={({ item }) => (
          <Pressable onPress={()=>navigation.navigate("CategoryItem")} style={styles.categoryListItem}>
            <View style={styles.categorylistImgWrapper}>
              <Image
                style={styles.categorylistImg}
                source={{uri:item.image}}
              />
            </View>
            <View style={styles.categoryListHeadingWrapper}>
              <Text style={styles.categoryListHeading}>{item.category}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    gap: 15,
  },
  categoryHeading: {
    fontSize: 24,
    fontWeight: '800',
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
