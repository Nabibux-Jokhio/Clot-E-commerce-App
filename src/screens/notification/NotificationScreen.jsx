import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Images from '../../assets/images/Images';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>Notifications</Text>
      </View>
      {/* <View style={styles.mainSection}>
        <View style={styles.notificationWrapper}>
          <Image
            source={Images.notificationIcon}
            style={styles.notificationIcon}
          />
          <Text style={styles.notificationText}>No Notification yet</Text>
        </View>
        <TouchableOpacity style={styles.exploreBtn}>
          <Text style={styles.btnText}>Explore Categories</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.notificationSection}>
        <View style={styles.notificationCardWrapper}>
          <View style={styles.notificationCard}>
            <Icon
              style={styles.notificationCardIcon}
              name="notifications-outline"
            />
            <View style={styles.cardHeadingWrapper}>
              <Text style={styles.cardHeading}>
                Gilbert, you placed and order check your order history for full
                details
              </Text>
            </View>
          </View>
          <View style={styles.notificationCard}>
            <Icon
              style={styles.notificationCardIcon}
              name="notifications-outline"
            />
            <View style={styles.cardHeadingWrapper}>
              <Text style={styles.cardHeading}>
                Gilbert, you placed and order check your order history for full
                details
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  headingWrapper: {
    marginTop: 50,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
  },
  mainSection: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  notificationWrapper: {
    alignItems: 'center',
    gap: 20,
  },
  notificationIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  notificationText: {
    fontSize: 24,
  },
  exploreBtn: {
    backgroundColor: Colors.Primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  btnText: {
    color: Colors.BackGroundColor,
    fontSize: 14,
    fontWeight: '600',
  },
  notificationSection: {
    paddingHorizontal: 10,
    marginTop:30,
  },
  notificationCardWrapper: {
    gap:10,
  },
  notificationCard: {
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: Colors.SecondaryBtnColor,
  },
  notificationCardIcon: {
    fontSize: 24,
  },
  cardHeading: {
    width: 250,
    lineHeight: 22,
  },
});
