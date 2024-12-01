import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icons from "react-native-vector-icons/EvilIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { IsFavoritesContext } from "../../../utils/IsFavoritesContext";
import { IMAGE_URL } from "../../../api/URL/apiUrl";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half star (if >= 0.5)
  const emptyStars = 5 - fullStars - halfStar; // Empty stars
  // Render the stars
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      {/* Render full stars */}
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <IconFontAwesome
            key={`full-${index}`}
            name="star"
            size={20}
            color="#FEB052"
          />
        ))}
      {/* Render half star if applicable */}
      {halfStar === 1 && (
        <Icons name="star-half-empty" size={20} color="#FEB052" />
      )}
      {/* Render empty stars */}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <IconFontAwesome
            key={`empty-${index}`}
            name="star-o"
            size={20}
            color="#FEB052"
          />
        ))}
    </View>
  );
};
const FavoriteCard = ({ props, onPressHandleRemoveFavorites }) => {
  const { handleSetIsFavorites, handleSetIdItem } =
    useContext(IsFavoritesContext);

  const setCancleFavorites = (id) => {
    handleSetIsFavorites(true);
    handleSetIdItem(id);
  };

  const CancelFavorites = (id) => {
    setCancleFavorites(id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {/* <Image style={styles.image} source={{ uri: props.imgUrl }} /> */}
        <Image
          style={styles.image}
          source={{
            uri: props.imgUrl,
          }}
        />
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
        <Text
          style={{ fontSize: "14", fontWeight: "semibold", color: "#4B5563" }}
        >
          {props.specialization}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Icons name="location" size={20} color="#4B5563" />
          <Text style={{ fontSize: "14", color: "#4B5563" }}>
            {props.address}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <IconFontAwesome name="star" size={16} color="#FEB052" />
            <Text style={{ fontSize: "12", color: "#6B7280" }}>
              {props.rating}
            </Text>
          </View>
          <View style={{ width: 1, height: 12, backgroundColor: "#4B5563" }} />
          <View>
            <Text style={{ fontSize: "12", color: "#6B7280" }}>
              {props.reviews} Reviews
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
    gap: 8,
  },
  // avatar: {
  //   height: 109,
  //   width: 109,
  //   borderRadius: 12,
  // },
  image: {
    height: 109,
    width: 109,
    borderRadius: 12,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#E5E7EB",
    // marginVertical: 8
  },
});
export default FavoriteCard;
