import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function NearbySupportCard({ data }) {
    const [isLove, setIsLove] = useState();
    const handleClickLove = () => {
        setIsLove(!isLove)
    }
  
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      <View style={styles.container}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={index} position="relative" onPress={handleClickLove}>
              <Image
                style={styles.img}
                source={{
                  uri: item.imgUrl,
                }}
              />
              <View style={{ position: "absolute", top: 10, right: 10}}>
                {isLove ? <Icon name="heart" size={20} color='white' /> : <Icon name="hearto" size={20} color='white' />}
                
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollContainer: {
        width: '100%',
      },
  container: {
    flexDirection: "row",
    gap: 10,
    overflowX: "scroll",
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});
