import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CalculatorButton = ({item}) => {
  const {text, type, onPress} = item;
  return (
    <TouchableOpacity
      style={styles[type]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text style={styles[`${type}Text`]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
