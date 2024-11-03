import React from "react";
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import TopNavigation from "../../components/TopNavigation";
import Button from "../../components/button";

const HelpAndSupport = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <TopNavigation
          navigation={navigation}
          title="Help and Supports"
          isHeart={false}
        />
      </View>
      <View style={styles.titleContainer}>
        <Image
          source={require("../../assets/img/logogpt-removebg-preview.png")}
          style={{ width: 190, height: 150, alignSelf: "center" }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "#1F2A37",
            textAlign: "center",
            marginVertical: 10,
          }}
        >
          If you are experiencing any issues, please let us now. We will try to
          solve them as soon as possible.{" "}
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={{ fontSize: 16, fontWeight: "800", color: "#6B7280" }}>Title</Text>
        <TextInput placeholder="Add your grievance title here" style={styles.formtitle}/>
        <Text style={{ fontSize: 16, fontWeight: "800", color: "#6B7280" }}>Explain the problem</Text>
        <TextInput placeholder="Type your query here" multiline={true} numberOfLines={5} style={styles.textarea}/>
      
        <Button props={{ title: "Submit" }} handleConfirm={() => Alert.alert("Submitted")}/>
          
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  titleContainer: {
    flexDirection: "column",
    marginHorizontal: 24,
  },
  formContainer: {
    flexDirection: "column",
    marginHorizontal: 24,
    gap: 20,
    marginTop: 20,
  },
  formtitle: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingVertical: 12,
    paddingLeft: 16,
    height: 56,
  },
  textarea: {
    height: 142,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    textAlignVertical: 'top',
  },
});

export default HelpAndSupport;
