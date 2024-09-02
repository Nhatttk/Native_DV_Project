import React from "react";
import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { OtpInput } from "react-native-otp-entry";
const VerifyCodeScreen = ({ navigation }) => {
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
          Verify Code
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
          Enter the the code we just sent you on your registered Email
        </Text>

        <View style={{ marginBottom: 32, alignItems: "center" }}>
          <OtpInput numberOfDigits={5} />
        </View>

        <TouchableOpacity style={styles.btn_submit} onPress={()=> {navigation.navigate("ResetPasswordScreen");}}>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "medium",
            }}
          >
            Verify
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 32,
          }}
        >
          <Text style={{ fontFamily: "Inter", color: "#6B7280" }}>
            Didn’t get the Code?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgetPasswordScreen")}
          >
            <Text
              style={{
                fontFamily: "Inter",
                color: "#1C64F2", // Màu cho link "Sign up"
                fontWeight: "bold",
              }}
            >
              Resend
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  mail_inpput: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    width: "100%",
    marginBottom: 32,
  },
  btn_submit: {
    backgroundColor: "#1C2A3A",
    borderRadius: 42,
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
});

export default VerifyCodeScreen;
