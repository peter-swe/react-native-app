import {StyleSheet, TouchableOpacity, Text, View} from "react-native";
import React from "react";
import {AntDesign} from "@expo/vector-icons";

const ArrowRight = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(" ")}>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ArrowRight;

const styles = StyleSheet.create({});
