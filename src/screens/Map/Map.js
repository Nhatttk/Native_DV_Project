import React, { useEffect, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import LoadingPopup from "../../components/loadingPopup";

const marker = [
  {
    id: 1,
    latitude: 16.01344,
    longitude: 108.20874,
    title: "Địa điểm 1",
    description: "Mô tả địa điểm 1",
  },
  {
    id: 2,
    latitude: 16.02432,
    longitude: 108.209,
    title: "Địa điểm 2",
    description: "Mô tả địa điểm 2",
  },
  {
    id: 3,
    latitude: 15.019,
    longitude: 108.21,
    title: "Địa điểm 3",
    description: "Mô tả địa điểm 3",
  },
  {
    id: 4,
    latitude: 16.234,
    longitude: 108.21,
    title: "Địa điểm 3",
    description: "Mô tả địa điểm 3",
  },
  {
    id: 5,
    latitude: 16.3234,
    longitude: 108.21,
    title: "Địa điểm 3",
    description: "Mô tả địa điểm 3",
  },
];


export default function App() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadMarker, setLoadMarker] = useState(false)

  useEffect(() => {
    (async () => {
      // Yêu cầu quyền truy cập vị trí
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      

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
    setLoading(true);
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
          marker.map((mk) => (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: mk.latitude,
                longitude: mk.longitude,
              }}
              title={mk.title}
              description={mk.description}
            >
              <Ionicons name="location-sharp" size={30} color="#1C2A3A" />
            </Marker>
          ))}
      </MapView>

      <View style={styles.infoContainer}>
        <Image
          width={100}
          height={100}
          source={{
            uri: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/avatar_dep_cho_nam_0_d82ba08b05.jpg",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.textName}>nameeeeeeeeeeeeeeeee</Text>
        <View style={styles.location}>
          <Ionicons name="location-outline" size={24} color="#374151" />
          <Text style={styles.textLocation}>123 Oak Street, CA 98765</Text>
        </View>
        <View>
          <Image style={{width: 24, height: 24}} source={require("./../../assets/icon/routing.png")} />
        </View>
        <TouchableOpacity style={styles.shareButton} onPress={shareLocation}>
          <Ionicons name="share-social-outline" size={20} color="#FFF" />
          <Text style={styles.shareButtonText}>Search Support Locations</Text>
        </TouchableOpacity>
      </View>
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