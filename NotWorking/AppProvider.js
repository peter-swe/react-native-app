import React, {createContext, useContext, useState, useEffect} from "react";
import {Keyboard} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [number, setNumber] = useState("");
  const [points, setPoints] = useState("");
  const [players, setPlayers] = useState([]);

  const saveData = async (players) => {
    try {
      await AsyncStorage.setItem("scorers", JSON.stringify(players));
    } catch (e) {
      console.log(e);
    }
  };

  const getScorers = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("scorers");
      console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getScorers();
  }, []);

  const totPoints = players.reduce((a, c) => a + c.points, 0);

  const onAdd = async () => {
    const scorers = [...players];

    if (!number || !points) return;

    const position = scorers.map((player) => player.number).indexOf(number);
    if (position !== -1) {
      scorers[position] = {
        ...scorers[position],
        points: scorers[position].points + parseInt(points),
      };

      setPlayers(scorers);
    } else {
      const newScorer = {
        id: Date.now(),
        number: number,
        points: parseInt(points),
      };
      setPlayers([...players, newScorer]);
    }

    saveData(players);
    setNumber("");
    setPoints("");
    Keyboard.dismiss();
  };
  // console.log(players);
  // console.log(typeof players);

  return (
    <AppContext.Provider
      value={{
        players,
        setPlayers,
        number,
        setNumber,
        points,
        setPoints,
        onAdd,

        totPoints,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
export default AppProvider;
