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
import Button from "../../components/button";

const FavoritesScreen = ({ navigation }) => {
  const [isPsychiatrist, setIsPsychiatrist] = React.useState(true);
  const [psychiatristRemoved, setPsychiatristRemoved] = React.useState();
  const [isBlogs, setIsBlogs] = React.useState(false);

  const { isfavorite, idItem, removing, setRemoving } =
    useContext(IsFavoritesContext);

  const [displayRemove, setDisplayRemove] = React.useState(false);
  const [idItemRemove, setIdItemRemove] = React.useState("");

  const onPressPsychiatrist = () => {
    setIsPsychiatrist(true);
    setIsBlogs(false);
  };

  const onPressHandleRemoveFavorites = (id) => {
    setDisplayRemove(true);
    setIdItemRemove(id);
  };
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
                <FavoriteCard
                  key={item.id}
                  onPressHandleRemoveFavorites={
                    onPressHandleRemoveFavorites
                  }
                  props={item}
                />
              ))}
            {isBlogs &&
              BlogsData.map((item) => (
                <BlogCard
                  props={item}
                  onPressHandleRemoveFavorites={onPressHandleRemoveFavorites}
                  key={item.id}
                />
              ))}
          </View>
        </ScrollView>
        {displayRemove && (
          <TouchableWithoutFeedback onPress={() => setDisplayRemove(false)}>
            <View
              style={styles.removeContainer}
              onPress={() => setDisplayRemove(false)}
            >
              <View style={[styles.contentRemove, { height: isBlogs ? 472 : 380}]}>
                <View
                  style={{
                    flexDirection: "column",
                    gap: 19,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{ fontSize: 20, fontWeight: 700, color: "#1C2A3A" }}
                  >
                    Remove from Favorites?
                  </Text>
                  {isBlogs && (
                    <View>
                      {BlogsData.filter((item) => item.id === idItemRemove).map(
                        (item) => (
                          <BlogCard props={item} key={item.id} />
                        )
                      )}
                    </View>
                  )}
                  {isPsychiatrist && (
                    <View>
                      {PsychiatristData.filter((item) => item.id === idItemRemove).map(
                        (item) => (
                          <FavoriteCard props={item} key={item.id} />
                        )
                      )}
                    </View>
                  )}
                  <View style={{ height: 1, backgroundColor: "#E5E7EB", width: "80%" }} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "space-evenly",
                    width: "100%",
                    marginBottom: 24,
                    // marginHorizontal: 24
                  }}
                >
                  <View style={{ width: 163 }}>
                    <Button
                      props={{
                        navigation: navigation,
                        navigationPath: "HomeScreen",
                        title: "Cancle",
                      }}
                      customStyle={{
                        backgroundColor: "#E5E7EB",
                        height: 40,
                      }}
                      textStyles={{ color: "#1C2A3A" }}
                    />
                  </View>
                  <View style={{ width: 163 }}>
                    <Button
                      props={{
                        navigation: navigation,
                        navigationPath: "favoritesScreen",
                        title: "Yes, Remove",
                      }}
                      customStyle={{
                        backgroundColor: "#1C2A3A",
                        height: 40,
                      }}
                      textStyles={{ color: "#FFFFFF" }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
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
    // zIndex: 99,
  },
  contentRemove: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 63,
    flexDirection: "column",
    gap: 32,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderTopEndRadius: 34,
    borderTopStartRadius: 34,
    backgroundColor: "#ffff",
  },
});

export default FavoritesScreen;
