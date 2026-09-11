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
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/Colors/Colors';
import Card from '../../components/card/Card';
import { useNavigation } from '@react-navigation/native';
import { shoppingItems } from '../../utils/utils';

const CategoryItem = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backBtnWrapper}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Icon style={styles.backIcon} name="arrow-back" />
        </Pressable>
      </View>
      <View style={styles.categoryHeadingWrapper}>
        <Text style={styles.categoryHeading}>Hoodies ({shoppingItems.length})</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.cardWrapper}
        keyExtractor={item => item.id.toString()}
        data={shoppingItems}
        renderItem={({ item }) => <Card data={item} />}
      />
    </View>
  );
};

export default CategoryItem;

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
  },
  categoryHeading: {
    fontSize: 18,
    fontWeight: '800',
  },
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
