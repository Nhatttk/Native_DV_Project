import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SelectCountry } from "react-native-element-dropdown";
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { theme } from '../../../constains/theme';
const FilterUser = ({data}) => {
  const [country, setCountry] = useState("1");
  return (
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        imageStyle={styles.imageStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        maxHeight={200}
        value={country}
        data={data}
        valueField="value"
        labelField="label"
        imageField="image"
        placeholder="Select country"
        searchPlaceholder="Search..."
        onChange={(e) => {
          setCountry(e.value);
        }}
      />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
  },
  imageStyle: {
    width: 24,
    height: 24,
    marginStart: 5,
  },
  placeholderStyle: {
    fontSize: 19,
  },
  selectedTextStyle: {
    fontSize: 14,
    marginLeft: 8,
    color: theme.colors.fontColor,
    borderColor: theme.colors.fontColor,
    fontWeight: theme.frontWeights.semibold,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginEnd: 5,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default FilterUser;
