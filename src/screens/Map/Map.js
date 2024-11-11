import React, { useEffect, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import LoadingPopup from "../../components/loadingPopup";
// import LocationInfo from './components/LocationInfo';
import { SupportLocationData } from "../../utils/supportLocationData";
import LocationInfo from "./components/locationInfo.js";


export default function App() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadMarker, setLoadMarker] = useState(false)
  useEffect(() => {
    (async () => {
      // Yêu cầu quyền truy cập vị trí
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      
      shareLocation()
      // Lấy vị trí hiện tại ban đầu
      let userLocation = await Location.getCurrentPositionAsync({});
      
      setLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  const shareLocation = async () => {
    setLoading(false);
    // Lấy vị trí hiện tại và đặt Marker tại vị trí đó
    let userLocation = await Location.getCurrentPositionAsync({});
    const userLatLng = {
      latitude: userLocation.coords.latitude,
      longitude: userLocation.coords.longitude,
    };

    // Di chuyển MapView đến vị trí người dùng
    setLocation({
      ...userLatLng,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
    setLoading(false);
    setLoadMarker(true);
  };

  return (
    <View style={styles.container}>
      {loading && <LoadingPopup />}
      <MapView
        style={styles.map}
        showsUserLocation={true}
        mapType="terrain"
        region={location}
      >
        {/* Marker cố định */}

        {loadMarker &&
          SupportLocationData.map((mk) => (
            <Marker
              key={mk.id}
              coordinate={{
                latitude: mk.latitude,
                longitude: mk.longitude,
              }}
              title={mk.title}
              description={mk.address}
            >
              <Ionicons name="location-sharp" size={30} color="#1C2A3A" />
            </Marker>
          ))}
      </MapView>
      <ScrollView
        horizontal
        style={{
          bottom: 70,
          right: 30,
          left: 30,
          zIndex: 100,
          position: "absolute",
        }}
      >
        {SupportLocationData.map((data) => {
          return <LocationInfo key={data.id} data={data} setLocation={setLocation} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    position: "absolute",
    bottom: 70,
    right: 30,
    left: 30,
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
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C2A3A",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  shareButtonText: {
    color: "#FFF",
    marginLeft: 5,
    fontSize: 16,
  },
});