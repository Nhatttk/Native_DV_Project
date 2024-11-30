import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGE_URL } from "../../../api/URL/apiUrl";
import { getLoginData } from "../../../api/storageData";
import LoadingPopup from "../../../components/loadingPopup";

const MessageCard = ({ props, private_id, navigation }) => {
  const [messages, setMessages] = useState([props.messages])
  const [friend, setFriend] = useState()

  useEffect(() => {
    checkUser()
    console.log(friend)
  },[]);

  const checkUser = async () => {
    const user = await getLoginData()
    if (user.user.username === props.user1.user.username) {
        setFriend(props.user2)
    } else {
      setFriend(props.user1)
    }
  }

  if (friend == null) {
    return(<LoadingPopup/>)
  } else {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("PrivateChatScreen", {private_id : private_id})}>
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
            source={{ uri: `${IMAGE_URL}${friend.avatar}` }}
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
              {friend.user.username}
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
              {messages.at(-1).at(-1).content}
            </Text>
          </View>
        </View>
        {!props.saw && <View style={styles.sawdot} />}
      </View>
      </TouchableOpacity>
    );
  }
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