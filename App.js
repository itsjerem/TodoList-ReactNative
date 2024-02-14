import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setEnteredGoal("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nouvel objectif"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Ajouter" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {goals.map((goal, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 75,
    paddingHorizontal: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "#gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#white",
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#white",
    borderColor: "#gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});
