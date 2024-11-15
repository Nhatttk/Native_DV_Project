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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import NavigationBar from "../../components/NavigationBar";
import CommentKnowleadgeCard from "./_components/CommentKnowleadgeCard";

const commentsData = [
  {
    id: 1,
    name: "John Doe",
    avatarImage: require("../../assets/img/avatar.png"),
    comment: "Hello there, how are you?",
    status: "online",
    saw: false,
    time: "10:30 AM",
  },
  {
    id: 2,
    name: "John Doe",
    avatarImage: require("../../assets/img/avatar.png"),
    comment: "Hello there, how are you?",
    status: "online",
    saw: false,
    time: "10:30 AM",
  },
  {
    id: 3,
    name: "John Doe",
    avatarImage: require("../../assets/img/avatar.png"),
    comment: "Hello there, how are you?",
    status: "online",
    saw: false,
    time: "10:30 AM",
  },
  {
    id: 4,
    name: "John Doe",
    avatarImage: require("../../assets/img/avatar.png"),
    comment: "Hello there, how are you?",
    status: "online",
    saw: false,
    time: "10:30 AM",
  },
];

const KnowLeadgeArticle = ({ navigation, route }) => {
  const { knowledge } = route.params;
  const [seeAllComment, setSeeAllComment] = React.useState(false);
  const [openKeyboard, setOpenKeyboard] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TopNavigation navigation={navigation} title={"Knowleadge"} />
      </View>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.contentcontainer}>
          <ScrollView
            style={{
              flexDirection: "column",
              paddingHorizontal: 24,
              marginTop: 20,
            }}
          >
            {/*  */}

            <View style={{ gap: 8, marginBottom: 16 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "700", color: "#1C2A3A" }}
              >
                {knowledge.short_description}
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "400", color: "#6B7280" }}
              >
                {knowledge.content}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "600", color: "#1C2A3A" }}
              >
                Comment
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "400", color: "#6B7280" }}
                onPress={() => setSeeAllComment(!seeAllComment)}
              >{`${seeAllComment ? "See Less" : "See All"}`}</Text>
            </View>
            {seeAllComment && (
              <ScrollView style={styles.commentContainer}>
                {commentsData.map((item) => (
                  <View key={item.id}>
                    <CommentKnowleadgeCard props={item} />
                  </View>
                ))}
              </ScrollView>
            )}
            <TouchableOpacity onPress={() => setOpenKeyboard(true)}>
              {!openKeyboard && (
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Comment</Text>
                </View>
              )}
            </TouchableOpacity>
            {openKeyboard && (
              <View
                style={{
                  //   position: "absolute",
                  //   bottom: 0,
                  marginTop: 16,
                  width: "100%",
                  backgroundColor: "#f3f4f6",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder=" Write a comment..."
                  />
                </View>
                <View style={styles.iconContainer}>
                  <MaterialIcons name="tag-faces" size={20} color="#4B5563" />
                  <Ionicons
                    name="send"
                    size={20}
                    color="#4B5563"
                    onPress={() => setOpenKeyboard(false)}
                  />
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>

      <View
        style={{
          position: "absolute",
          bottom: 0,
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
    overflow: "hidden",
  },
  contentcontainer: {
    flexDirection: "column",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    // backgroundColor: "#f3f4f6",
    height: 40,
    width: "80%",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 8,
    marginRight: 8,
  },
  input: {
    flex: 1, // Takes up the rest of the space
    fontSize: 14,
    color: "#9CA3AF",
  },
  commentContainer: {
    flexDirection: "column",
    height: 200,
    width: "100%",
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: "#1C2A3A",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 29,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default KnowLeadgeArticle;
