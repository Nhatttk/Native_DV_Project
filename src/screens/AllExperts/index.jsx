import React, { useEffect } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import TopNavigation from "../../components/TopNavigation";
import Icons from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native";
import ItemSection from "./_components/ItemSection";
// import { PsychiatristData } from "../../utils/psychiatristData";
import FavoriteCard from "../favorites/_components/FavoriteCard";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";
import { fetchExpertList } from "../../api/apis";

const AllExpertScreen = ({ navigation }) => {

  const [PsychiatristData, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const knowledgeData = await fetchExpertList();
      setData(knowledgeData);
    } catch (error) {
      console.error("Error in component:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TopNavigation navigation={navigation} title={"All Experts"} />
      </View>
      <View style={{ marginHorizontal: 24, gap: 14, marginTop: 14 }}>
        <View style={styles.inputContainer}>
          <Icons name="search1" size={24} style={styles.icon} />
          <TextInput style={styles.input} placeholder=" Search ..." />
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <ItemSection props={{ title: "All", isActive: false }} />
          <ItemSection props={{ title: "General", isActive: true }} />
          <ItemSection props={{ title: "psychiatrist", isActive: false }} />
          <ItemSection props={{ title: "lawyer", isActive: false }} />
        </View>
      </View>
      <View style={styles.contentcontainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 24,
            marginTop: 26,
          }}
        >
          <View>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#1F2A37" }}
            >
              12 founds
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center",gap: 8 }}>
            <Text style={{ fontSize: 14, fontWeight: 600, color: "#6B7280"  }}>Default</Text>
            <Image style={{ width: 14, height: 14 }} source={require("../../assets/images/arrowUpDown.png")} />
          </View>
        </View>
        <ScrollView
          style={{
            flexDirection: "column",
            paddingHorizontal: 24,
            gap: 18,
            marginTop: 8,
          }}
        >
          {PsychiatristData.map((item) => (
            <View key={item.id} style={{ marginBottom: 8 }}>
              <FavoriteCard
                //   onPressHandleRemoveFavorites={onPressHandleRemoveFavorites}
                props={item}
              />
            </View>
          ))}
        </ScrollView>
        
      </View>
      {/* <View
        style={{ position: "absolute", bottom: 0, paddingBottom: 16, backgroundColor: "#fff" }}
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

export default AllExpertScreen;
