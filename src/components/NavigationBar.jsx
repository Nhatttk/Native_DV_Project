import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import IconOctions from "react-native-vector-icons/Octicons";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import { useRoute } from "@react-navigation/native";
import IconFeather from "react-native-vector-icons/Feather";

const NavigationBar = ({ navigation }) => {
  // const [gateState, setGateState] = useState({
  //   home: true,
  //   addfriend: false,
  //   sos: false,
  //   calendar: false,
  //   profile: false,
  // });
  // const route = useRoute();
  // const [currentRouteName, setCurrentRouteName] = useState(route.name);


  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("state", (e) => {
  //     setCurrentRouteName(navigation.getState().routes[navigation.getState().index].name);
  //   });

  //   return unsubscribe;
  // }, [navigation]);
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 48,
          height: 48,
          borderRadius: "100%",
          backgroundColor: "#ffff",
          // backgroundColor: currentRouteName === "HomeScreen" ? "#F3F4F6" : "#ffff",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TabNavigator', { screen: 'HomeScreen' });

          }}
        >
          <IconFeather name="home" size={24} color={"#9CA3AF"} />
          {/* <IconFeather name="home" size={24} color={currentRouteName === "HomeScreen" ? "#374151" : "#9CA3AF"} /> */}
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
          backgroundColor: "#ffff",
          // backgroundColor: currentRouteName === "AddFriend" ? "#F3F4F6" : "#ffff",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TabNavigator', { screen: 'AddFriend' });
          }}
        >
          <IconOctions
            name="person-add"
            size={24}
            color={"#9CA3AF"}
            // color={currentRouteName === "AddFriend" ? "#374151" : "#9CA3AF"}
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
                navigation.navigate('TabNavigator', { screen: 'SosScreen' });
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
            backgroundColor: "#ffff",
            // backgroundColor: currentRouteName === "bookhistory" ? "#F3F4F6" : "#ffff",
          }}
      >
        <TouchableOpacity
             onPress={() => {
                navigation.navigate('TabNavigator', { screen: 'bookhistory' });
              }}
        >
          <IconMaterial
            name="calendar-month-outline"
            size={24}
            color={"#9CA3AF"}
            // color={currentRouteName === "bookhistory" ? "#374151" : "#9CA3AF"}
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
            backgroundColor: "#ffff",
            // backgroundColor: currentRouteName === "ProfileScreen" ? "#F3F4F6" : "#ffff",
          }}
      >
        <TouchableOpacity
             onPress={() => {
                navigation.navigate('TabNavigator', { screen: 'ProfileScreen' });
              }}
        >
          <IconOctions name="person-fill" size={24} color={ "#9CA3AF"}/>
          {/* <IconOctions name="person-fill" size={24} color={currentRouteName === "ProfileScreen" ? "#374151" : "#9CA3AF"}/> */}
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
    height: "auto",
    paddingHorizontal: 48,
    backgroundColor: "#ffff",
  },
  sosButton: {
    // backgroundColor: "red",
    borderRadius: 50,
    padding: 10,
  },
});

export default NavigationBar;
