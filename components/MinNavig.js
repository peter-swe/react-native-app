import {StyleSheet} from "react-native";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import NewTeamScreen from "../screens/NewTeamScreen";
import PlayerScoredScreen from "../screens/PlayerScoredScreen";
import ListScorersScreen from "../screens/ListScorersScreen";

const Tab = createBottomTabNavigator();

const MinNavig = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        TabBarActiveTintColor: "coral",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen name="New Team" component={NewTeamScreen} />
      <Tab.Screen name="Player Scored" component={PlayerScoredScreen} />
      <Tab.Screen
        name="Lista poäng per spelare"
        component={ListScorersScreen}
      />
    </Tab.Navigator>
  );
};

export default MinNavig;

const styles = StyleSheet.create({});
