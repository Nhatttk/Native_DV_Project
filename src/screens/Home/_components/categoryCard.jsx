import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function CategoryCard({props}) {
  return (
    <View style={styles.container}>
        <View>
        <Image
        style={styles.img}
        source={{
          uri: props.imgUrl,
        }}
      />
        </View>
        <View style={{height: 30, width: "100%"}}>
            <Text style={{fontWeight: "bold", fontSize: 10, color: "#292D32", alignSelf: "center", textAlign: "center"}}>{props.title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",   
        justifyContent: "center",
        alignContent: "flex-start",   
        width: "100%",
        height: "100%",       
        gap: 5
    },
    img: {
        width: "100%",
        height: 70,
        borderRadius: 10,
    }
})
