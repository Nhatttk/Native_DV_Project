import React, { useState, Fragment, useCallback, useMemo, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { Calendar, CalendarUtils } from "react-native-calendars";
import testIDs from "../../../utils/testIDs";
import { AntDesign } from "@expo/vector-icons";

const CalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const INITIAL_DATE = currentDate.toISOString().split("T")[0];
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);
  //
  const [hourSelected, setHourSelected] = useState(null);
  const selectHourHandle = (id) => {
    setHourSelected(id);
  };
  //

  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);
  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "#1C2A3A",
        justifyContent: "center",
        alignItems: "center",
        selectedTextColor: "white",
      },
    };
  }, [selected]);
  const hours = [
    {
      id: 1,
      time: "09:00 AM",
    },
    {
      id: 2,
      time: "09:30 AM",
    },
    {
      id: 3,
      time: "10:00 AM",
    },
    {
      id: 4,
      time: "10:30 AM",
    },
    {
      id: 5,
      time: "11:00 AM",
    },
    {
      id: 6,
      time: "11:30 AM",
    },
    {
      id: 7,
      time: "03:00 PM",
    },
    {
      id: 8,
      time: "03:30 PM",
    },
    {
      id: 9,
      time: "04:00 PM",
    },
    {
      id: 10,
      time: "04:30 PM",
    },
    {
      id: 11,
      time: "05:00 PM",
    },
    {
      id: 12,
      time: "05:30 PM",
    },
  ];
  const renderCalendarWithWeekNumbers = () => {
    return (
      <Fragment>
        <Text style={styles.text}>Select Date</Text>
        <Calendar
          style={styles.calendar}
          hideExtraDays={false}
          current={INITIAL_DATE}
          markedDates={marked}
          onDayPress={onDayPress}
          renderArrow={(direction) =>
            direction === "right" ? (
              <AntDesign name="caretright" direction="right" />
            ) : (
              <AntDesign
                name="caretleft"
                direction="left"
                style={{ marginRight: -7 }}
              />
            )
          }
          theme={{
            calendarBackground: "#F9FAFB",
            selectedDotColor: "red",
            selectedDayBackgroundColor: "red",
            textSectionTitleColor: "#4B5563",
            textDayHeaderFontWeight: "600",
            textDayHeaderFontSize: 12,
            textDayFontSize: 12,
            textDayFontWeight: "bold",
            todayTextColor: "red",
            dayTextColor: "#6B7280",
            monthTextColor: "#111928",
            textMonthFontSize: 14,
            textMonthFontWeight: "bold",
            "stylesheet.calendar.header": {
              headerContainer: {
                backgroundColor: "#F9FAFB",
                position: "absolute",
                flexDirection: "row",
                left: 0,
                gap: 20,
              },
              header: {
                backgroundColor: "#F9FAFB",
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: 6,
                alignItems: "center",
              },
            },
          }}
        />
      </Fragment>
    );
  };
  const SelectHour = () => {
    return (
      <View style={{ flexDirection: "column", gap: 16, marginHorizontal: 24 }}>
        <Text style={{ color: "#1C2A3A", fontWeight: "600", fontSize: 20 }}>
          Select Hour
        </Text>
        <View style={styles.hourContainer}>
          {hours.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => selectHourHandle(item.id)}
              >
                <View
                  style={{
                    backgroundColor: hourSelected === item.id ? "#1C2A3A" : "#F9FAFB",
                    paddingHorizontal: 19,
                    paddingVertical: 10,
                    borderRadius: 10,
                    marginBottom: 16,
                  }}
                >
                  <Text
                    style={{
                      color: hourSelected === item.id ? "white" : "#6B7280",
                      fontWeight: "500",
                      fontSize: 14,
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderExamples = () => {
    return (
      <Fragment>
        <View>{renderCalendarWithWeekNumbers()}</View>
        <View>
          <SelectHour />
        </View>
      </Fragment>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      testID={testIDs.calendars.CONTAINER}
      style={{ backgroundColor: "white" }}
    >
      {renderExamples()}
    </ScrollView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
    padding: 16,
    margin: 24,
    shadowColor: "#000000",  // Shadow color
    borderColor: "black",  // Border color
    shadowOffset: { width: 2, height: 3 },  // Shadow offset
    shadowOpacity: 0.25,  // Shadow opacity
    elevation: 15,  // Shadow effect on Android
  },
  text: {
    textAlign: "left",
    fontSize: 20,
    color: "#1C2A3A",
    fontWeight: "500",
    marginLeft: 24,
    marginBottom: -16,
  },
  disabledText: {
    color: "grey",
  },
  defaultText: {
    color: "purple",
  },
  hourContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
