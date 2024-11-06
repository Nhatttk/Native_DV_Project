import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";

const ToogleButton = ({ props, toggleNotification, toggleDarkMode }) => {
  const [isOn, setIsOn] = React.useState(props.isNotification || props.isDarkMode);
  const handleToogle = () => {
    if (toggleNotification) {
      setIsOn(!props.isNotification);
      toggleNotification(!props.isNotification);
    } else if (toggleDarkMode) {
      setIsOn(!props.isDarkMode);
      toggleDarkMode(!props.isDarkMode);
    }
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isOn ? "#1C2A3A" : "#EAEAEA",
          justifyContent: isOn ? "flex-end" : "flex-start",
        },
      ]}
    >
      <TouchableOpacity onPress={handleToogle}>
        <View
          style={{
            width: 22,
            height: 22,
            borderRadius: 999,
            backgroundColor: "white",
          }}
        ></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 56,
    height: 29,
    padding: 3,
    borderRadius: 20,
  },
});

export default ToogleButton;
