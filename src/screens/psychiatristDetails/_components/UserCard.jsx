import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome";

const userdata = {
    name: "Emily Anderson",
    rating: 3.5,
    imgUrl: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
}

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);  // Full stars
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;  // Half star (if >= 0.5)
    const emptyStars = 5 - fullStars - halfStar;  // Empty stars

    // Render the stars
    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            {/* Render full stars */}
            {Array(fullStars).fill().map((_, index) => (
                <Icons key={`full-${index}`} name="star" size={20} color="#FEB052" />
            ))}
            {/* Render half star if applicable */}
            {halfStar === 1 && <Icons name="star-half-empty" size={20} color="#FEB052" />}
            {/* Render empty stars */}
            {Array(emptyStars).fill().map((_, index) => (
                <Icons key={`empty-${index}`} name="star-o" size={20} color="#FEB052" />
            ))}
        </View>
    );
};

const UserCard = () => {
    return (
        <View style={styles.container}>
            <View>
            <Image style={styles.image} source={{uri: userdata.imgUrl}} />
            </View>
            <View style={{flexDirection: "column", gap: 8}}>
                <Text style={{fontWeight: "bold", fontSize: '16'}}>{userdata.name}</Text>
                <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>
                    <Text>3.5</Text>
                    <View style={{}}>
                    {renderStars(userdata.rating)}
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
        gap: 10
    },
    image: {
        width: 57,
        height: 57,
        borderRadius: 41
    }
})

export default UserCard;
