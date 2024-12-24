import React, { useEffect } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TopNavigation from "../../components/TopNavigation";
import Button from "../../components/button";
import UserData from "../../UserData/UserData";
import { AddAllEmailHelp, getAllEmailHelp } from "../../api/apis";

const emailurgenthelpline = [
  {
    id: 1,
    email: "Email1",
  },
  {
    id: 2,
    email: "Email2",
  },
  {
    id: 3,
    email: "Email3",
  },
];

const AddEmailUgentHelf = ({ navigation }) => {
  const [emailInput, setEmailInput] = React.useState("");
  const [allEmails, setAllEmails] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [added, setAdded] = React.useState(false);
  const id = UserData.data.user.profile.pk;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const emails = await getAllEmailHelp(id);
        setAllEmails(emails);
      } catch (error) {
        console.log("Error fetching emails:", error);
      }
    };
    fetchData();
    setAdded(false);
  }, [added]);

  const handleAddEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    setErrorMessage("");

    try {
      await AddAllEmailHelp(id, emailInput);
      Alert.alert("Email added successfully");
      setEmailInput("");
      const emails = await getAllEmailHelp(id);
      setAllEmails(emails);
    } catch (error) {
      console.log("Error adding email:", error);
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <TopNavigation
          navigation={navigation}
          title="Add email to UGENT helpline"
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
        <Text style={{ fontSize: 16, fontWeight: "800", color: "#6B7280" }}>
          Add email
        </Text>
        <TextInput
          placeholder="Add your grievance title here"
          onChangeText={(textInput) => setEmailInput(textInput)}
          style={styles.formtitle}
        />
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <Text style={{ fontSize: 16, fontWeight: "800", color: "#6B7280" }}>
          Recently added
        </Text>
        {allEmails.urgent_emails && (
          <ScrollView
            style={{
              borderWidth: 1,
              borderColor: "#D1D5DB",
              borderRadius: 8,
              height: 142,
            }}
          >
            {allEmails.urgent_emails.map((item) => (
              <View key={item}>
                <Text style={{ padding: 12 }}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        )}
        <Button props={{ title: "Submit" }} handleConfirm={handleAddEmail} />
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
    textAlignVertical: "top",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default AddEmailUgentHelf;
