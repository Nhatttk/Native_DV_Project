import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import IconOctions from "react-native-vector-icons/Octicons";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const NavigationBar = () => {
  const [gateState, setGateState] = useState({
    home: true,
    addfriend: false,
    sos: false,
    calendar: false,
    profile: false,
  });

  const navigation = useNavigation();
  const state = navigation.getState();
  const currentRouteName = state.routes[state.index].name;
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          //   padding: 24,
          width: 48,
          height: 48,
          borderRadius: "100%",
          backgroundColor: gateState.home ? "#F3F4F6" : "#ffff",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
            setGateState({
              home: true,
              addfriend: false,
              sos: false,
              calendar: false,
              profile: false,
            });
          }}
        >
          <Image
            source={require("../assets/images/homeImage.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          // padding: 12,
          width: 48,
          height: 48,
          borderRadius: "100%",
          backgroundColor: gateState.addfriend ? "#F3F4F6" : "#ffff",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddFriend");
            setGateState({
              home: false,
              addfriend: true,
              sos: false,
              calendar: false,
              profile: false,
            });
          }}
        >
          <IconOctions
            name="person-add"
            size={24}
            color={gateState.addfriend ? "#374151" : "#9CA3AF"}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.sosButton
        ]}
      >
        <TouchableOpacity style={[styles.sosButtonTouchable]}
             onPress={() => {
                navigation.navigate("");
                setGateState({
                  home: false,
                  addfriend: false,
                  sos: true,
                  calendar: false,
                  profile: false,
                });
              }}
        >
          <Image
            source={require("../assets/images/imageSos.png")}
            style={{ width: 52, height: 52 }}
          />
        </TouchableOpacity>
      </View>
      <View
         style={{
            alignItems: "center",
            justifyContent: "center",
            // padding: 12,
            width: 48,
            height: 48,
            borderRadius: "100%",
            backgroundColor: gateState.calendar ? "#F3F4F6" : "#ffff",
          }}
      >
        <TouchableOpacity
             onPress={() => {
                navigation.navigate("bookhistory");
                setGateState({
                  home: false,
                  addfriend: false,
                  sos: false,
                  calendar: true,
                  profile: false,
                });
              }}
        >
          <IconMaterial
            name="calendar-month-outline"
            size={24}
            color={gateState.calendar ? "#374151" : "#9CA3AF"}
          />
        </TouchableOpacity>
      </View>
      <View
         style={{
            alignItems: "center",
            justifyContent: "center",
            // padding: 12,
            width: 48,
            height: 48,
            borderRadius: "100%",
            backgroundColor: gateState.profile ? "#F3F4F6" : "#ffff",
          }}
      >
        <TouchableOpacity
             onPress={() => {
                navigation.navigate("");
                setGateState({
                  home: false,
                  addfriend: false,
                  sos: false,
                  calendar: false,
                  profile: true,
                });
              }}
        >
          <IconOctions name="person-fill" size={24} color={gateState.profile ? "#374151" : "#9CA3AF"}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80,
    paddingHorizontal: 48,
  },
  sosButton: {
    // backgroundColor: "red",
    borderRadius: 50,
    padding: 10,
  },
});

export default NavigationBar;
