import { Pressable, StyleSheet, Text,  View } from 'react-native';
import React from 'react';
import Button from '../../../components/Button/Button';
import Colors from '../../../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const InformationScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.imformationWrapper}>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}> Tell us About yourself</Text>
        </View>
        <View style={styles.selectionWrapper}>
          <Text style={styles.selectionText}>Who do you shop for ?</Text>
        </View>
        <View style={styles.selectionBtnWrapper}>
          <Button
            title="Men"
            btnTextStyle={styles.selectedBtnText}
            btnStyle={styles.selectedBtn}
          />
          <Button
            title="Women"
            btnTextStyle={styles.notSelectedBtnText}
            btnStyle={styles.notSelectedBtn}
          />
        </View>
        <View style={styles.selectionWrapper}>
          <Text style={styles.selectionText}>How Old are you ?</Text>
        </View>
        <Pressable style={styles.ageDropdown}>
          <View style={styles.dropDown}>
            <Text >Age Range</Text>
            <Icon name="chevron-down" size={15} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.finishWrapper}>
        <Button
          title="Finish"
          btnTextStyle={styles.BtnText}
          btnStyle={styles.btn}
        />
      </View>
    </View>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
    justifyContent: 'space-between',
  },
  imformationWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flex: 1,
  },
  headingWrapper: {
    marginTop: 60,
    marginBottom: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
  },
  selectionWrapper: {
    marginBottom: 20,
  },
  selectionText: {
    fontSize: 18,
  },
  selectionBtnWrapper: {
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  selectedBtn: {
    width: '47%',
    backgroundColor: Colors.Primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  selectedBtnText: {
    color: Colors.BackGroundColor,
    fontSize: 16,
  },
  notSelectedBtn: {
    width: '47%',
    backgroundColor: Colors.SecondaryBtnColor,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  notSelectedBtnText: {
    color: Colors.blackText,
    fontSize: 16,
  },
  ageDropdown: {
    backgroundColor: Colors.SecondaryBtnColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  dropDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  finishWrapper: {
    backgroundColor: Colors.SecondaryBtnColor,
    padding: 20,
  },
  btn: {
    backgroundColor: Colors.Primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  BtnText: {
    color: Colors.BackGroundColor,
    fontWeight: 500,
    fontSize: 16,
  },
});
