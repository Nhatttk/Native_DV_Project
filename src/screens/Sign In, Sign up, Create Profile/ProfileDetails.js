import React, { useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import DatePicker from "react-native-datepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
const ProfileDetails = ({ navigation, route }) => {
  const [date, setDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedImage, setselectedImage] = useState([]);
  const [gender, setGender] = useState("");
  const pickerRef = useRef();

  const {formData} = route.params
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    const currentDate = selectedDate || date;
    hideDatePicker();
    setDate(currentDate.toISOString().split("T")[0]); // Định dạng ngày thành YYYY-MM-DD
  };

  const handleSelectedImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setselectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="#292D32"
            style={{ paddingRight: 10 }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            fontFamily: "Inter",
            fontWeight: "bold",
          }}
        >
          Fill Your Profile
        </Text>
      </View>

      <View style={styles.input_form}>
        <TouchableOpacity style={styles.avatar} onPress={handleSelectedImage}>
          <Image
            style={{ width: 200, height: 200, borderRadius: 180, zoom: 1 }}
            source={{ uri: selectedImage }}
            defaultSource={require("../../assets/img/avatar2.png")}
          />
          <Image
            source={require("../../assets/img/message-edit.1024x1024.png")}
            style={styles.edit_icon}
          />
        </TouchableOpacity>

        <TextInput style={styles.tx_input} placeholder="First Name" />
        <TextInput style={styles.tx_input} placeholder="Last Name" />
        <TextInput style={styles.tx_input} placeholder="name@example.com" />

        <View style={styles.tx_input}>
          <TouchableOpacity
            onPress={showDatePicker}
            style={{ flexDirection: "row" }}
          >
            <Fontisto
              name="date"
              size={18}
              color="#292D32"
              style={{ paddingRight: 10 }}
            />
            <TextInput
              placeholder="Select date"
              value={date}
              editable={false} // Để ngăn người dùng gõ vào input
            />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            display="spinner"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <TouchableOpacity
          style={styles.pickerSelectStyles}
          onPress={() => pickerRef.current.togglePicker()}
        >
          <RNPickerSelect
            ref={pickerRef}
            onValueChange={(value) => setGender(value)}
            items={[
              { label: "Nam", value: "male" },
              { label: "Nữ", value: "female" },
              { label: "Khác", value: "other" },
            ]}
            style={{ flex: 1, backgroundColor: "#ddd" }}
            placeholder={{ label: "Gender", value: null }}
          />
          <Ionicons name="chevron-down" size={24} color="#292D32" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn_save}>
          <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Inter" }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input_form: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    padding: 16,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  avatar: {
    // backgroundColor: "#ddd",
    // alignItems: "center",
    marginBottom: 20,
  },
  edit_icon: {
    position: "absolute",
    bottom: 13,
    zIndex: 99,
    right: 18,
    width: 33,
    height: 33,
    backgroundColor: "#fff",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
  },
  tx_input: {
    padding: 12,
    backgroundColor: "#F9FAFB",
    marginBottom: 20,
    width: "100%",
    height: 45,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  pickerSelectStyles: {
    display: "flex",
    padding: 12,
    backgroundColor: "#F9FAFB",
    marginBottom: 32,
    width: "100%",
    height: 45,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn_save: {
    padding: 16,
    backgroundColor: "#1C2A3A",
    marginHorizontal: 24,
    borderRadius: 54,
    width: '100%',
    alignItems: "center",
  },
});

export default ProfileDetails;
