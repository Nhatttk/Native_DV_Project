import React, { useState, Fragment, useCallback, useMemo, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Calendar, CalendarUtils } from "react-native-calendars";
import testIDs from "../../../utils/testIDs";
import { AntDesign } from "@expo/vector-icons";

const CalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const INITIAL_DATE  = currentDate.toISOString().split("T")[0];;
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  // const getDate = () => {
  //   const date = new Date(INITIAL_DATE);
  //   const newDate = date.setDate(date.getDate() + count);
  //   return CalendarUtils.getCalendarDateString(newDate);
  // };

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
              <AntDesign name="caretleft" direction="left" style={{"marginRight": -7}} />
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


  const renderExamples = () => {
    return (
      <Fragment>
        {/* {renderCalendarWithSelectableDate()} */}
        {renderCalendarWithWeekNumbers()}
        {/* {renderCalendarWithMinAndMaxDates()}
        {renderCalendarWithCustomDay()}
        {renderCalendarWithInactiveDays()}
        {renderCalendarWithCustomHeaderTitle()}
        {renderCalendarWithCustomHeader()}
        {renderCalendarWithMarkedDatesAndHiddenArrows()}
        {renderCalendarWithMultiDotMarking()}
        {renderCalendarWithPeriodMarkingAndSpinner()}
        {renderCalendarWithPeriodMarkingAndDotMarking()}
        {renderCalendarWithMultiPeriodMarking()}
        {renderCalendarWithCustomMarkingType()} */}
      </Fragment>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      testID={testIDs.calendars.CONTAINER}
      style={{ backgroundColor: "white"}}
    >
      {renderExamples()}
    </ScrollView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    borderRadius:12,
    backgroundColor: "#F9FAFB",
    padding: 16,
    margin: 24,
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
});
