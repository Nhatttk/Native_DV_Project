import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MessageCard = ({ props, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.messBoxId)}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 12,
        shadowColor: "black",
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
      }}
      onPre
    >
      <View>
        <Image
          source={props.avatarImage}
          style={{
            width: 30,
            height: 30,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: "#1F2A37",
          }}
        />
        {props.status === "online" && (
          <View
            style={{
              position: "absolute",
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#03B66E",
              bottom: 0,
              right: 0,
            }}
          />
        )}
      </View>
      <View style={{ flexDirection: "column", gap: 6 }}>
        <View>
          <Text style={{ fontWeight: 700, color: "#1F2A37", fontSize: 16 }}>
            {props.name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#4B5563",
              fontWeight: props.saw ? 300 : 600,
            }}
          >
            {props.message}
          </Text>
        </View>
      </View>
      {!props.saw && <View style={styles.sawdot} />}
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sawdot: {
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: 999,
    backgroundColor: "#2D49B7",
    bottom: 30,
    right: 15,
  }
});

export default MessageCard;
