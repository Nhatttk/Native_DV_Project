import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TopNavigation from '../../components/TopNavigation';
import { PsychiatristData } from '../../utils/psychiatristData';
import { BlogsData } from '../../utils/blogsData';
import FavoriteCard from './_components/FavoriteCard';
import BlogCard from './_components/BlogCard';

const FavoritesScreen = ({navigation}) => {
    const [isPsychiatrist, setIsPsychiatrist] = React.useState(true);
    const [isBlogs, setIsBlogs] = React.useState(false);
  
    // const handleFilter = (status) => {
    //   if (isPsychiatrist === true) {
    //     return status === "upcoming";
    //   } else if (isCompleted === true) {
    //     return status === "completed";
    //   } 
    // };
    const onPressPsychiatrist = () => {
        setIsPsychiatrist(true);
        setIsBlogs(false);
    };
    const onPressBlogs = () => {
        setIsPsychiatrist(false);
        setIsBlogs(true);
    };
    return (
        <SafeAreaView style={styles.container}>
        <View style={{marginBottom: 10}}>
          <TopNavigation
            navigation={navigation}
            title="Favorites"
            isHeart={false}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 24,
          }}
        >
          <TouchableOpacity onPress={onPressPsychiatrist}>
            <View style={{ width: 151, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: isPsychiatrist ? "#1C2A3A" : "#9CA3AF",
                  marginVertical: 16,
                }}
              >
                Psychiatrist
              </Text>
              {isPsychiatrist && <View
                style={{
                  width: 83,
                  height: 3,
                  backgroundColor: "#1C2A3A",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}
              ></View>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressBlogs}>
            <View style={{ width: 151, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: isBlogs ? "#1C2A3A" : "#9CA3AF",
                  marginVertical: 16,
                }}
              >
                blogs
              </Text>
              {isBlogs && <View
                style={{
                    width: 83,
                  height: 3,
                  backgroundColor: "#1C2A3A",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}
              ></View>}
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: 1, backgroundColor: "#E5E7EB" }}></View>
        <ScrollView>
            <View style={styles.Contentcontainer}>
                {isPsychiatrist && PsychiatristData.map((item) => (
                    <FavoriteCard key={item.id} props={item} />
                ))}
                {isBlogs && BlogsData.map((item) => (
                    <BlogCard props={item} key={item.id}/>
                ))}
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    Contentcontainer: {
        flexDirection: "column",
        marginHorizontal: 24,
        gap: 10,
        marginTop: 16
    }
})

export default FavoritesScreen;
