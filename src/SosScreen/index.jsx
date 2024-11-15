import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TopNavigation from "../components/TopNavigation";
import { LinearGradient } from "expo-linear-gradient";
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  Ellipse,
  Circle,
} from "react-native-svg";
import { sendEmail } from "../api/apis";
import LoadingPopup from "../components/loadingPopup";

const SosScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    async function HandleSendEmail() {
      try {
        const response = await sendEmail();
        setLoading(false)
        setCompleted(true)
      } catch (e) {
        console.error(e);
      }
    }
    HandleSendEmail();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", justifyContent: "flex-start" }}
    >
      <LoadingPopup
        loading={loading}
        completed={completed}
        setLoading={setLoading}
        setCompleted={setCompleted}
      />

      <View>
        <TopNavigation title="" gobackhandle={() => navigation.goBack()} />
      </View>
      <View style={{ marginHorizontal: 24, gap: 15 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            alignSelf: "center",
            color: "#313A51",
          }}
        >
          Calling emergency...
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "400",
            alignSelf: "center",
            textAlign: "center",
            color: "#6B7280",
          }}
        >
          Please stand by, we are currently requestiong for help, Your emergency
          contacts and nearby rescue services would see your call for help
        </Text>
      </View>
      <View style={styles.container}>
        <LinearGradient
          colors={["#ffff", "#355C7D", "#6C5B7B", "#C06C84", "#ffff"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{
            width: "100%",
            height: "90%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
          }}
        >
          <View>
            <View style={styles.outborders}>
              <View style={[styles.outborders]}>
                <View style={styles.outborders}>
                  <View style={styles.outborder}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 25,
                        borderRadius: "100%",
                        backgroundColor: "#F5F5FA",
                        zIndex: 1,
                      }}
                    >
                      {/* <View>
                        <Svg width="153" height="153">
                          <Defs>
                            <RadialGradient
                              id="grad"
                              cx="76.5" // Center horizontally
                              cy="76.5" // Center vertically
                              rx="76.5" // Radius in x-direction
                              ry="76.5" // Radius in y-direction
                              fx="76.5" // Focal point x (center)
                              fy="76.5" // Focal point y (center)
                              gradientUnits="userSpaceOnUse"
                            >
                              <Stop
                                offset="0"
                                stopColor="#FFAD59"
                                stopOpacity="1"
                              />
                              <Stop
                                offset="1"
                                stopColor="#FF7E7B"
                                stopOpacity="1"
                              />
                            </RadialGradient>
                          </Defs>
                          <Circle
                            cx="76.5"
                            cy="76.5"
                            r="76.5"
                            fill="url(#grad)"
                          />
                        </Svg>
                        <Text style={styles.textsos}>SOS</Text>
                      </View> */}

                      <Image
                        source={require("./../assets/icon/sos_icon.png")}
                        style={{ width: 153, height: 153 }}
                      />
                    </View>
                    <View
                      style={{ position: "absolute", bottom: 190, right: 10 }}
                    >
                      <Image
                        style={{ width: 32, height: 32, borderRadius: 999 }}
                        source={{
                          uri: "https://uploaded.celebconfirmed.com/_f2dc7d7be7.jpg",
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{ position: "absolute", bottom: -10, right: 90 }}
                  >
                    <Image
                      style={{ width: 32, height: 32, borderRadius: 999 }}
                      source={{
                        uri: "https://uploaded.celebconfirmed.com/_f2dc7d7be7.jpg",
                      }}
                    />
                  </View>
                </View>
                <View style={{ position: "absolute", top: 0, left: 90 }}>
                  <Image
                    style={{ width: 32, height: 32, borderRadius: 999 }}
                    source={{
                      uri: "https://uploaded.celebconfirmed.com/_f2dc7d7be7.jpg",
                    }}
                  />
                </View>
              </View>
              <View style={{ position: "absolute", bottom: 140, left: -10 }}>
                <Image
                  style={{ width: 32, height: 32, borderRadius: 999 }}
                  source={{
                    uri: "https://uploaded.celebconfirmed.com/_f2dc7d7be7.jpg",
                  }}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textsos: {
    position: "absolute",
    top: 55,
    fontSize: 32,
    fontWeight: "900",
    alignSelf: "center",
    color: "#ffff",
  },
  outborder: {
    padding: 27,
    backgroundColor: "transparent",
    borderRadius: 999,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#DECBA4",
  },
  outborders: {
    padding: 21,
    backgroundColor: "transparent",
    borderRadius: 999,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#DECBA4",
    backgroundColor: LinearGradient,
  },
});

export default SosScreen;
