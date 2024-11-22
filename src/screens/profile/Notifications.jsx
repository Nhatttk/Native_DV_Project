import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import TopNavigation from '../../components/TopNavigation';
import NotificationCard from './_components/NotificationCard';

const notificationData = [
    {
        id: 1,
        title: "Appointment Success",
        description: "You have successfully booked your appointment with Dr. Emily Walker.",
        date: "2024-11-22T10:00:00",
        type: "success",
    },
    {
        id: 2,
        title: "Appointment Cancelled",
        description: "You have successfully booked your appointment with Dr. Emily Walker.",
        date: "2024-11-22T10:00:00",
        type: "remove",
    },
    {
        id: 3,
        title: "Scheduled Changed",
        description: "You have successfully booked your appointment with Dr. Emily Walker.",
        date: "2024-11-20T10:00:00",
        type: "edit",
    },
    {
        id: 4,
        title: "Appointment Success",
        description: "You have successfully booked your appointment with Dr. Emily Walker.",
        date: "2024-11-08T10:00:00",
        type: "success",
    },
    {
        id: 5,
        title: "Appointment Cancelled",
        description: "You have successfully booked your appointment with Dr. Emily Walker.",
        date: "2024-11-07T10:00:00",
        type: "remove",
    },
    {
        id: 6,
        title: "Scheduled Changed",
        description: "You have successfully booked your appointment with Dr. Emily Walker.",
        date: "2024-11-05T10:00:00",
        type: "edit",
    },
]

const Notifications = ({ navigation }) => {
    
    const getTimePadded = (time) => {
        const currentDate = new Date();
        const inputDate = new Date(time);
        const timeElapsed = (currentDate - inputDate) / (1000 * 60 * 60);
        return timeElapsed;
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}><TopNavigation navigation={navigation} title="Notification" isHeart={false} /></View>
            <ScrollView>
            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#6B7280" }}>TODAY</Text>
                    <Text style={{ fontSize: 14, fontWeight: "800", color: "#1C2A3A" }}>Mark all as read</Text>
                </View>
                {notificationData.filter((item) => {
                    return getTimePadded(item.date) < 24;
                }).map((item) => (
                    <View key={item.id}>
                        <NotificationCard props={item} />
                    </View>
                ))}
                {/*  */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#6B7280" }}>YESTERDAY</Text>
                    <Text style={{ fontSize: 14, fontWeight: "800", color: "#1C2A3A" }}>Mark all as read</Text>
                </View>
                {notificationData.filter((item) => {
                    return getTimePadded(item.date) > 24 && getTimePadded(item.date) < 48;
                }).map((item) => (
                    <View key={item.id}>
                        <NotificationCard props={item} />
                    </View>
                ))}
                {/*  */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#6B7280", textTransform: "uppercase" }}>more than 3 days ago</Text>
                    <Text style={{ fontSize: 14, fontWeight: "800", color: "#1C2A3A" }}>Mark all as read</Text>
                </View>
                {notificationData.filter((item) => {
                    return getTimePadded(item.date) > 24*3;
                }).map((item) => (
                    <View key={item.id}>
                        <NotificationCard props={item} />
                    </View>
                ))}                
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
      marginBottom: 26,  
    },
    contentContainer: {
        flexDirection: "column",
        marginHorizontal: 24,
        gap: 16,
    }
})

export default Notifications;
