import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../constains/theme';
import { addRequestFriend } from '../../../api/apis';
import UserData from '../../../UserData/UserData';
import { IMAGE_URL } from '../../../api/URL/apiUrl';

const UserView = ({user_data, action}) => {

  const addFriend = async () => {
    try {
      await addRequestFriend(UserData.data.user.profile.pk, user_data.pk)
      refresh()
    } catch (error) {
      console.log("Erorr add requet friend");
    }
  }

  const refresh = () => {
    action();
  };

    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{uri: `${IMAGE_URL}${user_data.avatar}` }}
        />

        <View style={styles.user_info}>
          {/* first row */}
          <View style={styles.firstRow}>
            <Text style={styles.textTitle}>
              {user_data.user.first_name + " " + user_data.user.last_name}
            </Text>
            <TouchableOpacity onPress={addFriend}>
        <Ionicons name="person-add-outline" size={24} color="#374151" />
      </TouchableOpacity>
          </View>
          {/* br */}
          <View style={styles.br}></View>

          {/* second row */}
          <View style={styles.secondRow}>
            {/* job title  */}
            <Text style={styles.textContent}>{user_data.phone}</Text>

            {/* location  */}
            <View style={styles.location}>
              <Ionicons name="location-outline" size={24} color="#374151" />
              <Text style={styles.textLocation}>
                {user_data.address}
              </Text>
            </View>

            {/* inbox button  */}
            <TouchableOpacity style={styles.inbox_button}>
              <Text style={styles.textButton}>Inbox</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    display: "flex",
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  avatar: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 16,
  },

  user_info: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
  },

  firstRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Inter",
    color: "#1F2A37",
  },

  br: {
    width: "100%",
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },

  secondRow: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
  },

  textContent: {
    color: "#4B5563",
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "500",
  },
  textLocation: {
    color: "#4B5563",
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "regular",
  },

  location: {
    flexDirection: "row",
  },

  inbox_button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    color: "#1C2A3A",
  },
});

export default UserView;
