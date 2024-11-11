import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';

const LocationInfo = ({data, setLocation}) => {
    console.log(data)
    const handleUpdateLocation = () => {
      // Cập nhật tọa độ mới cho location
      const newLocation = {
        latitude: data.latitude,
        longitude: data.longitude,
        latitudeDelta: 1,
        longitudeDelta: 1,
      };
      setLocation(newLocation);
    };
    return (
      <TouchableOpacity
        onPress={handleUpdateLocation}
        style={styles.clickableView}
      >
        <View ontap style={styles.infoContainer}>
          {/* <Text>asadjads</Text> */}
          <Image
            source={require("./../../../assets/icon/heart.png")}
            style={{
              width: 24,
              height: 21,
              position: "absolute",
              zIndex: 1,
              right: 0,
              margin: 10,
            }}
          />
          <Image
            width={100}
            height={100}
            source={{
              uri: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/avatar_dep_cho_nam_0_d82ba08b05.jpg",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.textName}>{data.title}</Text>
          <View style={styles.location}>
            <Ionicons name="location-outline" size={24} color="#374151" />
            <Text style={styles.textLocation}>{data.address}</Text>
          </View>
          <View
            style={{ height: 1, backgroundColor: "#ddd", marginHorizontal: 20 }}
          />
          <View
            style={{
              position: 're',
              gap: 5,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                borderWidth: 1,
              }}
            >
              <Image
                source={require("./../../../assets/icon/hospital.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text>{data.type}</Text>
            </View>
            <View style={{width:1, borderWidth: 1, height: "100%"}}></View>
            <TouchableOpacity style={{ borderWidth: 1, alignContent: 'center', justifyContent: 'center'}}>
              <Text>Go</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    marginHorizontal: 10,
    width: 300,
    backgroundColor: "#FFFFFF",
    zIndex: 10,
    borderRadius: 10,
  },
  profileImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textName: {
    color: "#4B5563",
    fontWeight: "bold",
    fontSize: 24,
    paddingLeft: 15,
  },
  location: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 11,
    marginVertical: 10,
  },
  textLocation: {
    marginLeft: 8,
    color: "#374151",
    fontSize: 16,
  },
});

export default LocationInfo;
