import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Icon style={styles.backIcon} name="chevron-back-outline" />
        </View>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>My Favorite (12)</Text>
        </View>
      </View>
    </View>
  );
};

export default FavoriteScreen;

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
    marginVertical: 10,
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
});
