import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./../screens/Home/Home";
import { Details } from "./../screens/Details";
import SignUpScreen from "../screens/Sign In, Sign up, Create Profile/SignUpScreen";
import FirstScreens from "./../screens/Onboarding/First_Screens";
import OnboardingScreen from "./../screens/Onboarding/OnboardingScreen";
import LoginScreen from "./../screens/Sign In, Sign up, Create Profile/LoginScreen";
import ProfileDetails from "./../screens/Sign In, Sign up, Create Profile/ProfileDetails";
import ForgetPasswordScreen from "./../screens/Forget Password/ForgetPasswordScreen";
import VerifyCodeScreen from "../screens/Forget Password/VerifyCodeScreen";
import ResetPasswordScreen from "../screens/Forget Password/ResetPasswordScreen";
import AllFriends from "../screens/AllFriends/AllFriends";
import PsychiatristDetails from "../screens/psychiatristDetails/Psychiatrist_Details";
import BookApointmentConfirm from "../screens/bookApointmentConfirm/BookApointmentConfirm";
import BookHistory from "../screens/bookHistory";
import FavoritesScreen from "../screens/favorites";
import AddFriend from "../screens/Add Friend/AddFriend";
import Map from "../screens/Map/Map";
import ProfileScreen from "../screens/profile";
import TermAndCondition from "../screens/profile/TermAndCondition";
import HelpAndSupport from "../screens/profile/HelpAndSupport";

import IconOctions from "react-native-vector-icons/Octicons";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";
import { Image, Text, View } from "react-native";
import SosScreen from "../SosScreen";
import BlurComponent from "../components/blurComponent";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {
      paddingHorizontal: 24,
      backgroundColor: "#ffff",
    } }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  borderRadius: 24,
                  // backgroundColor: focused ? "#F3F4F6": "#fff",
                  backgroundColor: "transparent",
                  textAlign: "center",
                  width: 48,
                  height: 48,
                  marginTop: 14
                }}
              >
                <IconFeather
                  name="home"
                  size={24}
                  color={focused ? "#4B5563" : "#9CA3AF"}
                  style={{
                  }}
                />
              </View>
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
              style={{
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 24,
                backgroundColor: focused ? "#F3F4F6": "#fff",
                textAlign: "center",
                width: 48,
                height: 48,
                marginTop: 14
              }}
            >
              <IconOctions
                name="person-add"
                size={24}
                color={focused ? "#4B5563" : "#9CA3AF"}
              />
            </View>
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="Details"
        component={Details}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("../assets/images/imageSos.png")}
                style={{ width: 48, height: 48, marginTop: 14 }}
              />
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="SosScreen"
        component={Details}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
              style={{
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 24,
                backgroundColor: focused ? "#F3F4F6": "#fff",
                textAlign: "center",
                width: 48,
                height: 48,
                marginTop: 14
              }}
            >
              <IconMaterial
                name="calendar-month-outline"
                size={24}
                color={focused ? "#4B5563" : "#9CA3AF"}
              />
            </View>
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="Calendar"
        component={BookApointmentConfirm}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
              style={{
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 24,
                backgroundColor: focused ? "#F3F4F6": "#fff",
                textAlign: "center",
                width: 48,
                height: 48,
                marginTop: 14
              }}
            >
              <IconOctions
                name="person-fill"
                size={24}
                color={focused ? "#4B5563" : "#9CA3AF"}
              />
            </View>
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstScreens"
        component={FirstScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddFriend"
        component={AddFriend}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyCodeScreen"
        component={VerifyCodeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetails}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="AllFriends"
        component={AllFriends}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="PsychiatristDetails"
        component={PsychiatristDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="bookAppointmentConfirm"
        component={BookApointmentConfirm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="bookhistory"
        component={BookHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="favoritesScreen"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermAndCondition"
        component={TermAndCondition}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HelpAndSupport"
        component={HelpAndSupport}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SosScreen"
        component={SosScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BlurComponent"
        component={BlurComponent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
