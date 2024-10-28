import React, { useContext, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import TopNavigation from "../../components/TopNavigation";
import { PsychiatristData } from "../../utils/psychiatristData";
import { BlogsData } from "../../utils/blogsData";
import FavoriteCard from "./_components/FavoriteCard";
import BlogCard from "./_components/BlogCard";
import IsFavoritesProvider, {
  IsFavoritesContext,
} from "../../utils/IsFavoritesContext";

const FavoritesScreen = ({ navigation }) => {
  const [isPsychiatrist, setIsPsychiatrist] = React.useState(true);
  const [psychiatristRemoved, setPsychiatristRemoved] = React.useState();
  const [isBlogs, setIsBlogs] = React.useState(false);

  const { isfavorite, idItem, removing, setRemoving } = useContext(IsFavoritesContext);

  const [displayRemove, setDisplayRemove] = React.useState(false);

  // const handleFilter = (status) => {
  //   if (isPsychiatrist === true) {
  //     return status === "upcoming";
  //   } else if (isCompleted === true) {
  //     return status === "completed";
  //   }
  // };

  const onPressPsychiatrist = () => {
    setIsPsychiatrist(true);
    setIsBlogs(false);
  };

  const onPressHandleRemoveFavorites = () => { 
    setDisplayRemove(true);
    console.log("REMOVE: ", true);
  }

  const onPressBlogs = () => {
    setIsPsychiatrist(false);
    setIsBlogs(true);
  };
  return (
    <IsFavoritesProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ marginBottom: 10 }}>
          <TopNavigation
            navigation={navigation}
            title="Favorites"
            isHeart={false}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 24,
          }}
        >
          <TouchableOpacity onPress={onPressPsychiatrist}>
            <View style={{ width: 151, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: isPsychiatrist ? "#1C2A3A" : "#9CA3AF",
                  marginVertical: 16,
                }}
              >
                Psychiatrist
              </Text>
              {isPsychiatrist && (
                <View
                  style={{
                    width: 83,
                    height: 3,
                    backgroundColor: "#1C2A3A",
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                  }}
                ></View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressBlogs}>
            <View style={{ width: 151, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: isBlogs ? "#1C2A3A" : "#9CA3AF",
                  marginVertical: 16,
                }}
              >
                blogs
              </Text>
              {isBlogs && (
                <View
                  style={{
                    width: 83,
                    height: 3,
                    backgroundColor: "#1C2A3A",
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                  }}
                ></View>
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#E5E7EB" }}
        ></View>
        <ScrollView>
          <View style={styles.Contentcontainer}>
            {isPsychiatrist &&
              PsychiatristData.map((item) => (
                <FavoriteCard key={item.id} props={item} />
              ))}
            {isBlogs &&
              BlogsData.map((item) => <BlogCard props={item} onPressHandleRemoveFavorites={onPressHandleRemoveFavorites} key={item.id} />)}
          </View>
          
        </ScrollView>
        {displayRemove && 
        <TouchableWithoutFeedback onPress={() => setDisplayRemove(false)}>
        <View style={styles.removeContainer}onPress={() => setDisplayRemove(false)}>
            <View style={styles.contentRemove} >
              <Text>hello world</Text>
            </View>
            </View>
            </TouchableWithoutFeedback>
            }
      </SafeAreaView>
    </IsFavoritesProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  Contentcontainer: {
    flexDirection: "column",
    marginHorizontal: 24,
    gap: 10,
    marginTop: 16,
  },
  removeContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 99
  },
  contentRemove: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 300,
    backgroundColor: "#ffff"
  }
});

export default FavoritesScreen;
