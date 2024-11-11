import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const StoryCard = ({ props, commentHandle }) => {
  const [openBoxCmt, setOpenBoxCmt] = React.useState(false);
  console.log(openBoxCmt);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: openBoxCmt ? "rgb(223, 230, 233)" : "white" },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <View>
          <Image
            source={{ uri: props.avatarImage }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: "#1F2A37",
            }}
          />
        </View>
        <View style={{ flexDirection: "column", gap: 6 }}>
          <View>
            <Text style={{ fontWeight: 700, color: "#1F2A37", fontSize: 16 }}>
              {props.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <IconEvilIcons name="location" size={20} color={"#4B5563"} />
            <Text style={{ fontSize: 14, color: "#4B5563", fontWeight: 400 }}>
              {props.address}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ width: "100%", height: 1, backgroundColor: "#E5E7EB" }} />
      <View style={{ gap: 16 }}>
        <Text style={{ fontWeight: 700, fontSize: 16, color: "#1F2A37" }}>
          {props.title}
        </Text>
        <Text style={{ fontWeight: 400, fontSize: 14, color: "#4B5563" }}>
          {props.description}
        </Text>
        <Image
          source={{ uri: props.imgUrl }}
          style={{ width: "100%", height: 249 }}
        />
      </View>
      {!openBoxCmt && (
        <View style={{ gap: 12 }}>
          <View
            style={{
              height: 37,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <IconEvilIcons name="heart" size={33} />
            </View>
            <View>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => setOpenBoxCmt(true)}
              >
                <Text style={[styles.textstyle]}>Comments</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.commentsbox}>
            <Text style={{ fontWeight: 600, fontSize: 14, color: "#1F2A37" }}>
              {props.comments.length} comments
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <IconEvilIcons name="heart" size={33} />
              <Text style={{ fontWeight: 600, fontSize: 14, color: "#1F2A37" }}>
                {props.likes}
              </Text>
            </View>
          </View>
        </View>
      )}
      {openBoxCmt && (
        <View style={styles.commentscontainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 10,
              marginBottom: 6,
              borderBottomWidth: 1,
              borderBottomColor: "#E5E7EB",
            }}
          >
            <Text style={{ fontWeight: 700, fontSize: 16, color: "#1F2A37" }}>
              Comments
            </Text>
            <TouchableOpacity onPress={() => setOpenBoxCmt(false)}>
            <Ionicons name="close" size={24} color={"#1F2A37"} />
            </TouchableOpacity>
          </View>
          <View style={{ height: "60%", marginBottom: 16 }}>
            <ScrollView>
              {/*  */}
              <View style={{ gap: 16 }}>
                {props.comments.map((item) => (
                  <View
                    key={item.id}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <View>
                      <Image
                        source={{ uri: props.avatarImage }}
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 999,
                          borderWidth: 1,
                          borderColor: "#1F2A37",
                        }}
                      />
                    </View>
                    <View style={{ flexDirection: "column", gap: 6 }}>
                      <View>
                        <Text
                          style={{
                            fontWeight: 700,
                            color: "#1F2A37",
                            fontSize: 16,
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            color: "#4B5563",
                            fontWeight: 400,
                          }}
                        >
                          {item.comment}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
              {/*  */}
            </ScrollView>
          </View>
          <View style={styles.commentsbox}>
            <TextInput style={styles.input} placeholder=" Search ..." />
            <Ionicons name="send-sharp" size={24} color={"#1F2A37"} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 342,
    flexDirection: "column",
    gap: 12,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  commentsbox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 16,
    alignItems: "center",
  },
  commentsbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 33,
    width: 267,
    borderWidth: 1,
    borderColor: "#1F2A37",
    borderRadius: 50,
    padding: 8,
  },
  button: {
    backgroundColor: "#1C2A3A",
    borderRadius: 50,
    height: 37,
    width: 267,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  textstyle: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  commentscontainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: "70%",
    padding: 16,
  },
});

export default StoryCard;
