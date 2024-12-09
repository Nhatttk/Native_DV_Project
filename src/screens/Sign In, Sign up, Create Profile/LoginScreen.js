import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from "react-native-vector-icons/Ionicons";
import { getUserDataFromToken, loginApi } from "../../api/apis";
import LoadingPopup from "../../components/loadingPopup";
import { saveLoginData } from "../../api/storageData";

const LoginScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    username: "nhattk",
    password: "ngominhnhat123",
  });


  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const checkLogin = async () => {
    console.log("Logging in...");
    setLoading(true)
    try {
      const responseData = await loginApi(formData.username, formData.password); // Gọi hàm API login thực tế
      console.log(responseData.access)
      if (responseData.access != null) {
        const userData = await getUserDataFromToken(responseData.access)
        await saveLoginData(userData)
        setLoading(false)
        navigation.navigate("TabNavigator");
      } else {
        console.log("Login failed, no access token found.");
        setLoading(false)
        setError(true)
      }
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingPopup/>}
      {error && Alert.alert(
      'Notification', // Tiêu đề
      'User name or password incorrect', // Nội dung
      [
        { text: 'OK', onPress: () => setError(false) },
      ],
      { cancelable: false } // Không cho phép đóng Alert bằng cách nhấn ra ngoài
    )}
      <View style={styles.title}>
        <Image
          style={styles.icon}
          source={require("../../assets/img/logogpt-removebg-preview.png")}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "Inter",
            marginBottom: 8,
          }}
        >
          Hi, Welcome back !
        </Text>
        <Text style={{ fontSize: 14, fontFamily: "Inter", color: "#6B7280" }}>
          Hope you're doing fine.
        </Text>
      </View>

      <View style={styles.mail_input}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="#9CA3AF"
          style={{ paddingRight: 8 }}
        />
        <TextInput
          placeholder="User Name"
          importantForAutofill="yes"
          value={formData.username}
          onChangeText={(value) => handleInputChange("username", value)}
        />
      </View>

      <View style={styles.pass_input}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#9CA3AF"
          style={{ paddingRight: 8 }}
        />
        <TextInput placeholder="Password" secureTextEntry 
        importantForAutofill="yes"
        value={formData.password}
        onChangeText={(value) => handleInputChange("password", value)}/>
      </View>

      <TouchableOpacity
        style={styles.btn_signin}
        onPress={() => checkLogin()}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Inter" }}>
          Sign In
        </Text>
      </TouchableOpacity>

      <View style={styles.line}>
        <View style={styles.line_item} />
        <Text style={styles.text}>OR</Text>
        <View style={styles.line_item} />
      </View>

      <TouchableOpacity style={styles.btn_google}>
        <Image
          source={require("../../assets/img/Google__G__logo.svg.webp")} // Đường dẫn đến logo Google
          style={styles.social_logo}
        />
        <Text
          style={{
            color: "#1C2A3A",
            fontSize: 14,
            fontFamily: "Inter",
            textAlign: "center",
          }}
        >
          Sign In With Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn_facebook}>
        <Image
          source={require("../../assets/img/Facebook_Logo_(2019).png.webp")} // Đường dẫn đến logo Google
          style={styles.social_logo}
        />
        <Text
          style={{
            color: "#1C2A3A",
            fontSize: 14,
            fontFamily: "Inter",
            textAlign: "center",
          }}
        >
          Sign In With Facebook
        </Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        {/* Forgot Password */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgetPasswordScreen");
          }}
        >
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don’t have an account yet? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={styles.signUpLink}>Sign up</Text>
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
  icon: {
    marginBottom: 32,
    width: 125,
    height: 85,
    borderRadius: 180,
  },
  title: {
    display: "flex",
    alignItems: "center",
    padding: 32,
    // justifyContent: 'center'
  },
  mail_input: {
    marginBottom: 23,
    padding: 16,
    backgroundColor: "#F9FAFB",
    borderRadius: 18,
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    borderColor: "#D1D5DB",
    borderWidth: 1,
  },
  pass_input: {
    marginBottom: 23,
    padding: 16,
    backgroundColor: "#F9FAFB",
    borderRadius: 18,
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    borderColor: "#D1D5DB",
    borderWidth: 1,
  },
  btn_signin: {
    padding: 20,
    backgroundColor: "#1C2A3A",
    marginHorizontal: 24,
    borderRadius: 54,
    alignItems: "center",
  },

  line_item: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 24,
  },
  text: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "#888",
  },
  btn_google: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 24,
    alignItems: "center",
    borderColor: "#E5E7EB",
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  social_logo: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  btn_facebook: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 24,
    alignItems: "center",
    borderColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "center",
  },
  footerContainer: {
    alignItems: "center",
    marginTop: 23,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontFamily: "Inter",
    color: "#1C64F2",
    marginVertical: 10,
    marginBottom: 23,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signUpText: {
    fontFamily: "Inter",
    color: "#6B7280", // Màu cho text "Don’t have an account yet?"
  },
  signUpLink: {
    fontFamily: "Inter",
    color: "#1C64F2", // Màu cho link "Sign up"
    fontWeight: "bold",
  },
});

export default LoginScreen;