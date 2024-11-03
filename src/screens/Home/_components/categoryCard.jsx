import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function CategoryCard({props}) {
  return (
    <View style={styles.container}>
        <View>
        <Image
        style={styles.img}
        // source={{
        //   uri: props.imgUrl,
        // }}
        source={props.imgUrl}
      />
        </View>
        <View style={{height: 30, width: "100%"}}>
            <Text style={{fontWeight: 600, fontSize: 10, color: "#4B5563", alignSelf: "center", textAlign: "center"}}>{props.title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",   
        justifyContent: "center",
        alignContent: "flex-start",   
        width: 66,
        height: 84,       
        gap: 5
    },
    img: {
        width: 62,
        height: 62,
        borderRadius: 10,
    }
})
