import React, { useContext } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { IsFavoritesContext } from "../../../utils/IsFavoritesContext";

const KnowleadgeCard = ({ props, onPressHandleRemoveFavorites }) => {
  const { handleSetIsFavorites, handleSetIdItem } =
    useContext(IsFavoritesContext);

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.info}>
        <View
          style={{
            width: "100%",
            height: 60,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: "16" }}>
            {props.title}
          </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <View>
            <Text style={{ fontSize: "12", color: "#6B7280" }}>
              {props.user.username}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

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
  },
  info: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 8,
    flex: 1,
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
export default KnowleadgeCard;
