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
            padding: 16,
          }}
        >
          <View style={{ flexDirection: "column", gap: 8 }}>
            <View>
              <Text style={{ fontSize: 16, color: "#6B7280" }}>Location</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon name="location-pin" size={20} />
              <Text style={{ fontWeight: "bold" }}>Seattle, Usa</Text>
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
            padding: 16,
            width: "100%",
            height: 250,
            borderRadius: 10,
            gap: 10,
          }}
        >
          <View style={styles.inputContainer}>
            <Icons name="search1" size={20} style={styles.icon}/>
            <TextInput style={styles.input} placeholder=" Search" />
          </View>
          <ImageBackground
            source={require("../../assets/img/womanstrength.png")}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "60%", gap: 12, paddingLeft: 16 }}>
              <Text
                style={{ color: "black", fontSize: 24, fontWeight: "bold" }}
              >
                Welcome
              </Text>
              <Text style={{ fontSize: "15" }}>
                Welcome to the app dedicated to combation domestic violence
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ padding: 16, gap: 10, marginTop: 24 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 16, color: "black" }}>Categories</Text>
          <Text style={{ fontSize: 12, color: "#6B7280", textTransform: "uppercase" }}>See more</Text>
          </View>
          <View style={styles.categoriesContainer}>
          {
            categoriesData.map((item) => {
              return (
                <TouchableOpacity  key={item.id} style={styles.category}>
                  <CategoryCard props={item} />
                </TouchableOpacity>
              )
            })
          }
          </View>
        </View>
        <View style={{ paddingHorizontal: 16, gap: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 16, color: "black" }}>Nearby Support Centers</Text>
          <Text style={{ fontSize: 12, color: "#6B7280", textTransform: "uppercase" }}>See more</Text>
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
  iconWrapper: {
    position: "relative",
    width: 27,
    height: 27,
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
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  icon: {
    marginRight: 8, // Space between icon and input
  },
  input: {
    flex: 1, // Takes up the rest of the space
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 100,
    marginBottom: 20,
  }
});

export default HomeScreen;
