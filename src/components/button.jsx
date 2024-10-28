import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";

const Button = ({ props, customStyle, handleConfirm, textStyles }) => {
  const handlePress = () => {
    if (props.navigation) {
      props.navigation.navigate(props.navigationPath);
    } else if (handleConfirm) {
      handleConfirm();
    }
  };
  return (
    <View>
      {/* <Button style={styles.button} title="Book Appointment" /> */}
      <TouchableOpacity
        style={[styles.button, customStyle]}
        onPress={handlePress}
      >
        <Text
          style={[styles.textstyle, textStyles]}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1C2A3A",
    borderRadius: 50,
    height: 48,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  textstyle: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default Button;