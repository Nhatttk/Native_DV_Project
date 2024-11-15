import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TopNavigation from "../../components/TopNavigation";
import Icons from "react-native-vector-icons/AntDesign";
import NavigationBar from "../../components/NavigationBar";
import StoryCard from "./_Components/StoryCard";

const data = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Main St, City, State ZIP",
    avatarImage:
      "https://img.freepik.com/free-photo/portrait-young-man-isolated_23-2149158663.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgUrl: "https://www.offidocs.com/vi/images/foresttreesblackwhitetree.jpg",
    comments: [
      {
        id: 1,
        name: "antony",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024-10-10",
      },
      {
        id: 2,
        name: "antony",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024-10-10",
      },
      {
        id: 3,
        name: "antony",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024-10-10",
      },
    ],
    likes: 59,
  },
  {
    id: 2,
    name: "John Doe",
    address: "123 Main St, City, State ZIP",
    avatarImage:
      "https://img.freepik.com/free-photo/portrait-young-man-isolated_23-2149158663.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgUrl: "https://www.offidocs.com/vi/images/foresttreesblackwhitetree.jpg",
    comments: [
      {
        id: 1,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024-10-10",
      },
      {
        id: 2,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024-10-10",
      },
      {
        id: 3,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024-10-10",
      },
    ],
    likes: 59,
  },
  {
    id: 3,
    name: "John Doe",
    address: "123 Main St, City, State ZIP",
    avatarImage:
      "https://img.freepik.com/free-photo/portrait-young-man-isolated_23-2149158663.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgUrl: "https://www.offidocs.com/vi/images/foresttreesblackwhitetree.jpg",
    comments: [
      {
        id: 1,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024-10-10",
      },
      {
        id: 2,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024-10-10",
      },
      {
        id: 3,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024-10-10",
      },
    ],
    likes: 59,
  },
];

const StorieScreen = ({ navigation }) => {
  const [commentText, setCommentText] = React.useState("");
  const commentHandle = () => {
    console.log('commenttext: ',commentText);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TopNavigation navigation={navigation} title={"Stories"} />
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
            {data.map((item) => (
              <View key={item.id}>
                <StoryCard props={item} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
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
});

export default StorieScreen;
