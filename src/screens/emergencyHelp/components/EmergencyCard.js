import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/AntDesign";
export default function EmergencyCard({ props }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image style={styles.image} source={{ uri: `${props.imgUrl}` }} />
      </View>
      <View style={styles.info}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: "16" }}>
            {props.name}
          </Text>
          {props.isFavorite && (
            <TouchableOpacity
              onPress={() => onPressHandleRemoveFavorites(props.id)}
            >
              <IconAntDesign name="heart" size={20} color="#4B5563" />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.lineStyle} />
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Icons name="phone" size={20} color="#4B5563" />
          <Text style={{ fontSize: "14", color: "#4B5563" }}>
            {props.phone}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <View style={{ flex: 1 }}></View>
          <View>
            <Text style={{ fontSize: "15", color: "#D21F00", margin: 5 }}>
              Call now
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 12,
    padding: 12,
    width: "auto",
    height: 133,
    backgroundColor: "#fff",
    shadowColor: "#000000", // Shadow color
    borderColor: "black", // Border color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    elevation: 15, // Shadow effect on Android
    borderRadius: 12,
    margin : 10
  },
  info: {
    flexDirection: "column",
    gap: 8,
    flex: 1
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
    // marginVertical: 8
  },
});
