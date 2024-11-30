import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Icons from "react-native-vector-icons/AntDesign";
import TopNavigation from "../../components/TopNavigation";
import PsychiatristCard from "./_components/PsychiatristCard";
import AchivementCard from "./_components/AchivementCard";
import UserCard from "./_components/UserCard";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { IMAGE_URL } from "../../api/URL/apiUrl";
const achievementData = [
  {
    id: 1,
    title: "clients",
    desc: "2,000+",
    icon: "account-group",
  },
  {
    id: 2,
    title: "experience",
    desc: "10+",
    icon: "medal",
  },
  {
    id: 3,
    title: "rating",
    desc: "5",
    icon: "star",
  },
  {
    id: 4,
    title: "reviews",
    desc: "1,872",
    icon: "message",
  },
];
const PsychiatristDetails = ({ navigation, route }) => {
  const data = route.params.expert
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <View>
        <TopNavigation
          navigation={navigation}
          title="Psychiatrist Details"
          isHeart={true}
        />
      </View>
      <View style={styles.cardContainer}>
        {/* {data.map((item) => ( */}
          <PsychiatristCard
            key={data.id}
            imgUrl={`${IMAGE_URL}${data.avatar}`}
            name={`${data.user.first_name} ${data.user.last_name}`}
            speciality={data.jobTitle}
            address={data.address}
          />
        {/* ))} */}
      </View>
      <View style={styles.achivementContainer}>
        {achievementData.map((item) => (
          <AchivementCard key={item.id} props={item} />
        ))}
      </View>
      <View style={{ paddingHorizontal: 24, flexDirection: "column", gap: 8 }}>
        <Text style={{ fontWeight: "semibold", color: "#1F2A37", fontSize: 20 }}>About me</Text>
        <Text style={{ color: "#6B7280", fontSize: 14 }}>
          Dr. David Patel, a dedicated cardiologist, brings a wealth of
          experience to Golden Gate Cardiology Center in Golden Gate, CA.{" "}
          <Text style={{ textDecorationLine: "underline", color: "#111928" }}>
            view more
          </Text>
        </Text>
      </View>
      <View style={{ paddingHorizontal: 24, flexDirection: "column", gap: 8 }}>
        <Text style={{ fontWeight: "semibold", color: "#1F2A37", fontSize: 20 }}>Working Time</Text>
        <Text style={{ color: "#6B7280", fontSize: 14 }}>
        Monday-Friday, 08.00 AM-18.00 pM
        </Text>
      </View>
      <View style={{ paddingHorizontal: 24, flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "semibold", color: "#1F2A37", fontSize: 20 }}>Reviews</Text>
        <Text style={{ color: "#6B7280", fontSize: 14, fontWeight: "medium" }}>See All</Text>
      </View>
      <View style={{ paddingHorizontal: 24 }}>
        <UserCard />
      </View>
      <View style={{ paddingHorizontal: 24 }}>
        <Text style={{ color: "#6B7280", fontSize: 14, fontWeight: "regular" }}>Dr. Patel is a true professional who genuinely cares about her clients. I highly recommend Dr. Patel to </Text>
      </View>
      <View style={{ paddingHorizontal: 24, paddingVertical: 24 }}>
        {/* <Button style={styles.button} title="Book Appointment" /> */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("bookAppointmentConfirm")}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "medium" }}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 12,
    paddingHorizontal: 24,
  },
  achivementContainer: {
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#1C2A3A",
    borderRadius: 50,
    height: 48,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",

  }
});

export default PsychiatristDetails;
