import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './../screens/Home';
import { Details } from './../screens/Details';
import SignUpScreen from "../screens/Sign In, Sign up, Create Profile/SignUpScreen";
import FirstScreens from './../screens/Onboarding/First_Screens';
import OnboardingScreen from './../screens/Onboarding/OnboardingScreen';
import LoginScreen from './../screens/Sign In, Sign up, Create Profile/LoginScreen';
import ProfileDetails from './../screens/Sign In, Sign up, Create Profile/ProfileDetails';
import ForgetPasswordScreen from './../screens/Forget Password/ForgetPasswordScreen';
import VerifyCodeScreen from "../screens/Forget Password/VerifyCodeScreen";
import ResetPasswordScreen from "../screens/Forget Password/ResetPasswordScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Details" component={Details} />
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
    </Stack.Navigator>
  );
}

export default StackNavigator;


