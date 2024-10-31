import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import IconsFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconsAntDesign from "react-native-vector-icons/AntDesign";
import IconsIonicons from "react-native-vector-icons/Ionicons";
import IconsFeather from "react-native-vector-icons/Feather";
import IconsSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import IconsMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NavigationBar from "../../components/NavigationBar";
import { TouchableOpacity } from "react-native";
import Button from "../../components/button";
const ProfileScreen = ({ navigation }) => {
  const [isLogout, setIsLogout] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontWeight: 700,
            alignItems: "center",
            alignSelf: "center",
            fontSize: 20,
            marginBottom: 32,
            color: "#1F2A37",
          }}
        >
          Profile
        </Text>
        <View
          style={{
            width: 168,
            height: 168,
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/b6/5e/ed/b65eed9bc16a890d4105fe285dbd81b1.jpg",
            }}
            style={{ width: 168, height: 168, borderRadius: "100%" }}
          />
        </View>
        <Text
          style={{
            fontWeight: 700,
            alignItems: "center",
            alignSelf: "center",
            fontSize: 16,
            marginTop: 16,
            marginBottom: 4,
            color: "#1F2A37",
          }}
        >
          name
        </Text>
        <Text
          style={{
            fontWeight: 400,
            alignItems: "center",
            alignSelf: "center",
            fontSize: 14,
            color: "#6B7280",
          }}
        >
          +12345678
        </Text>
      </View>
      <View style={styles.ProfileItem}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            alignSelf: "flex-start",
            gap: 16,
          }}
        >
          <IconsMaterialCommunityIcons
            name="account-edit-outline"
            size={24}
            color="#1C2A3A"
          />
          <Text style={{ fontSize: 18, color: "#6B7280", fontWeight: "300" }}>
            Edit Profile
          </Text>
        </View>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#E5E7EB" }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            alignSelf: "flex-start",
            gap: 16,
          }}
        >
          <IconsAntDesign name="hearto" size={24} color="#1C2A3A" />
          <Text style={{ fontSize: 18, color: "#6B7280", fontWeight: "300" }}>
            Favorite
          </Text>
        </View>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#E5E7EB" }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            alignSelf: "flex-start",
            gap: 16,
          }}
        >
          <IconsIonicons
            name="notifications-outline"
            size={24}
            color="#1C2A3A"
          />
          <Text style={{ fontSize: 18, color: "#6B7280", fontWeight: "300" }}>
            Notifications
          </Text>
        </View>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#E5E7EB" }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            alignSelf: "flex-start",
            gap: 16,
          }}
        >
          <IconsIonicons name="settings-outline" size={24} color="#1C2A3A" />
          <Text style={{ fontSize: 18, color: "#6B7280", fontWeight: "300" }}>
            Settings
          </Text>
        </View>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#E5E7EB" }}
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            alignSelf: "flex-start",
            gap: 16,
          }}
          onPress={() => navigation.navigate("HelpAndSupport")}
        >
          <IconsFeather name="message-square" size={24} color="#1C2A3A" />
          <Text style={{ fontSize: 18, color: "#6B7280", fontWeight: "300" }}>
            Help and Support
          </Text>
        </TouchableOpacity>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#E5E7EB" }}
        />
        <View
        >
          <TouchableOpacity onPress={() => navigation.navigate("TermAndCondition")} style={{ flexDirection: "row", alignItems: "flex-start", alignSelf: "flex-start", gap: 16 }}>
          <IconsAntDesign name="Safety" size={24} color="#1C2A3A" />
          <Text style={{ fontSize: 18, color: "#6B7280", fontWeight: "300" }}>
            Terms and Conditions
          </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#E5E7EB" }}
        />
        <View
          style={{
          }}
        >
          <TouchableOpacity onPress={() => setIsLogout(true)} style={{ flexDirection: "row", alignItems: "flex-start", alignSelf: "flex-start", gap: 16 }}>
            <IconsSimpleLineIcons name="logout" size={24} color="#1C2A3A" />
            <Text style={{ fontSize: 18, color: "#6B7280", fontWeight: "300" }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          paddingBottom: 16,
        }}
      >
        <NavigationBar navigation={navigation} />
      </View>
      {isLogout && <View style={styles.logoutContainer}>
            <View style={[styles.LogoutCheck]}>
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
                    Logout
                  </Text>
                  <View style={{ height: 1, backgroundColor: "#E5E7EB", width: "85%" }} />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: 400, color: "#6B7280" }}>Are you sure you want to log out?</Text>
                  </View>
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
                        title: "Cancle",
                      }}
                      handleConfirm={() => setIsLogout(false)}
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
                        navigationPath: "HomeScreen",
                        title: "Yes, Logout",
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
        </View>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    gap: 16,
    backgroundColor: "#fff",
  },
  ProfileItem: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 24,
    gap: 12,
    marginTop: 16,
  },
  logoutContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
  },
  LogoutCheck: {
    flexDirection: "column",
    justifyContent: "center",
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    height: 200,
    width: 390,
    backgroundColor: "#fff",
    gap: 24,
    }
});

export default ProfileScreen;
