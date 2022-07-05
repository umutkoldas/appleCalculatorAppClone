import React, { useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import CalculatorButton from "./src/components/CalculatorButton";
import styles from "./styles";

const App = () => {
  const [addNumber, setAddNumber] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [lastButton, setLastButton] = useState(null);
  const [comma, setComma] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  const deleteNumbers = () => {
    setActiveButton(false);
    setAddNumber("0");
    setMemory(null);
    setOperator(null);
    setLastButton(null);
    setComma(false);
  };
  const negativeNumbers = () => {
    setAddNumber(addNumber * -1);
    setLastButton("number");
  };
  const percentageNumbers = () => {
    setAddNumber(addNumber / 100);
    setMemory(null);
    setOperator(null);
    setLastButton("number");
  };

  const addComma = () => {
    comma
      ? null
      : (setAddNumber(addNumber + "."),
        setComma(true),
        setLastButton("number"));
  };
  // console.log({lastButton, operator, memory});
  // console.log(typeof memory, typeof addNumber);

  const writeNumber = (number) => {
    if (lastButton === "number") {
      if (addNumber !== "0") {
        memory
          ? setAddNumber(addNumber + number)
          : !comma
          ? setAddNumber(number)
          : setAddNumber(addNumber + number);
      } else {
        setAddNumber(number);
      }
      setMemory(addNumber);
    } else {
      setAddNumber(number);
      setMemory(addNumber);
    }
    setLastButton("number");
  };

  const equalsTo = () => {
    setActiveButton(false);
    setLastButton("number");
    lastButton !== "operator" && setAddNumber(calculate());
    setOperator(null);
    setMemory(null);
  };

  const calculate = () => {
    const intMemory = parseFloat(memory);
    const intAddNumber = parseFloat(addNumber);
    switch (operator) {
      case "+":
        setOperator("+");
        return intMemory + intAddNumber;
      case "-":
        setOperator("-");
        return intMemory - intAddNumber;
      case "*":
        setOperator("x");
        return intMemory * intAddNumber;
      case "/":
        setOperator("÷");
        return intMemory / intAddNumber;
      default:
        return intAddNumber;
    }
  };
  const pressOperator = (currentOperator) => {
    setActiveButton(currentOperator);
    if (operator && lastButton !== "operator") {
      setAddNumber(calculate());
      setLastButton("operator");
      setOperator(currentOperator);
    } else if (operator && lastButton === "operator") {
      setOperator(currentOperator);
      setMemory(calculate());
    } else {
      setMemory(parseFloat(addNumber));
      setOperator(currentOperator);
      setLastButton("operator");
    }
  };

  const arrayForCalculate = [
    {
      text: "C",
      onPress: deleteNumbers,
      type: "functional",
    },
    {
      text: "+/-",
      onPress: negativeNumbers,
      type: "functional",
    },
    {
      text: "%",
      onPress: percentageNumbers,
      type: "functional",
    },
    {
      text: "÷",
      onPress: () => pressOperator("÷"),
      type: "operator",
    },
    {
      text: "7",
      onPress: () => writeNumber("7"),
      type: "number",
    },
    {
      text: "8",
      onPress: () => writeNumber("8"),
      type: "number",
    },
    {
      text: "9",
      onPress: () => writeNumber("9"),
      type: "number",
    },
    {
      text: "x",
      onPress: () => pressOperator("x"),
      type: "operator",
    },
    {
      text: "4",
      onPress: () => writeNumber("4"),
      type: "number",
    },
    {
      text: "5",
      onPress: () => writeNumber("5"),
      type: "number",
    },
    {
      text: "6",
      onPress: () => writeNumber("6"),
      type: "number",
    },
    {
      text: "-",
      onPress: () => pressOperator("-"),
      type: "operator",
    },
    {
      text: "1",
      onPress: () => writeNumber("1"),
      type: "number",
    },
    {
      text: "2",
      onPress: () => writeNumber("2"),
      type: "number",
    },
    {
      text: "3",
      onPress: () => writeNumber("3"),
      type: "number",
    },
    {
      text: "+",
      onPress: () => pressOperator("+"),
      type: "operator",
    },
    {
      text: "0",
      onPress: () => writeNumber("0"),
      type: "zeroNumber",
    },
    {
      text: ".",
      onPress: () => addComma(),
      type: "number",
    },
    {
      text: "=",
      onPress: () => equalsTo(),
      type: "operator",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Text style={styles.number}>{addNumber}</Text>
        )}
        contentContainerStyle={styles.flatListContainer}
        numColumns={4}
        data={arrayForCalculate}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <CalculatorButton
              isActive={item.text === activeButton}
              item={item}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default App;
