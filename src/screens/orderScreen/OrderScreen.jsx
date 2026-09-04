import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Images from '../../assets/images/Images';
import Icon from 'react-native-vector-icons/Ionicons';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>Orders</Text>
      </View>
      {/* <View style={styles.mainSection}>
        <View style={styles.notificationWrapper}>
          <Image
            source={Images.orderIcon}
            style={styles.notificationIcon}
          />
          <Text style={styles.notificationText}>No Notification yet</Text>
        </View>
        <TouchableOpacity style={styles.exploreBtn}>
          <Text style={styles.btnText}>Explore Categories</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.section}>
        <View style={styles.btnWrapper}>
          <Pressable style={styles.selectedBtn}>
            <Text style={styles.selectedText}>Processing</Text>
          </Pressable>
          <Pressable style={styles.notSelectedBtn}>
            <Text style={styles.notSelectedText}>Shipped</Text>
          </Pressable>
          <Pressable style={styles.notSelectedBtn}>
            <Text style={styles.notSelectedText}>Delivered</Text>
          </Pressable>
          <Pressable style={styles.notSelectedBtn}>
            <Text style={styles.notSelectedText}>Returned</Text>
          </Pressable>
        </View>

        <View style={styles.cardWraper}>
          <View style={styles.notificationCard}>
            <View style={styles.orderInfo}>
              <Icon style={styles.notificationCardIcon} name="reader-outline" />
              <View style={styles.cardHeadingWrapper}>
                <Text style={styles.cardHeading}>Order #456765</Text>
                <Text style={styles.orderitems}>2 items</Text>
              </View>
            </View>
            <View>
              <Icon
                style={styles.forwordArrow}
                name="chevron-forward-outline"
              />
            </View>
          </View>
          <View style={styles.notificationCard}>
            <View style={styles.orderInfo}>
              <Icon style={styles.notificationCardIcon} name="reader-outline" />
              <View style={styles.cardHeadingWrapper}>
                <Text style={styles.cardHeading}>Order #456765</Text>
                <Text style={styles.orderitems}>2 items</Text>
              </View>
            </View>
            <View>
              <Icon
                style={styles.forwordArrow}
                name="chevron-forward-outline"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderScreen;

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
  cardWraper: {
    gap: 10,
  },
  notificationCard: {
    width: '100%',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: Colors.SecondaryBtnColor,
  },
  notificationCardIcon: {
    fontSize: 26,
  },
  cardHeading: {
    fontWeight: '600',
  },
  orderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  forwordArrow: {
    fontSize: 20,
  },
  section: {
    width: '100%',
    marginTop: 30,
  },
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom:20,
  },
  selectedBtn: {
    backgroundColor: Colors.Primary,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  selectedText: {
    color: Colors.BackGroundColor,
    fontWeight: '500',
  },
  notSelectedBtn: {
    backgroundColor: Colors.SecondaryBtnColor,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  notSelectedText: {
    color: Colors.blackText,
    fontWeight: '500',
  },
});
