import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   bgImage: {
//     width: wp(100),
//     height: hp(100),
//     position: "absolute",
//   },
//   gradient: {
//     width: wp(100),
//     height: hp(65),
//     bottom: 0,
//     position: "absolute",
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "flex-end",
//     marginBottom: 20,
//     gap: 14,
//   },
//   title: {
//     fontSize: hp(7),
//     color: theme.colors.neutral(0.9),
//     fontWeight: theme.frontWeights.bold,
//   },
//   punchLine: {
//     fontSize: hp(2),
//     fontWeight: theme.frontWeights.medium,
//     color: theme.colors.neutral(0.9),
//     marginBottom: 15,
//     letterSpacing: 1,
//   },
//   startButton: {
//     marginBottom: 50,
//     backgroundColor: theme.colors.neutral(0.9),
//     padding: 15,
//     paddingHorizontal: 90,
//     borderRadius: theme.radius.xl,
//     borderCurve: "continuous",
//   },
//   startText: {
//     color: theme.colors.white,
//     fontSize: hp(3),
//     fontWeight: theme.frontWeights.medium,
//     letterSpacing: 1,
//   },
});

export default HomeScreen;
