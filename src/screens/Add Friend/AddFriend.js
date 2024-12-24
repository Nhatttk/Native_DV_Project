import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HeaderTitle from "../../components/header_title";
import FilterUser from "./_components/filterUser";
import { Dropdown } from "react-native-element-dropdown";
import UserView from "./_components/user";
import TopNavigation from "../../components/TopNavigation";
import {
  getAllFriends,
  getAllFriendsRequest,
  getAllProfiles,
  getAllSuggestion,
} from "../../api/apis";
import UserData from "../../UserData/UserData";
import AllFriendsView from "./_components/AllFriendComponent";
import RequestFriendView from "./_components/RequestFriendView";

const AddFriend = ({ navigation }) => {
  const [profiles, setProfiles] = useState([]);
  const [friends, setFriend] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [friendRequests, setFriendRequest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [optionView, setOptionView] = useState("All Friends");
  useEffect(() => {
    fetchSuggestion();
    fetchAllFriends();
    fetchAllFriendRequest();
  }, []);

  // const fetchSuggestion = async () => {
  //   try {
  //     const profiles = await getAllProfiles();
  //     setProfiles(profiles);
  //   } catch (error) {
  //     console.error("Error in component:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchSuggestion = async () => {
    setOptionView("Suggestion")
    try {
      const suggestion = await getAllSuggestion(UserData.data.user.profile.pk);
      setSuggestion(suggestion);
    } catch (error) {
      console.error("Error in component:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllFriends = async () => {
    setOptionView("All Friends")
    try {
      const friend = await getAllFriends(UserData.data.user.profile.pk);
      setFriend(friend);
    } catch (error) {
      console.error("Error in component:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllFriendRequest = async () => {
    setOptionView("Friend Requests")
    try {
      const request = await getAllFriendsRequest(UserData.data.user.profile.pk);
      setFriendRequest(request);
    } catch (error) {
      console.error("Error in component:", error);
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    fetchSuggestion();
    fetchAllFriends();
    fetchAllFriendRequest();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <HeaderTitle title={"Add Friend"} /> */}
      <View style={styles.header_title}>
        <TopNavigation
          navigation={navigation}
          title={"Add Friend"}
          listFriend={true}
        />
      </View>
      {/* search bar */}
      <View style={styles.search}>
        <Ionicons name="search-outline" size={24} color="#9CA3AF" />
        <TextInput
          style={{
            fontFamily: "Inter",
            fontWeight: "regular",
            fontSize: 14,
            color: "#9CA3AF",
            styles: {
              height: 40,
            },
          }}
          placeholder="Search by email or username..."
        ></TextInput>
      </View>
      <View style={styles.filter}></View>
      <View style={styles.card}>
        <View style={styles.arrange}></View>
        <View style={styles.card_item}></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
          margin: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => fetchAllFriends()}
          style={[
            styles.inbox_button,
            optionView === "All Friends" && styles.inbox_button_selected,
          ]}
        >
          <Text
            style={{ color: optionView === "All Friends" ? "white" : "black" }}
          >
            All Friends
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => fetchAllFriendRequest()}
          style={[
            styles.inbox_button,
            optionView === "Friend Requests" && styles.inbox_button_selected,
          ]}
        >
          <Text
            style={{
              color: optionView === "Friend Requests" ? "white" : "black",
            }}
          >
            Friend Requests
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => fetchSuggestion()}
          style={[
            styles.inbox_button,
            optionView === "Suggestion" && styles.inbox_button_selected,
          ]}
        >
          <Text
            style={{ color: optionView === "Suggestion" ? "white" : "black" }}
          >
            Suggestion
          </Text>
        </TouchableOpacity>
      </View>

      {optionView === "Suggestion" && (
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            fontFamily: "Inter",
            marginHorizontal: 20,
            marginVertical: 15,
          }}
        >
          {suggestion.length} Founds{" "}
        </Text>
      )}

      {optionView === "All Friends" && (
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            fontFamily: "Inter",
            marginHorizontal: 20,
            marginVertical: 15,
          }}
        >
          {friends.length} Founds{" "}
        </Text>
      )}

      {optionView === "Friend Requests" && (
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            fontFamily: "Inter",
            marginHorizontal: 20,
            marginVertical: 15,
          }}
        >
          {friendRequests.length} Founds{" "}
        </Text>
      )}

      <ScrollView>
        {optionView === "Suggestion" &&
          suggestion.map(
            (user) =>
              user.pk !== UserData.data.user.profile.pk && (
                <UserView style={styles.user} key={user.pk} user_data={user} action={refresh}/>
              )
          )}

        {optionView === "All Friends" &&
          friends.map((friend) => (
            <AllFriendsView key={friend.id} friend_data={friend.user2} action={refresh}/>
          ))}

        {optionView === "Friend Requests" &&
          friendRequests.map((request) => (
            <RequestFriendView key={request.id} request_data={request.sender} action={refresh}/>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 24,
    backgroundColor: "#fff",
  },
  header_title: {
    marginBottom: 14,
  },
  inbox_button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    color: "#1C2A3A",
  },

  inbox_button_selected: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#1C2A3A",
  },
  user: {
    marginHorizontal: 10,
  },
  search: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingLeft: 12,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
    marginHorizontal: 24,
    alignItems: "center",
    gap: 8,
  },
});

export default AddFriend;
