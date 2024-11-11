import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TopNavigation from "../../components/TopNavigation";
import Icons from "react-native-vector-icons/AntDesign";
import NavigationBar from "../../components/NavigationBar";
import FriendCard from "./_components/FriendCard";
import { PsychiatristData } from "../../utils/psychiatristData";


const AllFriends = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TopNavigation navigation={navigation} title={"All Friends"} />
      </View>
      <View style={styles.contentcontainer}>
        <View style={styles.inputContainer}>
            <Icons name="search1" size={24} style={styles.icon} />
            <TextInput style={styles.input} placeholder=" Search by email or username..." />
        </View>
        <View style={{marginHorizontal: 24,}}>
          <Text style={{ fontSize: 16, fontFamily: "Inter", color: "#1F2A37", fontWeight: "bold" }}>32 founds</Text>
        </View>
        <ScrollView
          style={{
            flexDirection: "column",
            paddingHorizontal: 24,
            marginTop: 16,
          }}
        >
          <View style={{ flexDirection: "column", gap: 16 }}>
{/*  */} 
          {
            PsychiatristData.map((item) => (
              <View key={item.id}>
                <FriendCard props={item} navigation={navigation}/>
              </View>
            ))
          }
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
    gap: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#f3f4f6",
    height: 40,
    marginHorizontal: 24,
  },
  icon: {
    marginRight: 8, // Space between icon and input
    color: "#9CA3AF",
  },
  input: {
    flex: 1, // Takes up the rest of the space
    fontSize: 14,
    color: "#9CA3AF",
  },
});

export default AllFriends;
