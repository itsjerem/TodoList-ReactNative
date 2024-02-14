import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setGoals((currentGoals) => [...currentGoals, goalTitle]);
  };

  const removeGoalHandler = (goalIndex) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal, index) => index !== goalIndex);
    });
  };

  const editGoalHandler = (goalIndex, newTitle) => {
    setGoals((currentGoals) => {
      return currentGoals.map((goal, index) =>
        index === goalIndex ? newTitle : goal
      );
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <ScrollView>
        {goals.map((goal, index) => (
          <GoalItem
            key={index}
            title={goal}
            onDelete={() => removeGoalHandler(index)}
            onEdit={(newTitle) => editGoalHandler(index, newTitle)}
          />
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
});
