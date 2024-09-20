import React from 'react'
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native'
import Animated, {
  FadeInDown,
  FadeOutUp,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated"; // Animation imports

export default function ({props}) {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 1 }),
    };
  });
    return (
        <Animated.View withTiming style={styles.container}>
          <View style={styles.imgContainer}>
            <Image style={styles.imgBox} source={{ uri: props.imgUrl }} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.content}>{props.content}</Text>
          </View>
          
        </Animated.View>
      );
    };
    
    const { height } = Dimensions.get('window'); // Get screen height for dynamic sizing
    
    const styles = StyleSheet.create({
      container: {
        flex: 1, // Full screen height
        flexDirection: 'column', // Stack image and content vertically
      },
      imgContainer: {
        flex: 3, // Take 2/3 of the height
        backgroundColor: '#f0f0f0', 
      },
      imgBox: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'cover', 
      },
      textContainer: {
        flex: 1, // Take 1/3 of the height
        padding: 16,
        justifyContent: 'center', 
        backgroundColor: '#ffffff', 
        textAlign: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      content: {
        fontSize: 16,
        paddingHorizontal: 20,
        textAlign: 'center',
        alignItems: 'center',
        opacity: 0.5,
      }
    });
    