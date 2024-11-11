import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const QuestionCard = ({props}) => {
    return (
        <View style={styles.container}>
            <Text>{props.question}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 254,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#D1D5DB",
        backgroundColor: "#CAD9F9",
        padding: 16
    }
})

export default QuestionCard;
