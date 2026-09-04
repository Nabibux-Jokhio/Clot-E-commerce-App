import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
const OrderDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backBtn}>
          <Icon style={styles.backIcon} name="arrow-back" />
        </View>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Order #456765</Text>
        </View>
      </View>
      <View style={styles.StatusWrapper}>
        <View style={styles.statusCard}>
          <View style={styles.infoWrapper}>
            <View style={styles.iconWrapper}>
              <Icon style={styles.icon} name="checkmark" />
            </View>
            <View style={styles.status}>
              <Text style={styles.statusText}>Delivered</Text>
            </View>
          </View>
          <View style={styles.dateWrapper}>
            <Text style={styles.date}>28 May</Text>
          </View>
        </View>
        <View style={styles.statusCard}>
          <View style={styles.infoWrapper}>
            <View style={styles.purpleIconWrapper}>
              <Icon style={styles.icon} name="checkmark" />
            </View>
            <View style={styles.status}>
              <Text style={styles.darkText}>Shipped</Text>
            </View>
          </View>
          <View style={styles.dateWrapper}>
            <Text style={styles.darkDate}>28 May</Text>
          </View>
        </View>
        <View style={styles.statusCard}>
          <View style={styles.infoWrapper}>
            <View style={styles.purpleIconWrapper}>
              <Icon style={styles.icon} name="checkmark" />
            </View>
            <View style={styles.status}>
              <Text style={styles.darkText}>Order Confirmed </Text>
            </View>
          </View>
          <View style={styles.dateWrapper}>
            <Text style={styles.darkDate}>28 May</Text>
          </View>
        </View>
        <View style={styles.statusCard}>
          <View style={styles.infoWrapper}>
            <View style={styles.purpleIconWrapper}>
              <Icon style={styles.icon} name="checkmark" />
            </View>
            <View style={styles.status}>
              <Text style={styles.darkText}>Order Placed</Text>
            </View>
          </View>
          <View style={styles.dateWrapper}>
            <Text style={styles.darkDate}>28 May</Text>
          </View>
        </View>
      </View>
      <View style={styles.sectionHeadingWrapper}>
        <Text style={styles.sectionHeadig}>Order Items</Text>
      </View>
      <View style={styles.notificationCard}>
        <View style={styles.orderInfo}>
          <Icon style={styles.notificationCardIcon} name="reader-outline" />
          <View style={styles.cardHeadingWrapper}>
            <Text style={styles.orderitems}>2 items</Text>
          </View>
        </View>
        <Pressable>
          <Text style={styles.itemVeiwBtn}>Veiw All</Text>
        </Pressable>
      </View>
      <View style={styles.sectionHeadingWrapper}>
        <Text style={styles.sectionHeadig}>Shipping Deatils</Text>
      </View>
      <View style={styles.shoppingDetailCard}>
        <View style={styles.shoppingDetail}>
          <Text>2715 Ash Dr. San Jose, South Dakota 83475</Text>
          <Text>121-224-7890</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  backBtn: {
    backgroundColor: Colors.SecondaryBtnColor,
    padding: 10,
    borderRadius: '50%',
  },
  backIcon: {
    fontSize: 20,
  },
  headingWrapper: {
    width: '80%',
    alignItems: 'center',
  },
  heading: {
    fontWeight: '700',
    fontSize: 16,
  },
  statusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  StatusWrapper: {
    gap: 20,
    marginBottom: 20,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconWrapper: {
    backgroundColor: '#EFEAF5',
    padding: 10,
    borderRadius: '50%',
  },
  icon: {
    color: Colors.BackGroundColor,
  },
  statusText: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 16,
  },
  date: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 16,
  },
  purpleIconWrapper: {
    backgroundColor: Colors.Primary,
    padding: 10,
    borderRadius: '50%',
  },
  darkText: {
    color: '#000',
    fontSize: 16,
  },
  darkDate: {
    color: '#000',
    fontSize: 16,
  },
  sectionHeadingWrapper: {
    marginVertical: 10,
  },
  sectionHeadig: {
    fontSize: 16,
    fontWeight: '600',
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
  itemVeiwBtn: {
    color: Colors.Primary,
    fontWeight: '500',
  },
  shoppingDetailCard: {
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: Colors.SecondaryBtnColor,
  },
  shoppingDetail: {
    gap:5,
  },
});
