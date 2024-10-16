import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TopNavigation from '../../components/TopNavigation';
import CalendarModal from './_components/CalendarModal';


const BookApointmentConfirm = ({ navigation }) => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
      setDate(date);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TopNavigation navigation={navigation} title="Book Appointment" isHeart={false}/>
            </View>
            <View style={{ marginTop: 16 }}>
                <CalendarModal />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    }
})

export default BookApointmentConfirm;
