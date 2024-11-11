import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const TopNavigation = ({ navigation, title, isHeart, gobackhandle, listFriend}) => {
    const handleGoBack = () => {
        if (gobackhandle) {
          gobackhandle(); // Sử dụng gobackhandle nếu có
        } else {
          navigation.goBack(); // Sử dụng navigation.goBack() nếu không có gobackhandle
        }
      };
    return (
        <View style={styles.header}>
        <TouchableOpacity style={{width: 24, height: 24}} onPress={handleGoBack}>
            <Icons name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flex: 1,alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>{title}</Text>
        </View>
        {
            isHeart && <Icons name="hearto" size={24} color="black" />
        }
        {
            listFriend && <FontAwesome name="list-ul" size={18} color="black" onPress={() => navigation.navigate("AllFriends")}/>
        }
        <TouchableOpacity>

        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 8,
        paddingHorizontal: 24,
        zIndex: 99999
      },
})

export default TopNavigation;
