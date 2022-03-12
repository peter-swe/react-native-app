import {StyleSheet, Text, View, Button, Keyboard} from "react-native";
import React from "react";
import colors from "../assets/colors";
import Input from "../components/Input";
import {useApp} from "../context/AppProvider";
import TotPoints from "../components/TotPoints";

const PlayerScoredScreen = () => {
  const {onAdd, players} = useApp();
  return (
    <View style={styles.container}>
      {players.length ? <TotPoints /> : null}

      <Input />
      <View style={styles.btnContainer}>
        <Button title="ADD" onPress={onAdd} />
        <Button title="hide" onPress={() => Keyboard.dismiss()} />
      </View>
    </View>
  );
};

export default PlayerScoredScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.DARK,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
  },
  // text: {color: colors.LIGHT, fontSize: 17},
});
