import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet, View } from 'react-native';

const Button = ({props, customStyle}) => {
    const handlePress = () => {
        props.navigation.navigate(props.navigationPath);
    }
    return (
        <View>
        {/* <Button style={styles.button} title="Book Appointment" /> */}
        <TouchableOpacity style={[styles.button, customStyle]}  onPress={handlePress}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "medium" }}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#1C2A3A",
        borderRadius: 50,
        height: 48,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }
})

export default Button;
