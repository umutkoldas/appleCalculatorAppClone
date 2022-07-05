import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const CalculatorButton = ({ item, isActive }) => {
  const { text, type, onPress } = item;
  return (
    <TouchableOpacity
      style={isActive ? styles.activeButton : styles[type]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={isActive ? styles.activeButtonText : styles[`${type}Text`]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
