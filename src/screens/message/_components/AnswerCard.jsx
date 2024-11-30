import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGE_URL } from "../../../api/URL/apiUrl";

const AnswerCard = ({ props }) => {
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
          source={{ uri: `${IMAGE_URL}${props.question.sender.avatar}` }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: "#1C2A3A",
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#1C2A3A" }}>
          {props.question.sender.user.username}
        </Text>
      </View>
      {/* <View /> */}
      <View>
        <Text style={{ fontWeight: 500, fontSize: 14, color: "#4B5563" }}>
          {props.question.content}
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
