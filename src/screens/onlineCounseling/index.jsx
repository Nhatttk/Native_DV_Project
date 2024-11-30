import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TopNavigation from "../../components/TopNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import NavigationBar from "../../components/NavigationBar";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { callGenerateContentAPI } from "../../api/apis";
import AnswerCardAI from "./_components/AnswerCardAI";
import QuestionCardAI from "./_components/QuestionCardAI";

const OnlineCounseling = ({ navigation }) => {
  const [addfile, setAddfile] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const flatListRef = useRef(null);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);
  const handleSend = async () => {
    setIsLoading(true)
    setMessages([
      ...messages,
      {
        isAnswer: false,
        message: message,
      },
    ]);
    setMessage("");
    const response = await callGenerateContentAPI(message);
    if (response?.candidates?.[0]?.content?.parts?.[0]?.text != null) {
      setMessages((prev) => [
        ...prev,
        {
          isAnswer: true,
          message: response?.candidates?.[0]?.content?.parts?.[0]?.text,
        },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          isAnswer: true,
          message: "Some thing went wrong!",
        },
      ]);
    }
    setIsLoading(false)
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
          <AnswerCardAI props={{ answer: "Hello, how can i help you?" }} />
          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={({ item }) => {
              if (item.isAnswer) {
                return <AnswerCardAI props={{ answer: item.message }} />;
              } else {
                return <QuestionCardAI props={{ message: item.message }} />;
              }
            }}
            keyExtractor={(item, index) => index.toString()}
          />

          {isLoading && <ActivityIndicator size="large" color="#00ff00" />}

          <View style={styles.message}>
            <View>
              {!addfile && (
                <TouchableOpacity onPress={() => setAddfile(true)}>
                  <Ionicons
                    name="add-circle-outline"
                    size={28}
                    color="#1C2A3A"
                  />
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
              )}
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
                  onPress={handleSend}
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

export default OnlineCounseling;
