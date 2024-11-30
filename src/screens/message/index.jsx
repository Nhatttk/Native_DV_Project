import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TopNavigation from "../../components/TopNavigation";
// import Icons from "react-native-vector-icons/AntDesign";
import NavigationBar from "../../components/NavigationBar";
import MessageCard from "./_components/MessageCard";

const messagesData = [
    {
      id: 1,
      name: "John Doe",
      avatarImage: require("../../assets/img/avatar.png"),
      message: "Hello there, how are you?",
      status: "online",
      saw: false,
      messBoxId: "OnlineCounsellingScreen",
      time: "10:30 AM",
    },
    {
        id: 2,
        name: "John Doe",
        avatarImage: require("../../assets/img/avatar.png"),
        message: "Hello there, how are you?",
        status: "online",
        saw: true,
        messBoxId: "OnlineCounsellingScreen",
        time: "10:30 AM",
      },
    {
        id: 3,
        name: "John Doe",
        avatarImage: require("../../assets/img/avatar.png"),
        message: "Hello there, how are you?",
        status: "offline",
        saw: false,
        messBoxId: "OnlineCounsellingScreen",
        time: "10:30 AM",
      },
    {
        id: 4,
        name: "John Doe",
        avatarImage: require("../../assets/img/avatar.png"),
        message: "Hello there, how are you?",
        status: "online",
        saw: true,
        messBoxId: "OnlineCounsellingScreen",
        time: "10:30 AM",
      },
    {
        id: 5,
        name: "John Doe",
        avatarImage: require("../../assets/img/avatar.png"),
        message: "Hello there, how are you?",
        status: "offline",
        saw: true,
        messBoxId: "OnlineCounsellingScreen",
        time: "10:30 AM",
      },
]

const MessageScreen = ({ navigation }) => {

  const [messagesData, setMessagesData] = useState([])
  useEffect(()=> {
    fetchingMessagesData()
  },[])

  const fetchingMessagesData = async () => {
    try {
      const userData = await getLoginData()
      const chats = await getChats(userData ? userData.user.username : "");
      setMessagesData(chats)
      console.log("messagesData.id", messagesData)
    } catch (error) {
      console.log("Erorr fetching chats");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TopNavigation navigation={navigation} title={"Messages"} />
      </View>
      <View style={styles.contentcontainer}>
        <View
          style={{ height: 1, backgroundColor: "#E4E7EC", width: "100%" }}
        />
        <ScrollView
          style={{
            flexDirection: "column",
            paddingHorizontal: 24,
            marginTop: 16,
          }}
        >
          <View style={{ flexDirection: "column", gap: 16 }}>
{/*  */}
          {messagesData.map((item) => (
          
            <View key={item.id}>
                <MessageCard props={item} private_id ={item.id} navigation={navigation}/>
            </View>
          ))}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: 16,
          backgroundColor: "#fff",
        }}
      >
        <NavigationBar navigation={navigation} />
      </View>
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
});

export default MessageScreen;
