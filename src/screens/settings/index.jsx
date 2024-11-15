import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import NavigationBar from "../../components/NavigationBar";
import IconsAntDesign from "react-native-vector-icons/AntDesign";
import ToogleButton from "../../components/ToogleButton";

const SettingScreen = ({ navigation }) => {
  const [isNotification, setIsNotification] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleNotification = (isItem) => {
    setIsNotification(isItem);
    console.log(isNotification);
  };
  const toggleDarkMode = (isItem) => {
    setIsDarkMode(isItem);
    console.log(isDarkMode);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
      <View
        style={{
          width: "100%",
          height: 294,
          backgroundColor: "#1C2A3A",
          borderBottomLeftRadius: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            alignContent: "center",
            marginTop: 56,
            marginLeft: 20,
          }}
        >
          <IconIonicons
            name="settings-sharp"
            size={30}
            color="white"
            style={{ marginTop: 8 }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: 700,
              marginTop: 20,
            }}
          >
            Settings
          </Text>
        </View>
      </View>
      <View style={styles.contentsContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 34,
            marginLeft: 29,
          }}
        >
          <Image
            style={{ width: 40, height: 40, borderRadius: 999 }}
            source={{
              uri: "https://uploaded.celebconfirmed.com/_f2dc7d7be7.jpg",
            }}
          />
          <Text style={{ fontSize: 16, fontWeight: 700, color: "#1C2A3A" }}>
            Daniel Martinez{" "}
          </Text>
        </View>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#E5E5E5" }}
        />
        <View
          style={{ flexDirection: "column", gap: 12, marginHorizontal: 29 }}
        >
          <Text style={{ fontSize: 18, fontWeight: 600, color: "#ADADAD" }}>
            Account Settings
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#1C2A3A" }}>
              Edit profile
            </Text>
            <IconsAntDesign name="right" size={12} color="#1C2A3A" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#1C2A3A" }}>
              Change password
            </Text>
            <IconsAntDesign name="right" size={12} color="#1C2A3A" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#1C2A3A" }}>
              Help and Support
            </Text>
            <IconsAntDesign name="plus" size={12} color="#1C2A3A" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 329,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#1C2A3A" }}>
              Push notifications
            </Text>
            <ToogleButton
              props={{
                isNotification: isNotification,
              }}
              toggleNotification={toggleNotification}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 329,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#1C2A3A" }}>
              Dark mode
            </Text>
            <ToogleButton
              props={{
                isDarkMode: isDarkMode,
              }}
              toggleDarkMode={toggleDarkMode}
            />
          </View>
        </View>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#E5E5E5" }}
        />
        <View
          style={{ flexDirection: "column", gap: 12, marginHorizontal: 29 }}
        >
          <Text style={{ fontSize: 18, fontWeight: 600, color: "#ADADAD" }}>
            More
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#1C2A3A" }}>
              About us
            </Text>
            <IconsAntDesign name="right" size={12} color="#1C2A3A" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#1C2A3A" }}>
              Privacy policy
            </Text>
            <IconsAntDesign name="right" size={12} color="#1C2A3A" />
          </View>
          {/*  */}
        </View>
      </View>
      {/* <View
        style={{ position: "absolute", bottom: 0, paddingBottom: 16, backgroundColor: "#fff" }}
      >
        <NavigationBar navigation={navigation} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  contentsContainer: {
    position: "absolute",
    top: 141,
    marginHorizontal: 12,
    width: 'auto',
    backgroundColor: "white",
    gap: 24,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: "100%",
  },
});

export default SettingScreen;
