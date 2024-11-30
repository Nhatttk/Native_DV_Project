import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const QuestionCardAI = ({props}) => {
    return (
        <View style={styles.container}>
            <Text >{props.message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#D1D5DB",
        backgroundColor: "#CAD9F9",
        padding: 16,
        marginVertical: 10,
        alignSelf: 'flex-end'
    }
})

export default QuestionCardAI;
