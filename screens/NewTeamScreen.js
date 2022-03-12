import {StyleSheet, Text, View, Button} from "react-native";
import React from "react";
import colors from "../assets/colors";
import {NavigationContainer} from "@react-navigation/native";

const NewTeamScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New Team Screen</Text>
      <Button title="New Team" onPress={() => alert("Next")} />
    </View>
  );
};

export default NewTeamScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.DARK,
    alignItems: "center",
    justifyContent: "center",
  },
  // text: {color: colors.LIGHT, fontSize: 17},
});
