import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import TopNavigation from "../../components/TopNavigation";
import CalendarModal from "./_components/CalendarModal";
import Button from "../../components/button";
import Congratulation from "./_components/Congratulation";

const BookApointmentConfirm = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [isCongatulation, setIsCongatulation] = useState(false);

  const onChange = (date) => {
    setDate(date);
  };
  const handleConfirm = () => {
    setIsCongatulation(!isCongatulation);
    console.log("CONFIRM: ", isCongatulation);
  }
  return (
    <SafeAreaView style={[styles.container]}>
      
      <View>
        <TopNavigation
          navigation={navigation}
          title="Book Appointment"
          isHeart={false}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <CalendarModal props={{ isCongatulation: isCongatulation}}/>
      </View>
      <View>
        <Button
          props={{
            title: "Confirm",
          }}
          handleConfirm={handleConfirm}
          customStyle={{ marginHorizontal: 24, marginTop: 34 }}
        />
      </View>
      
      {
        isCongatulation && <View style={styles.congratulation}><Congratulation props={{navigation: navigation}}/></View>
      }
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  congratulation: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  }
});

export default BookApointmentConfirm;
