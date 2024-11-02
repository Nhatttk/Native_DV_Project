import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BlurComponent = () => {
    return (
        <View style={styles.container}>
            <Text>hello world</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})

export default BlurComponent;
