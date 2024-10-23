import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import BookHistoryCard from "./bookHistoryCard";
import TopNavigation from "../../components/TopNavigation";
import { BookingData } from "../../utils/bookingData";
import { TouchableOpacity } from "react-native";

const BookHistory = ({ navigation }) => {
  const [isUpcoming, setIsUpcoming] = React.useState(true);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [isCancelled, setIsCancelled] = React.useState(false);

  const handleFilter = (status) => {
    if (isUpcoming === true) {
      return status === "upcoming";
    } else if (isCompleted === true) {
      return status === "completed";
    } else if (isCancelled === true) {
      return status === "canceled";
    }
  };
  const onPressUpcoming = () => {
    setIsCancelled(false);
    setIsCompleted(false);
    setIsUpcoming(true);
  };
  const onPressCompleted = () => {
    setIsCancelled(false);
    setIsCompleted(true);
    setIsUpcoming(false);
  };
  const onPressCaceled = () => {
    setIsCancelled(true);
    setIsCompleted(false);
    setIsUpcoming(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TopNavigation
          navigation={navigation}
          title="My Bookings"
          isHeart={false}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 24,
        }}
      >
        <TouchableOpacity onPress={onPressUpcoming}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: isUpcoming ? "#1C2A3A" : "#9CA3AF",
                marginVertical: 16,
              }}
            >
              Upcoming
            </Text>
            {isUpcoming && <View
              style={{
                width: "100%",
                height: 3,
                backgroundColor: "#1C2A3A",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }}
            ></View>}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressCompleted}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: isCompleted ? "#1C2A3A" : "#9CA3AF",
                marginVertical: 16,
              }}
            >
              Completed
            </Text>
            {isCompleted && <View
              style={{
                width: "100%",
                height: 3,
                backgroundColor: "#1C2A3A",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }}
            ></View>}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressCaceled}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: isCancelled ? "#1C2A3A" : "#9CA3AF",
                marginVertical: 16,
              }}
            >
              Canceled
            </Text>
            {isCancelled && <View
              style={{
                width: "100%",
                height: 3,
                backgroundColor: "#1C2A3A",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }}
            ></View>}
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", height: 1, backgroundColor: "#E5E7EB" }}></View>
      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            gap: 10,
            alignContent: "center",
            alignItems: "center",
            marginTop: 16
          }}
        >
          {BookingData.filter((item) => handleFilter(item.status)).map(
            (item) => {
              return (
                <View key={item.id}>
                  <BookHistoryCard props={item} />
                </View>
              );
            }
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    // alignItems: "center",
  },
});

export default BookHistory;
