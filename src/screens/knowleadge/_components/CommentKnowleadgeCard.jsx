import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CommentKnowleadgeCard = ({ props }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View>
                    <Image style={styles.image} source={props.avatarImage} />
                </View>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: "16", color: "#1F2A37" }}>{props.name}</Text>
                </View>
            </View>
            <View style={styles.commentContainer}>
                <Text style={{ fontSize: "14", color: "#6B7280" }}>{props.comment}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    image: {
        width: 57,
        height: 57,
        borderRadius: 999
    },
    commentContainer: {
        
    }
})

export default CommentKnowleadgeCard;
