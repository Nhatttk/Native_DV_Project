import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  StyleSheet,
  Button,
  Image,
} from "react-native";

const LoadingPopup = ({ loading, completed, setLoading, setCompleted }) => {
  // const [loading, setLoading] = useState(true);

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="fade"
        visible={loading}
        // visible={false}
        onRequestClose={toggleLoading}
      >
        <View style={styles.modalBackground}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        animationType="fade"
        visible={completed}
        // visible={true}
        onRequestClose={() => setCompleted(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              display: "flex",
              justifyContent: "center", 
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#A4CFC3",
                borderRadius: "100%",
                width: 60,
                height: 60,
                display: "flex",
                justifyContent: "center", 
                alignItems: "center",
              }}
            >
              <Image
                source={require("./../assets/icon/shield-tick.png")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              Status
            </Text>
            <Text style={{ margin: 15 }}>Email sent successfully</Text>
            <Button title="Close" onPress={() => setCompleted(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  loadingContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default LoadingPopup;
