// import { Text, View, StyleSheet, SafeAreaView, TextInput } from "react-native";
// import style from "react-native-datepicker/style";
// import Icons from "react-native-vector-icons/AntDesign";
// import { ListItem } from '@rneui/themed';
// import { Icon } from "@rneui/base";

// export default function AllFriends() {
//   return (
//     <SafeAreaView style={styles.container}>
//         <View style={{flexDirection: "column", gap: 14}}>
//           <View style={styles.header}>
//             <View style={{width: 24, height: 24}}>
//                 <Icons name="arrowleft" size={24} color="black" />
//             </View>
//             <View style={{ flex: 1,alignItems: "center", justifyContent: "center"}}>
//                 <Text style={{fontSize: 20, fontWeight: "bold"}}>All Friends</Text>
//             </View>
//         </View>
//         <View >
//           <View style={styles.inputContainer}>
//             <Icons name="search1" size={24} style={styles.icon} />
//             <TextInput style={styles.input} placeholder=" Search by email or username ..." />
//           </View>
//         </View>
//         </View>
//         <View>
//         <ListItem.Accordion
//   content={
//     <>
//       <Icon name="place" size={30} />
//       <ListItem.Content>
//         <ListItem.Title>List Accordion</ListItem.Title>
//       </ListItem.Content>
//     </>
//   }
//   isExpanded={expanded}
//   onPress={() => {
//     setExpanded(!expanded);
//   }}
// >
//   {list2.map((l, i) => (
//     <ListItem key={i} onPress={log} bottomDivider>
//       <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />
//       <ListItem.Content>
//         <ListItem.Title>{l.name}</ListItem.Title>
//         <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
//       </ListItem.Content>
//       <ListItem.Chevron />
//     </ListItem>
//   ))}
// </ListItem.Accordion>
//         </View>
//         <View></View>
//     </SafeAreaView>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: 8,
//     paddingHorizontal: 24,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "white",
//     borderRadius: 8,
//     backgroundColor: "#f3f4f6",
//     height: 40,
//     marginHorizontal: 24,
//     paddingHorizontal: 16,
//   },
//   icon: {
//     marginRight: 8, // Space between icon and input
//     color: "#9CA3AF",
//   },
//   input: {
//     flex: 1, // Takes up the rest of the space
//     fontSize: 14,
//     color: "#9CA3AF",
//   },
// });