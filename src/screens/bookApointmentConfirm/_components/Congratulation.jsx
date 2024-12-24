import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/button";

const Congratulation = ({ props, onUpdateParent }) => {
  const hidenView = () => {
    onUpdateParent(false);
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/images/congratulation.png")}
          style={{ width: 131, height: 131 }}
        />
      </View>
      <View style={styles.content}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          Congratulations!
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            textAlign: "center",
            color: "#6B7280",
          }}
        >
          Your appointment with Dr. David Patel is confirmed for June 30, 2023,
          at 10:00 AM.
        </Text>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={hidenView}
            >
              <Text style={styles.textstyle}>Done</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            color: "#6B7280",
            fontSize: 14,
            fontWeight: "400",
          }}
        >
          Edit your appointment{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    width: 341,
    height: 445,
    backgroundColor: "#fff",
    borderRadius: 48,
  },
  content: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    gap: 8,
    width: 248,
  },
  buttonBox: {
    flexDirection: "column",
    gap: 16,
    width: "100%",
  },
  button: {
    backgroundColor: "#1C2A3A",
    borderRadius: 50,
    height: 48,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    margin: 15
  },
  textstyle: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default Congratulation;
