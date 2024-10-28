import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";

const TopNavigation = ({navigation, title, isHeart}) => {
    return (
        <View style={styles.header}>
        <TouchableOpacity style={{width: 24, height: 24}} onPress={() => navigation.goBack()}>
            <Icons name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flex: 1,alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>{title}</Text>
        </View>
        {
            isHeart && <Icons name="hearto" size={24} color="black" />
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
      },
})

export default TopNavigation;
