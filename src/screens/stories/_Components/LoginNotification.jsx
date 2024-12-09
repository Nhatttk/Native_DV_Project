import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const LoginNotification = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>
                Sign in to continue using this feature
                </Text>
            </View>
            <View>
                <Button style={styles.button} title='Sign in' />
                <Button style={styles.button} title='Cancel' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',  
    },  
    button: {
        margin: 10
    }
})

export default LoginNotification;
