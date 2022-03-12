import {StyleSheet, SafeAreaView, Text, View, TextInput} from "react-native";
import React from "react";
import {useApp} from "../context/AppProvider";

const Input = () => {
  const {number, points, players, setPoints, handleOnChange} = useApp();
  return (
    <SafeAreaView>
      <Text style={styles.label}>Scorer Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="scorer number is..."
        value={players.number}
        onChangeText={(value) => handleOnChange(value, "number")}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Points Scored:</Text>
      <TextInput
        style={styles.input}
        placeholder="points scored..."
        onChangeText={(value) => handleOnChange(value, "points")}
        value={players.points}
        keyboardType="numeric"
      />
      <Text>
        number {number} scored {points}p
      </Text>
    </SafeAreaView>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  label: {},
  input: {
    borderWidth: 0.7,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
