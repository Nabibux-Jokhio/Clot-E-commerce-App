import {
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
import Images from '../../assets/images/Images';
import Card from '../../components/card/Card';

const CategoryItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backBtnWrapper}>
        <Pressable style={styles.backBtn}>
          <Icon style={styles.backIcon} name="arrow-back" />
        </Pressable>
      </View>
      <View style={styles.categoryHeadingWrapper}>
        <Text style={styles.categoryHeading}>Hoodies (240)</Text>
      </View>
      <ScrollView>
        <View style={styles.cardWrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryItem;

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
    fontSize: 18,
    fontWeight: '800',
  },
  cardWrapper: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
});
