import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const AchivementCard = ({ props }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: 100,
          backgroundColor: "#F3F4F6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icons name={props.icon} size={30} color="black" />
      </View>
      <View>
        <Text style={{ fontWeight: "semibold", color: "#4B5563", fontSize: 14 }}>{props.desc}</Text>
      </View>
      <View>
        <Text style={{ color: "#6B7280", fontSize: 14 }}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    gap: 10,
  },
});

export default AchivementCard;
