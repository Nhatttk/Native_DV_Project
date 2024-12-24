import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import TopNavigation from "../../components/TopNavigation";
import CalendarModal from "./_components/CalendarModal";
import Button from "../../components/button";
import Congratulation from "./_components/Congratulation";
import UserData from "../../UserData/UserData";
import { addBooking } from "../../api/apis";
import { ScrollView } from "react-native";

const BookApointmentConfirm = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isCongatulation, setIsCongatulation] = useState(false);
  const [hourSelected, setHourSelected] = useState(null);
  const INITIAL_DATE = currentDate.toISOString().split("T")[0];
  const [selected, setSelected] = useState(null);
  const onChange = (date) => {
    setDate(date);
  };
  const {expert_id} = route.params || 1;
  console.log("expert: ",route.params)
  const handleConfirm = async () => {
    try {
      console.log(payload)
      const data = await addBooking(payload);
      setIsCongatulation(!isCongatulation);
      console.log("CONFIRM: ", isCongatulation);
    } catch (error) {
      console.log(error)
    }
  }

  const onUpdateParent = (newValue) => {
    setIsCongatulation(newValue);
    console.log("new value : ",newValue)
  };
  const payload = {
    expert_id : expert_id,
    booking_user_id: UserData.data.user.profile.pk,
    day: selected,
    hour: hourSelected
  }

  const handleChangeValue = async (day, hour) => {
    setSelected(day)
    setHourSelected(hour)
  }
  return (
    <SafeAreaView style={[styles.container]}>
      
      <ScrollView>
      <View>
        <TopNavigation
          navigation={navigation}
          title="Book Appointment"
          isHeart={false}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <CalendarModal onValueChange={handleChangeValue} props={{ isCongatulation: isCongatulation} } />
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
      </ScrollView>
      
      {
        isCongatulation && <View style={styles.congratulation}><Congratulation props={{navigation: navigation}} onUpdateParent={onUpdateParent}/></View>
      }
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: 'auto'
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
