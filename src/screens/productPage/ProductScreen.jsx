import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from '../../assets/images/Images';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Icon style={styles.backIcon} name="chevron-back-outline" />
        </View>
        <View style={styles.iconWrapper}>
          <Icon style={styles.backIcon} name="heart-outline" />
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <Image style={styles.productImg} source={Images.profileImg} />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Men's Harrington Jacket</Text>
          <Text style={styles.productPrice}>$148</Text>
        </View>
        <View style={styles.dropDownWrapper}>
          <View style={styles.dorpdown}>
            <View style={styles.sizeWapper}>
              <Text style={styles.sizeText}>Size</Text>
            </View>
            <View style={styles.selectSizeWrapper}>
              <Text style={styles.selectSizeText}>S</Text>
              <Icon style={styles.dropdownIcon} name="chevron-down-outline" />
            </View>
          </View>
          <View style={styles.dorpdown}>
            <View style={styles.sizeWapper}>
              <Text style={styles.sizeText}>Color</Text>
            </View>
            <View style={styles.selectSizeWrapper}>
              <View style={styles.selectColor}></View>
              <Icon style={styles.dropdownIcon} name="chevron-down-outline" />
            </View>
          </View>
          <View style={styles.dorpdown}>
            <View style={styles.sizeWapper}>
              <Text style={styles.sizeText}>Quantity</Text>
            </View>
            <View style={styles.qunatityCounter}>
              <Pressable style={styles.counterBtn}>
                <Icon style={styles.counterIcon} name="add-outline" />
              </Pressable>
              <View style={styles.couterTextWrapper}>
                <Text style={styles.couterText}>1</Text>
              </View>
              <Pressable style={styles.counterBtn}>
                <Icon style={styles.counterIcon} name="remove-outline" />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            Built for life and made to last, this full-zip corduroy jacket is
            part of our Nike Life collection. The spacious fit gives you plenty
            of room to layer underneath, while the soft corduroy keeps it casual
            and timeless.
          </Text>
        </View>
        <View style={styles.reviewWrapper}>
          <Text style={styles.reviewHeading}>Reviews</Text>
        </View>
        <View style={styles.ratingWrapper}>
          <Text style={styles.rating}>4.5 Ratings</Text>
        </View>
        <View style={styles.reviewCountWrapper}>
          <Text style={styles.reviewCount}>213 Reviews</Text>
        </View>

        <View style={styles.reviewWrapper}>
          <View style={styles.reviewCardWrapper}>
            <View style={styles.reviewCardHeader}>
              <View style={styles.customerInfo}>
                <View style={styles.customerImgWrapper}>
                  <Image
                    source={Images.profileImg}
                    style={styles.customerImg}
                  />
                </View>
                <Text style={styles.CustomerTitle}>Alex Morgan</Text>
              </View>
              <View style={styles.starRatingWrapper}>
                <Image style={styles.starRating} source={Images.starRating} />
              </View>
            </View>
            <View style={styles.commentWrapper}>
              <Text style={styles.comment}>
                Gucci transcribes its heritage, creativity, and innovation into
                a plenitude of collections. From staple items to distinctive
                accessories.
              </Text>
            </View>
            <View style={styles.timeWrapper}>
              <Text style={styles.timePassed}>12days ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.cartBtnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  iconWrapper: {
    backgroundColor: Colors.SecondaryBtnColor,
    padding: 10,
    borderRadius: '50%',
  },
  backIcon: {
    fontSize: 20,
  },
  scroll: {},
  productImg: {
    width: 160,
    height: 250,
    objectFit: 'fill',
    marginHorizontal: 20,
  },

  productInfo: {
    paddingHorizontal: 20,
    gap: 10,
    marginVertical: 10,
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 20,
  },
  productPrice: {
    fontWeight: '700',
    fontSize: 20,
    color: Colors.Primary,
  },
  dropDownWrapper: {
    marginVertical: 10,
    paddingHorizontal: 20,
    gap: 15,
  },
  dorpdown: {
    backgroundColor: Colors.SecondaryBtnColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 30,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: '400',
  },
  selectSizeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  selectSizeText: {
    fontSize: 18,
    fontWeight: '600',
  },
  dropdownIcon: {
    fontSize: 25,
  },
  selectColor: {
    width: 16,
    height: 16,
    borderRadius: '50%',
    backgroundColor: '#B3B68B',
  },
  btnWrapper: {
    padding: 10,
    backgroundColor: '#fff',
    elevation: 10,
  },
  cartBtn: {
    backgroundColor: Colors.Primary,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  cartBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  qunatityCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  counterBtn: {
    backgroundColor: Colors.Primary,
    padding: 5,
    borderRadius: '50%',
  },
  counterIcon: {
    color: '#fff',
    fontSize: 20,
  },
  couterText: {
    fontSize: 16,
  },
  descriptionWrapper: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  description: {
    fontSize: 12,
    textAlign: 'justify',
    lineHeight: 25,
    color: 'rgba(0,0,0,0.5)',
  },
  reviewWrapper: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  reviewHeading: {
    fontSize: 20,
    fontWeight: '600',
  },
  ratingWrapper: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  rating: {
    fontSize: 24,
    fontWeight: '800',
  },
  reviewCountWrapper: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  reviewCount: {
    color: 'rgba(0,0,0,0.5)',
  },
  customerImgWrapper: {
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: 'red',
  },

  customerImg: {
    width: 40,
    height: 40,
    objectFit: 'fill',
  },
  customerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  CustomerTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  reviewCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  starRating: {
    width: 80,
    height: 16,
  },
  reviewCardWrapper: {
    gap: 10,
  },
  comment: {
    fontSize: 12,
    textAlign: 'justify',
    lineHeight: 25,
    color: 'rgba(0,0,0,0.5)',
  },
  timePassed: {
    fontSize: 14,
    fontWeight: '500',
  },
});
