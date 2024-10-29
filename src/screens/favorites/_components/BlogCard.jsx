import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/EvilIcons";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import { IsFavoritesContext } from "../../../utils/IsFavoritesContext";
import { TouchableOpacity } from "react-native";

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
            size={10}
            color="#FEB052"
          />
        ))}
      {/* Render half star if applicable */}
      {halfStar === 1 && (
        <IconFontAwesome name="star-half-empty" size={10} color="#FEB052" />
      )}
      {/* Render empty stars */}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <IconFontAwesome
            key={`empty-${index}`}
            name="star-o"
            size={10}
            color="#FEB052"
          />
        ))}
    </View>
  );
};

const BlogCard = ({ props, onPressHandleRemoveFavorites }) => {
  const {setRemoving} = useContext(IsFavoritesContext);
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: props.imgUrl }}
          style={{
            height: 121,
            width: "100%",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
        <TouchableOpacity style={styles.heartcontainer} onPress={() => onPressHandleRemoveFavorites(props.id)} >
          <IconFontAwesome name="heart" size={15} color="#ffff"/>
        </TouchableOpacity>
      </View>
      <View style={styles.infocontainer}>
        <Text style={{ fontSize: 14, fontWeight: 700, color: "#4B5563" }}>
          {props.title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Icons name="location" size={14} color="#4B5563" />
          <Text style={{ fontSize: 12, color: "#6B7280" }}>
            {props.address}
          </Text>
        </View>
        <View style={styles.reviewcontianer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={{ fontSize: 12, fontWeight: 700, color: "#6B7280" }}>
              {props.rating}
            </Text>
            {renderStars(props.rating)}
          </View>
          <View>
            <Text style={{ fontSize: 12, color: "#6B7280" }}>
              ( {props.reviews} Reviews )
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#E5E7EB",
          marginHorizontal: 12,
          marginVertical: 4,
        }}
      />
      <View style={styles.distanceContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Image
            source={require("../../../assets/images/distanceIcon.png")}
            style={{ width: 16, height: 16, opacity: 0.5 }}
          />
          <Text style={{ fontSize: 12, color: "#6B7280" }}>
            {props.distance}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <IconMaterial
            name="office-building-marker-outline"
            size={16}
            color="#6B7280"
          />
          <Text style={{ fontSize: 12, color: "#6B7280" }}>Office</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
    borderRadius: 8,
    // overflow: "hidden",
    width: 342,
    height: "auto",
    backgroundColor: "#fff",

    shadowColor: "#000000", // Shadow color
    borderColor: "black", // Border color
    shadowOffset: { width: 2, height: 4 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    elevation: 15, // Shadow effect on Android
  },
  infocontainer: {
    flexDirection: "column",
    gap: 8,
    marginHorizontal: 12,
  },
  reviewcontianer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  distanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    marginBottom: 12,
  },
  heartcontainer: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
    width: 27,
    height: 27,
    backgroundColor: "rgba(211, 206, 209, 0.8)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "#000000", // Shadow color
    // borderColor: "black", // Border color
    // shadowOffset: { width: 0, height: 2 }, // Shadow offset
    // shadowOpacity: 0.25, // Shadow opacity
    // elevation: 15, // Shadow effect on Android
  },
});

export default BlogCard;
