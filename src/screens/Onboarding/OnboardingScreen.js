import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
// import { hp, wp } from "../helpers/common";
import { LinearGradient } from "expo-linear-gradient";
// import Animated, { FadeInDown } from "react-native-reanimated";
// import { theme } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

import { IntroductionData } from "../../utils/introductionData";
import IntroCard from "../../components/IntroCard";
import LoginScreen from "./../Sign In, Sign up, Create Profile/LoginScreen";
import { useSwipe } from "../../hooks/useSwipe";
import Animated, {
  FadeInDown,
  FadeOutUp,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated"; // Animation imports

const OnboardingScreen = ({ navigation }) => {
  const [introData, setIntroData] = React.useState(0);
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);
  // Shared value for animating the dots
  const scale = useSharedValue(1);
  function onSwipeLeft() {
    if (introData < 2) {
      setIntroData(introData + 1);
    }
    console.log("SWIPE_LEFT");
  }

  function onSwipeRight() {
    if (introData > 0) {
      setIntroData(introData - 1);
    }
    console.log("SWIPE_RIGHT");
  }
  const nextHandle = () => {
    if (introData < 2) {
      setIntroData(introData + 1);
    } else {
      navigation.navigate("LoginScreen");
    }
  };
  const skipHandle = () => {
    setIntroData(2);
    navigation.navigate("LoginScreen");
  };
  // const navigation = useNavigation();
  // Animate the active dot by scaling it
  const animatedDotStyle = (index) => {
    return useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: withTiming(introData === index ? 1.5 : 1), // Enlarge active dot
          },
        ],
        opacity: withTiming(introData === index ? 1 : 0.5), // Dim inactive dots
      };
    });
  };

  return (
    <View
      style={styles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* <Animated.View style={styles.introCardContainer}>
        <IntroCard props={IntroductionData[introData]} />
      </Animated.View> */}
      <Animated.View entering={FadeInDown} exiting={FadeOutUp} style={styles.introCardContainer}>
        <IntroCard props={IntroductionData[introData]} />
      </Animated.View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton} onPress={nextHandle}>
          <Animated.Text style={styles.buttonText}>Next</Animated.Text>
        </TouchableOpacity>
        {/* <View style={styles.dotContainer}>
            <View style={[styles.dot, introData === 0 && styles.activeDot]}></View>
            <View style={[styles.dot, introData === 1 && styles.activeDot]}></View>
            <View style={[styles.dot, introData === 2 && styles.activeDot]}></View>
        </View> */}
        <View style={styles.dotContainer}>
          {[0, 1, 2].map((index) => (
            <Animated.View
              key={index}
              style={[styles.dot, animatedDotStyle(index)]}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.buttonSkip} onPress={skipHandle}>
          <Text style={styles.textskip}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen height
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  introCardContainer: {
    flex: 4, // Take 4/5 of the height
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1, // Take 1/5 of the height
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 24,
  },
  startButton: {
    width: '100%',  // 80% of the parent container's width
    paddingVertical: 12,
    backgroundColor: '#1C2A3A',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',  // Shadow color
    shadowOffset: { width: 0, height: 2 },  // Shadow offset
    shadowOpacity: 0.25,  // Shadow opacity
    shadowRadius: 3.84,  // Shadow radius
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dotContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4, // Fully round corners
    backgroundColor: '#bdc3c7',
  },
  activeDot: {
    backgroundColor: '#34495e', // Active dot color
    width: 16,
  },
  buttonSkip: {
    flex: 1,
  },
  textskip: {
    textDecorationLine: 'underline',
    color: '#6B7280',
    fontSize: 20,
    textAlign: 'center',
  }
});


export default OnboardingScreen;
