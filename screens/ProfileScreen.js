import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
const ProfileScreen = ({ route, navigation }) => {
 const { user } = route.params;
 console.log("user from google", user);
 return (
 <View style={styles.container}>
 <Text>Profile Screen</Text>
 <Text>Welcome {user.name} !</Text>
 <Image style={styles.image} source={{ uri:
user.photoUrl }} />
 <Text></Text>
 <Button title="Log out" onPress={() =>
navigation.goBack()} />
 </View>
 );
};
export default ProfileScreen;
const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: "center",
 alignItems: "center",
 },
 image: {
 marginTop: 15,
 width: 150,
 height: 150,
 borderColor: "rgba(0,0,0,0.2)",
 borderWidth: 3,
 borderRadius: 150,
 },
});