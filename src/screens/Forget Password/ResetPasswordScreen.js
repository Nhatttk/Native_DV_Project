import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
const ResetPasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.back_btn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color="#292D32"
          style={{ paddingRight: 10 }}
        />
      </TouchableOpacity>

      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/img/logogpt-removebg-preview.png")}
        />
        <Text
          style={{
            fontFamily: "Poppins",
            fontWeight: "regular",
            fontSize: 20,
            color: "#6B7280",
          }}
        >
          Breaking Shadows
        </Text>
      </View>

      <View style={styles.input_form}>
        <Text
          style={{
            fontFamily: "Inter",
            fontWeight: "bold",
            fontSize: 20,
            color: "#1C2A3A",
            marginBottom: 8,
          }}
        >
          Create new password
        </Text>
        <Text
          style={{
            fontFamily: "Inter",
            fontWeight: "regular",
            fontSize: 14,
            color: "#6B7280",
            marginBottom: 32,
            paddingHorizontal: 24,
            textAlign: "center",
          }}
        >
          Your new password must be different form previously used password
        </Text>

        <View style={styles.password}>
          <Fontisto
            name="locked"
            size={20}
            color="#9CA3AF"
            style={{ paddingRight: 8 }}
          />
          <TextInput placeholder="Password" secureTextEntry />
        </View>
        <View style={styles.password}>
          <Fontisto
            name="locked"
            size={20}
            color="#9CA3AF"
            style={{ paddingRight: 8 }}
          />
          <TextInput placeholder="Confirm Password" secureTextEntry />
        </View>

        <TouchableOpacity
          style={styles.btn_submit}
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "medium",
            }}
          >
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  back_btn: {
    marginVertical: 32,
    marginLeft: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 125,
    height: 85,
  },
  input_form: {
    alignItems: "center",
    marginHorizontal: 24,
  },
  password: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    width: "100%",
    marginBottom: 32,
    alignItems: 'center'
  },
  btn_submit: {
    backgroundColor: "#1C2A3A",
    borderRadius: 42,
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
  },
});

export default ResetPasswordScreen;
