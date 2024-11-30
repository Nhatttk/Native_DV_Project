import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { getEmergencyList } from "../../api/apis";
import EmergencyCard from "./components/EmergencyCard";
import TopNavigation from "../../components/TopNavigation";

const EmergencyHelp = ({navigation}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchingData()
    },[]);

    const fetchingData = async () => {
        const helps = await getEmergencyList()
        console.log(helps)
        if (helps != null) {
            setData(helps)
        } else {
            console.error("Error fetching data")
        }
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_title}>
        <TopNavigation
          navigation={navigation}
          title="List Emergency"
          // listFriend={true}
        />
      </View>

        {data.map((item) => (
            <EmergencyCard props={item}/>
        ))}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 24,
    backgroundColor: "#fff",
  },
  header_title: {
    marginBottom: 14,
  },
});

export default EmergencyHelp;
