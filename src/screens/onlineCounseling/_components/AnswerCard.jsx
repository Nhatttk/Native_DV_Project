import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AnswerCard = ({ friendName = "Online Counseling Bot", answer }) => {
  return (
    <View
      style={[
        styles.container,
        { flexDirection: "column", gap: 8, padding: 19 },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          borderBottomColor: "#D1D5DB",
          borderBottomWidth: 1,
          paddingBottom: 8,
        }}
      >
        <Image
          source={require("../../../assets/img/avatar2.png")}
          style={{
            width: 30,
            height: 30,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: "#1C2A3A",
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#1C2A3A" }}>
          {friendName}
        </Text>
      </View>
      {/* <View /> */}
      <View>
        <Text style={{ fontWeight: 500, fontSize: 14, color: "#4B5563" }}>
          {/* Sarah and her friend Emma are having coffee together. Emma notices
          Sarah seems nervous and has a bruise on her wrist. */}
          {answer}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 254,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
});

export default AnswerCard;
