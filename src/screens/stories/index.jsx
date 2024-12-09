import React, { useEffect } from "react";
import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TopNavigation from "../../components/TopNavigation";
import Icons from "react-native-vector-icons/AntDesign";
import NavigationBar from "../../components/NavigationBar";
import StoryCard from "./_Components/StoryCard";
import IconsAntDesign from "react-native-vector-icons/AntDesign";
import FormAddStory from "./_Components/FormAddStory";
import postStory, { getStories } from "../../api/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMAGE_URL } from "../../api/URL/apiUrl";


const StorieScreen = ({ navigation }) => {
  const [commentText, setCommentText] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);
  const [stories, setStories] = React.useState([]);
  // const [userLogin, setUserLogin] = useState({});

  // useEffect(() => {
  //   AsyncStorage.getItem("userData").then((value) => {
  //     if (value) {
  //       setUserLogin(JSON.parse(value));
  //     }
  //   })
  // }, [])
  
  // console.log("userLogin: ",userLogin.user.profile.avatar);

  const commentHandle = () => {
    console.log("commenttext: ", commentText);
  };
  const onCancel = () => {
    setOpenDialog(false);
  };
  const HandleOpenDialog = () => {
      setOpenDialog(true);
  }
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await getStories();
        setStories(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchStories();
  }, []);
  console.log("stories: ",stories)
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TopNavigation navigation={navigation} title={"Stories"} />
      </View>
      <View style={styles.contentcontainer}>
        <View
          style={{ height: 1, backgroundColor: "#E4E7EC", width: "100%" }}
        />
        {/*  */}
        <View
          style={{
            paddingHorizontal: 24,
            marginTop: 16,
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 8,
            width: "100%",
          }}
        >
          <View>
            <Image
              source={require("../../assets/img/avatar.png")}
              // source={{ uri: `${IMAGE_URL}${userLogin.user.profile.avatar}` }}
              style={{ width: 40, height: 40, borderRadius: 999 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={HandleOpenDialog}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 8,
                  borderRadius: 12,
                  borderColor: "#E4E7EC",
                  borderWidth: 1,
                  width: "100%",
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "500", color: "#6B7280" }}
                >
                  Share your story
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <ScrollView
          style={{
            flexDirection: "column",
            paddingHorizontal: 24,
            marginTop: 16,
          }}
        >
          <View style={{ flexDirection: "column", gap: 16 }}>
            {stories.map((item, index) => (
              <View key={index}>
                <StoryCard props={item} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <Modal
        visible={openDialog}
        transparent={true}
        onRequestClose={() => setOpenDialog(false)}
        animationType="slide"
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View style={styles.dialogContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
                padding: 8,
              }}
            >
              <IconsAntDesign
                name="closecircleo"
                size={20}
                onPress={() => setOpenDialog(false)}
              />
            </View>
            <View style={styles.form}>
              <FormAddStory onCancel={onCancel} />
            </View>
          </View>
        </View>
      </Modal>
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
  dialogContainer: {
    position: "relative",
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 200,
    paddingHorizontal: 30,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    flexDirection: "column",
    padding: 20,
    flex: 1,
    width: "100%",
    // height: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  form: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default StorieScreen;
