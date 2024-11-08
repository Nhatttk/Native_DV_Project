import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ItemSection = ({ props }) => {
  return (
    <View style={{ justifyContent: "center"}}>
    <View
      style={{
        // paddingVertical: 8,
        // paddingHorizontal: 20,
        alignSelf: "center",
        borderRadius: 61,
        borderWidth: 1,
        borderColor: "#1C2A3A",
        backgroundColor: props.isActive ? "#1C2A3A" : "#ffff",
      }}
    >
      <Text
        style={[styles.title, { color: props.isActive ? "#ffff" : "#1C2A3A" }]}
      >
        {props.title}
      </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 600,
    fontSize: 14,
    marginVertical: 8,
    marginHorizontal: 20,
  },
});

export default ItemSection;
