import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {useApp} from "../context/AppProvider";

const TotPoints = () => {
  const {totPoints} = useApp();
  return (
    <View>
      <Text style={styles.text}>
        Lagets poäng:
        <Text style={styles.totP}>{totPoints}</Text>
      </Text>
    </View>
  );
};

export default TotPoints;

const styles = StyleSheet.create({
  totP: {
    color: "coral",
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 22,
  },
});
