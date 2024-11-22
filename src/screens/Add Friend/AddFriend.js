import React, { useState } from 'react';
import { SafeAreaView, ScrollView, ScrollViewBase, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import HeaderTitle from '../../components/header_title';
import FilterUser from './_components/filterUser';
import { Dropdown } from 'react-native-element-dropdown';
import UserView from './_components/user';
import TopNavigation from '../../components/TopNavigation';

const local_data = {
  city: [
    {
      value: "1",
      label: "Country 1",
      image: {
        uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
      },
    },
    {
      value: "2",
      label: "Country 2",
      image: {
        uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
      },
    },
    {
      value: "3",
      label: "Country 3",
      image: {
        uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
      },
    },
    {
      value: "4",
      label: "Country 4",
      image: {
        uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
      },
    },
    {
      value: "5",
      label: "Country 5",
      image: {
        uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
      },
    },
  ],
  city2: [
    {
      value: "1",
      label: "Job",
      image: {
        uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
      },
    },
    {
      value: "2",
      label: "Country 2",
      image: {
        uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
      },
    },
    {
      value: "3",
      label: "Country 3",
      image: {
        uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
      },
    },
    {
      value: "4",
      label: "Country 4",
      image: {
        uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
      },
    },
    {
      value: "5",
      label: "Country 5",
      image: {
        uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
      },
    },
  ],
};

const user_data = [
  {
    id: 1,
    username: "john_doe",
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    profile: {
      avatarUrl:
        "https://internetviettel.vn/wp-content/uploads/2017/05/H%C3%ACnh-%E1%BA%A3nh-minh-h%E1%BB%8Da.jpg",
      bio: "Software",
      location: "San Francisco, CA",
    },
    roles: ["admin", "editor"],
    isActive: true,
    lastLogin: "2024-10-10T12:45:00Z",
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane.smith@example.com",
    firstName: "Jane",
    lastName: "Smith",
    profile: {
      avatarUrl:
        "https://images2.thanhnien.vn/528068263637045248/2024/1/25/428059e47aeafb68640f168d615371dc-65a11b038315c880-1706156293087602824781.jpg",
      bio: "Digital marketer and content creator.",
      location: "New York, NY",
    },
    roles: ["editor"],
    isActive: true,
    lastLogin: "2024-10-12T09:15:00Z",
  },
  {
    id: 3,
    username: "peter_parker",
    email: "peter.parker@example.com",
    firstName: "Peter",
    lastName: "Parker",
    profile: {
      avatarUrl:
        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/avatar_dep_cho_nam_0_d82ba08b05.jpg",
      bio: "Photographer and freelance journalist.",
      location: "Queens, NY",
    },
    roles: ["contributor"],
    isActive: false,
    lastLogin: "2024-09-28T14:22:00Z",
  },
];


const AddFriend = ({navigation}) => {
  
    return (
      <SafeAreaView style={styles.container}>
        {/* <HeaderTitle title={"Add Friend"} /> */}
        <View style={styles.header_title}>
          <TopNavigation navigation={navigation} title={"Add Friend"} listFriend={true}/>
        </View>
        {/* search bar */}
        <View style={styles.search}>
          <Ionicons name="search-outline" size={24} color="#9CA3AF" />
          <TextInput
            style={{
              fontFamily: "Inter",
              fontWeight: "regular",
              fontSize: 14,
              color: "#9CA3AF",
              styles: {
                height: 40,
              }
            }}
            placeholder="Search by email or username..."
          ></TextInput>
        </View>
        <View style={styles.filter}></View>
        <View style={styles.card}>
          <View style={styles.arrange}></View>
          <View style={styles.card_item}></View>
        </View>

        {/* filter bar  */}
        <View style={{ flexDirection: "row" }}>
          {Object.keys(local_data).map((key) => (
            <FilterUser key={key} data={local_data[key]} />
          ))}
        </View>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            fontFamily: "Inter",
            marginHorizontal: 20,
            marginVertical: 5
          }}
        >
          {user_data.length} Founds
        </Text>

        <ScrollView>
          {user_data.map((user) => (
            <UserView style={styles.user} key={user.id} user_data={user} navigation={navigation} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 24,
    backgroundColor: "#fff",
  },
  header_title: {
    marginBottom: 14,
  },
  user : {
    marginHorizontal: 10
  },
  search: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingLeft: 12,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
    marginHorizontal: 24,
    alignItems: "center",
    gap: 8,
  },

  
});

export default AddFriend;
