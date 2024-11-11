import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icons from "react-native-vector-icons/EvilIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

const FriendCard = ({ props, navigation }) => {
    const InboxButton = () => {
        navigation.navigate("ChatWithFriend", { userName: props.name });
    }
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image style={styles.image} source={{ uri: props.imgUrl }} />
      </View>
      <View style={styles.info}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: "16" }}>
            {props.name}
          </Text>
        </View>
        <View style={styles.lineStyle} />
        <Text
          style={{ fontSize: "14", fontWeight: "semibold", color: "#4B5563" }}
        >
          {props.specialization}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Icons name="location" size={20} color="#4B5563" />
          <Text style={{ fontSize: "14", color: "#4B5563" }}>
            {props.address}
          </Text>
        </View>
        <TouchableOpacity onPress={InboxButton}>
        <View style={styles.button}>
          <Text
            style={{
              fontSize: "14",
              fontWeight: "semibold",
              color: "#1C2A3A",
              alignSelf: "center",
            }}
          >
            Inbox
          </Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 12,
    padding: 12,
    width: 342,
    height: 133,
    backgroundColor: "#fff",
    shadowColor: "#000000", // Shadow color
    borderColor: "black", // Border color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    elevation: 15, // Shadow effect on Android
    borderRadius: 12,
  },
  info: {
    flexDirection: "column",
    gap: 8,
  },
  avatar: {
    height: 109,
    width: 109,
    borderRadius: 12,
  },
  image: {
    width: 109,
    height: 109,
    borderRadius: 12,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#E5E7EB",
    // marginVertical: 8
  },
  button: {
    width: "100%",
    height: 29,
    borderWidth: 1,
    borderColor: "#1C2A3A",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  }
});
export default FriendCard;
