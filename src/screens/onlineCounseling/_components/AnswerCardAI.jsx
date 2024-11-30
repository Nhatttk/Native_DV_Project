import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGE_URL } from "../../../api/URL/apiUrl";

const AnswerCardAI = ({ props }) => {
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
          source={{ uri: `https://media.istockphoto.com/id/1333838449/vector/chatbot-icon-support-bot-cute-smiling-robot-with-headset-the-symbol-of-an-instant-response.jpg?s=612x612&w=0&k=20&c=sJ_uGp9wJ5SRsFYKPwb-dWQqkskfs7Fz5vCs2w5w950=` }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: "#1C2A3A",
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#1C2A3A" }}>
          Online Counseling
        </Text>
      </View>
      {/* <View /> */}
      <View>
        <Text style={{ fontWeight: 500, fontSize: 14, color: "#4B5563" }}>
          {props.answer}
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

export default AnswerCardAI;
