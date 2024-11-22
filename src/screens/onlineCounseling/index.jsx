import React from "react";
import {
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
import AnswerCard from "./_components/AnswerCard";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import QuestionCard from "./_components/QuestionCard";

const OnlineCounseling = ({ navigation, route }) => {
  const { friendName = "Online Counseling Bot" } = route?.params || {};
  const [addfile, setAddfile] = React.useState(false);
  const [commentText, setCommentText] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const [isSend, setIsSend] = React.useState(false);
  const [sendSecondcmt, setSendSecondCmt] = React.useState(false);

  const handleChangeText = (text) => setCommentText(text);

  const handleSend = () => {
    setComments([...comments, commentText]);
    setIsSend(true);
    setSendSecondCmt(true);
    setCommentText(""); // Clear input after sending
  };
  console.log("comments: ", comments);
  console.log("friendName: ", friendName);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <View>
          <TopNavigation
            navigation={navigation}
            title={`${friendName ? friendName : "Online Counseling Bot"}`}
          />
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
              width: "100%",
            }}
          >
            {/* <AnswerCard friendName={friendName}/> */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%",
                marginTop: 16,
              }}
            >
              {comments.length > 0 && isSend && (
                <View>
                  <QuestionCard
                    props={{ question: comments[comments.length - 1] }}
                  />
                </View>
              )}
            </View>
            {sendSecondcmt && (
              <View style={{ marginTop: 16 }}>
                <AnswerCard
                    friendName={friendName}
                    answer="Hi, how can I help you?"
                  />
              </View>
            )}
          </ScrollView>
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
                onChangeText={handleChangeText}
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
      {/*  */}
      {/* <View
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
      </View> */}
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
