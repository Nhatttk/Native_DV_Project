import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/AntDesign";
import { categoriesData } from "../../utils/categoriesData";
import CategoryCard from "./_components/categoryCard";
import { NearbySupportCentersData } from "../../utils/nearbySupportCentersData";
import NearbySupportCard from "./_components/nearbySupportCard";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            paddingHorizontal: 24,
          }}
        >
          <View style={{ flexDirection: "column", gap: 8 }}>
            <View>
              <Text style={{ fontSize: 14, color: "#374151" }}>Location</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon name="location-pin" size={20} color="#374151" />
              <Text
                style={{
                  fontWeight: "semibold",
                  fontSize: 14,
                  color: "#374151",
                }}
              >
                Seattle, Usa
              </Text>
              <Icon name="chevron-down" size={20} />
            </View>
          </View>
          <View style={styles.iconWrapper}>
            <Icons name="bells" size={27} />
            <View style={styles.redDot} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 24,
            paddingVertical: 14,
            width: "100%",
            // height: 163,
            borderRadius: 10,
            gap: 10,
          }}
        >
          <View style={styles.inputContainer}>
            <Icons name="search1" size={24} style={styles.icon} />
            <TextInput style={styles.input} placeholder=" Search ..." />
          </View>
          <ImageBackground
            source={require("../../assets/img/womanhoping.jpg")}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 163,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "60%", gap: 13, paddingLeft: 16 }}>
              <Text
                style={{
                  color: "white",
                  textShadowColor: "black", // Black border effect using shadow
                  textShadowOffset: { width: -1, height: 2 },
                  textShadowRadius: 1,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Welcome
              </Text>
              <Text
                style={{
                  fontSize: "12",
                  color: "white",
                  textShadowColor: "black",
                  textShadowOffset: { width: -1, height: 2 },
                  textShadowRadius: 1,
                }}
              >
                Welcome to the app dedicated to combation domestic violence
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ paddingHorizontal: 24, gap: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
              Categories
            </Text>
            <Text style={{ fontSize: 14, color: "#6B7280" }}>See All</Text>
          </View>
          <View style={styles.categoriesContainer}>
            {categoriesData.map((item) => {
              return (
                <TouchableOpacity key={item.id} style={styles.category} onPress={() => navigation.navigate(item.navigationPath)}>
                  <CategoryCard props={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={{ paddingHorizontal: 24, paddingVertical: 14, gap: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
              Nearby Support Centers
            </Text>
            <Text style={{ fontSize: 14, color: "#6B7280" }}>See All</Text>
          </View>
          <View style={{ width: "100%" }}>
            <NearbySupportCard data={NearbySupportCentersData} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  iconWrapper: {
    position: "relative",
    width: 27,
    height: 27,
    // backgroundColor: "#ffff"
  },
  redDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "red",
    position: "absolute",
    top: -2,
    right: -2,
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
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  category: {
    alignItems: "center",
    justifyContent: "center",
    width: 66,
    height: 84,
  },
});

export default HomeScreen;
