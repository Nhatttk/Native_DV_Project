import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const HeaderTitle = ({ navigation, title }) => {
  return (
    <View style={styles.header_title}>
      <TouchableOpacity
        style={styles.icon_container}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#374151" />
      </TouchableOpacity>

      <View style={styles.title_container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    // marginTop: 0,
    // marginBottom: 14,
    marginHorizontal: 24,
  },
  icon_container: {
    position: "absolute",
    left: 0,
    paddingRight: 10,
  },
  title_container: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter",
    fontWeight: "bold",
    textAlign: "center",
    color: "#374151",
  },
});

export default HeaderTitle;
