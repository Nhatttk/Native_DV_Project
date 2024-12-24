import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { postStory } from "../../../api/apis";
import LoadingPopup from "../../../components/loadingPopup";

const FormAddStory = ({ onCancel, setOpenDialog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const onError = (errors, e) => {
    return console.log(errors);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  //
  const onSubmit = async () => {
    try {
      setLoading(true);
      if (!title || !content) {
        Alert.alert("Validation Error", "Title and content are required!");
        setLoading(false);
      }
      const formData = new FormData();
      formData.append("title", title); // Tiêu đề
      formData.append("content", content); // Nội dung
      if (image) {
        const uriParts = image.split(".");
        const fileType = uriParts[uriParts.length - 1];
        formData.append("image", {
          uri: image,
          name: `photo.${fileType}`,
          type: `image/${fileType}`,
        });
      }
      const res = formData.append("profile", "2"); // ID của profile, thay thế bằng ID thực tế
      console.log(res);

      await postStory(formData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error submitting story:", error);
      Alert.alert("Error", "An error occurred while creating the story.");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        {loading && <LoadingPopup loading={loading} completed={false} />}
        <Text style={styles.title}>Share Your Story</Text>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.label}>Content</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter content"
          value={content}
          onChangeText={(text) => setContent(text)}
          multiline
        />
        {!image ? (
          <Button title="Pick an Image" onPress={pickImage} />
        ) : (
          <Button title="Change Image" onPress={pickImage} />
        )}
        <View style={styles.buttons}>
          <View style={[styles.button, { backgroundColor: "#1F2A37" }]}>
            <Button color="white" title="Submit" onPress={onSubmit} />
          </View>
          <View style={[styles.button, { backgroundColor: "#D1D5DB" }]}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    alignSelf: "flex-start",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  inputStyle: {
    backgroundColor: "white",
    borderColor: "#6B7280",
    width: "100%",
    height: 30,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2A37",
    marginBottom: 8,
    alignSelf: "center",
  },
  label: {
    fontSize: 12,
    color: "#6B7280",
    margin: 8,
    marginLeft: 0,
    alignSelf: "flex-start",
  },
  button: {
    color: "white",
    paddingHorizontal: 16,
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
  },
  container: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  input: {
    backgroundColor: "white",
    borderColor: "#6B7280",
    width: "100%",
    height: 30,
    paddingLeft: 5,
    borderRadius: 8,
    borderWidth: 1,
  },
  textArea: {
    height: 100,
  },
});

export default FormAddStory;
