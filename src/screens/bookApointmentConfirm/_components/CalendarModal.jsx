import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Calendar } from 'react-native-calendars';

const CalendarModal = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
  return (
    <View>
       <Calendar  
                showWeekNumbers={true}
                onDayPress={day => {
                    setDate(day.dateString);
                }}
                
                markedDates={{
                    [date]: {
                        selected: true
                    }
                }}
                arrowsHitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                theme={{
                    'stylesheet.calendar.header': {
                        header: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 10,
                            marginBottom: 10,
                            color: 'red'
                        },
                        arrowsHitSlop: {
                            top: 10,
                            bottom: 10,
                            left: 10,
                            right: 10,
                            color: 'red'
                        },
                        week: {
                            marginTop: 10,
                            marginBottom: 10
                        },
                        dayHeader: {
                            marginTop: 10,
                            marginBottom: 10
                        }
                    }
                }}
            />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CalendarModal;
