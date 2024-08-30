import React, { Component, useEffect, useRef } from "react";
import { Text, StyleSheet, View, FlatList, Animated } from "react-native";
import slide from "../constains/slide";
import OnboardingItem from "./onboarding_item";

export default class OnboardingScreen{
    
    render() {
      const scrollX = useRef(new Animated.Value(0)).current;
    return (
      <View style={styles.container}>
        <FlatList
          data={slide}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item)=>item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class onboarding extends PureComponent {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
