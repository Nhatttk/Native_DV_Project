import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const NotificationCard = ({ props }) => {
    const [timePassed, setTimePassed] = React.useState("text");

    useEffect(() => {
        const currentDate = new Date();
        const inputDate = new Date(props.date);
        const timeElapsed = (currentDate - inputDate) / (1000 * 60 * 60);
    
        if (timeElapsed < 24) {
          setTimePassed(`${Math.floor(timeElapsed)}h`);
        } else if (timeElapsed < 48) {
          setTimePassed('1d');
        } else if (timeElapsed < 72) {
          setTimePassed('2d');
        } else if (timeElapsed < 96) {
          setTimePassed('3d');
        } else if (timeElapsed < 120) {
          setTimePassed('4d');
        } else if (timeElapsed < 144) {
          setTimePassed('5d');
        } else if (timeElapsed < 168) {
          setTimePassed('6d');
        } else {
          setTimePassed('7d');
        }
      }, []); 
      console.log(timePassed);
  const getBackgroundColor = (type) => {
    switch (type) {
      case "success":
        return "#DEF7E5";
      case "remove":
        return "#FDE8E8";
      case "edit":
        return "#F3F4F6";
      default:
        return "transparent";
    }
  };
  const backgroundColor = getBackgroundColor(props.type);  

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 18,
          borderRadius: 999,
          backgroundColor
        }}
      >
        {props.type === "success" && (
          <Image
            source={require("../../../assets/images/calendar-tick.png")}
            style={{ width: 24, height: 24 }}
          />
        )}
        {props.type === "remove" && (
          <Image
            source={require("../../../assets/images/calendar-remove.png")}
            style={{ width: 24, height: 24 }}
          />
        )}
        {props.type === "edit" && (
          <Image
            source={require("../../../assets/images/calendar-edit.png")}
            style={{ width: 24, height: 24 }}
          />
        )}
      </View>
      <View style={styles.contentBox}>
      <View style={styles.titleBox}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#1C2A3A" }}>
          {props.title}
        </Text>
        <Text>{timePassed}</Text>
      </View>

        <View style={{ width: "100%", height: 45 }}>
          <Text style={{ fontSize: 14, color: "#6B7280" }}>
            {props.description}
          </Text>
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  contentBox: {
    flexDirection: "column",
    width: 266,
    gap: 4,
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
});

export default NotificationCard;
