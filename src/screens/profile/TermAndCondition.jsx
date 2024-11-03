import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TopNavigation from '../../components/TopNavigation';

const TermAndCondition = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.header}><TopNavigation navigation={navigation} title="Term and Condition" isHeart={false} /></View>
            <View style={styles.contentContainer}>
                <Text style={{ fontWeight: 700, fontSize: 20, color: "#1F2A37" }}>Terms and Conditions for Breaking Shadows</Text>
                <Text style={{ fontWeight: 400, fontSize: 14, color: "#6B7280"  }}>Welcome to Breaking Shadows! These terms and conditions outline the rules and regulations for using Breaking Shadows services. By downloading or using this app, we assume you accept these terms and conditions in full. Do not continue to use Breaking Shadows if you do not agree to all of the terms and conditions stated on this page.</Text>
                <View>
                    <Text style={{ fontWeight: 600, fontSize: 14, color: "#6B7280"  }}>1. License to Use</Text>
                    <Text style={{ fontWeight: 400, fontSize: 14, color: "#6B7280"  }}>1.1. Breaking Shadows grants you a limited, non-exclusive, non-transferable license to use the application on any device you own or control.</Text>
                    <Text style={{ fontWeight: 400, fontSize: 14, color: "#6B7280"  }}>1.2. You must not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the app.</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 600, fontSize: 14, color: "#6B7280"  }}>2. User Responsibilities</Text>
                    <Text style={{ fontWeight: 400, fontSize: 14, color: "#6B7280"  }}>2.1. You agree to use the app only for lawful purposes and in a way that does not infringe upon the rights of, restrict, or inhibit anyone else’s use and enjoyment of the app.</Text>
                    <Text style={{ fontWeight: 400, fontSize: 14, color: "#6B7280"  }}>2.2. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 600, fontSize: 14, color: "#6B7280"  }}>3. Prohibited Actions</Text>
                    <Text style={{ fontWeight: 400, fontSize: 14, color: "#6B7280"  }}>3.1. Users may not engage in the following prohibited activities:</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
      marginBottom: 26,  
    },
    contentContainer: {
        flexDirection: "column",
        marginHorizontal: 24,
        gap: 16,
    }
})

export default TermAndCondition;
