import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  Button,
  SafeAreaView,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { getMessages } from "../../../api/apis";
import TopNavigation from "../../../components/TopNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { getLoginData } from "../../../api/storageData";
import AnswerCard from "./AnswerCard";
import QuestionCard from "./QuestionCard";

const PrivateChatScreen = ({ navigation, route }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState();
  const [ws, setWs] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = new WebSocket(
      `ws://192.168.1.170:8000/ws/private-chat/${route.params.private_id}/`
    );
    setWs(socket);
    
    fetchMessage();

    getUserName();

    // Lắng nghe sự kiện kết nối thành công
    socket.onopen = () => {
      setIsConnected(true);
      console.log("WebSocket connection established");
    };

    // Lắng nghe tin nhắn từ server
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessages((prev) => [
        ...prev,
        data.message_data,
      ]);
      console.log("print image lan 2,", messages)
    };

    // Lắng nghe lỗi WebSocket
    socket.onerror = (error) => {
      setIsConnected(false);
      console.log("WebSocket error:", error);
    };

    // Lắng nghe sự kiện đóng kết nối
    socket.onclose = () => {
      setIsConnected(false);
      console.log("WebSocket connection closed");
    };

    return () => socket.close();
  }, []);

  const fetchMessage = async () => {
    const messagesData = await getMessages(route.params.private_id)
    if (messagesData != null) {
      setMessages(messagesData)
    } else {
      console.log("error fetching messages")
    }
  }

  const getUserName = async () => {
    const userData = await getLoginData();
    setUsername(userData.user.username);
    setUserId(userData.user.profile.user)
    console.log("userID: ", userId)
  };

  const sendMessage = () => {
    if (ws && message) {
      try {
        ws.send(JSON.stringify({ message, sender: userId }));
        setMessage("");
        Alert.alert("Success", "Message sent successfully"); // Hiển thị thông báo gửi thành công
      } catch (error) {
        Alert.alert("Error", "Failed to send message");
      }
    } else {
      Alert.alert("Error", "WebSocket is not connected");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <View>
          <TopNavigation navigation={navigation} title={"Online Counseling"} />
        </View>
        <View style={styles.contentcontainer}>
          <View
            style={{ height: 1, backgroundColor: "#E4E7EC", width: "100%" }}
          />
          {/* <ScrollView
            style={{
              flexDirection: "column",
              paddingHorizontal: 24,
              marginTop: 16,
              width: "100%",
            }}
          > */}
            {/* {messages.map((message) => ( */}
              <FlatList
                data={messages}
                renderItem={({ item }) => {
                  if (item?.sender?.user?.username !== username) {
                    return <AnswerCard props={{ question: item }} />;
                  } else {
                    return <QuestionCard props={{ question: item }} />;
                  }
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            {/* ))} */}

            {/* <AnswerCard />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  width: "100%",
                  marginTop: 16,
                }}
              >
                {comments.length > 0 && (
                  <View>
                    <QuestionCard
                      props={{ question: comments[comments.length - 1] }}
                    />
                  </View>
                )}
              </View> */}
          {/* </ScrollView> */}
          <View style={styles.message}>
            <View>
              {/* {!addfile && (
                <TouchableOpacity onPress={() => setAddfile(true)}>
                  <Ionicons name="add-circle-outline" size={28} color="#1C2A3A" />
                </TouchableOpacity>
              )}
              {addfile && (
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <TouchableOpacity onPress={() => setAddfile(false)}>
                    <AntDesign name="closecircle" size={28} color="#1C2A3A" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="image-outline" size={28} color="#1C2A3A" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="camera-outline" size={28} color="#1C2A3A" />
                  </TouchableOpacity>
                </View>
              )} */}
            </View>
            <View style={[styles.inputContainer]}>
              <TextInput
                placeholder="Send message...."
                style={styles.input}
                value={message}
                onChangeText={setMessage}
              />
              <View style={styles.iconContainer}>
                <MaterialIcons name="tag-faces" size={20} color="#4B5563" />
                <Ionicons
                  name="send"
                  size={20}
                  color="#4B5563"
                  onPress={sendMessage}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  contentcontainer: {
    flexDirection: "column",
    height: "90%",
    paddingVertical: 16,
  },
  message: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: -32,
    left: 0,
    right: 0,
    padding: 16,
    gap: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 36,
    borderWidth: 1,
    borderColor: "#1F2A37",
    borderRadius: 50,
    padding: 8,
    marginHorizontal: 10,
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default PrivateChatScreen;
