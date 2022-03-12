import {StyleSheet, SafeAreaView, Text, View} from "react-native";
import React from "react";
import colors from "../assets/colors";
import Output from "../components/Output";

const ListScorersScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.row}>
        <Text style={styles.textHeader}>nummer</Text>
        <Text style={styles.textHeader}>points</Text>
      </View>
      <Output />
    </SafeAreaView>
  );
};

export default ListScorersScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderWidth: 0.3,
    justifyContent: "space-around",
    marginTop: 17,
    backgroundColor: "coral",
  },
  textHeader: {
    fontSize: 22,
    textTransform: "uppercase",
  },
  // text: {color: colors.LIGHT, fontSize: 17},
});
