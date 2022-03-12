import {StyleSheet, Text, View, ScrollView} from "react-native";
import React from "react";
import {useApp} from "../context/AppProvider";

const Output = () => {
  const {players} = useApp();
  const sortedPlayers = players.sort((a, b) => a.number - b.number);
  return (
    <View>
      <ScrollView>
        {sortedPlayers.map((player) => {
          return (
            <View style={styles.row} key={player.id}>
              <Text>{player.number}</Text>
              <Text>{player.points}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Output;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.5,
    marginVertical: 7,
  },
});
