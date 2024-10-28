import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icons from "react-native-vector-icons/EvilIcons";
import Button from "../../components/button";

const BookHistoryCard = ({ props, cancleHandle, rescheduleHandle }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <Text style={{ fontWeight: "bold", fontSize: "14", textAlign: "left" }}>
          {props.time}
        </Text>
      </View>
      <View style={styles.lineStyle} />
      <View style={styles.infoContainer}>
        <View style={styles.avatar}>
          <Image style={styles.image} source={{ uri: props.imgUrl }} />
        </View>
        <View style={styles.info}>
          <Text style={{ fontWeight: "bold", fontSize: "16" }}>
            {props.name}
          </Text>
          <Text
            style={{ fontSize: "14", fontWeight: "semibold", color: "#4B5563" }}
          >
            {props.speciality}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Icons name="location" size={20} color="#4B5563" />
            <Text style={{ fontSize: "14", color: "#4B5563" }}>
              {props.address}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.lineStyle} />
      <View style={styles.buttongroup}>
        <View style={{ width: "45%" }}>
          <Button
            props={{
              navigation: props.navigation,
              navigationPath: "HomeScreen",
              title: "Cancle",
            }}
            customStyle={{
              backgroundColor: "#E5E7EB",
              height: 40,
            }}
            textStyles={{ color: "#1C2A3A" }}
          />
        </View>
        <View style={{ width: "45%" }}>
          <Button
            props={{
              navigation: props.navigation,
              navigationPath: "HomeScreen",
              title: "Reschedule",
            }}
            customStyle={{
              height: 40,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    borderRadius: 12,
    padding: 16,
    width: 342,
    height: 247,
    backgroundColor: "#fff",
    shadowColor: "#000000", // Shadow color
    borderColor: "black", // Border color
    shadowOffset: { width: 0, height: 8 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    elevation: 15, // Shadow effect on Android
    borderRadius: 12,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  info: {
    flexDirection: "column",
    gap: 8,
  },
  avatar: {
    height: 109,
    width: 109,
    borderRadius: 12,
  },
  image: {
    width: 109,
    height: 109,
    borderRadius: 12,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#E5E7EB",
    width: "100%",
    // marginVertical: 8
  },
  buttongroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
});

export default BookHistoryCard;
