import React, {createContext, useContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [number, setNumber] = useState("");
  const [points, setPoints] = useState("");
  const [player, setPlayer] = useState({id: "", number: "", points: ""});
  const [players, setPlayers] = useState([]);

  // const totPoints = players.reduce((a, c) => a + c.points, 0);

  const findScorers = async () => {
    const result = await AsyncStorage.getItem("players");
    // console.log(result);
    if (result !== null) setPlayers(JSON.parse(result));
  };

  useEffect(() => {
    findScorers();
  }, []);

  const handleOnChange = (value, name) => {
    // setPlayer({[name]: value});
    setPlayer({...player, [name]: value});
  };
  const onAdd = async () => {
    // const scorers = [...players];

    if (!player.points || !player.number) return;
    const newPlayer = {...player, id: Date.now().toString};
    setPlayers([...players, newPlayer]);
    setPlayer({id: "", number: "", points: ""});
    await AsyncStorage.setItem("players", JSON.stringify([...players]));

    // const position = scorers.map((player) => player.number).indexOf(number);
    // if (position !== -1) {
    //   scorers[position] = {
    //     ...scorers[position],
    //     points: scorers[position].points + parseInt(points),
    //   };

    //   setPlayers(scorers);
    // } else {
    //   const newScorer = {
    //     id: Date.now(),
    //     number: number,
    //     points: parseInt(points),
    //   };
    //   setPlayers([...players, newScorer]);
    // }

    // setNumber("");
    // setPoints("");
  };
  console.log(players);
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
        player,
        setPlayer,
        // totPoints,
        handleOnChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
export default AppProvider;
