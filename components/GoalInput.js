import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
    setModalVisible(false);
  };

  return (
    <View style={styles.inputContainer}>
      <Button title="Add Goal" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Add a new Target/Goal/Objective/Task/ntm"
              style={styles.input}
              onChangeText={goalInputHandler}
              value={enteredGoal}
            />
            <Button title="ADD" onPress={handleAddGoal} />
            <Button title="CANCEL" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderColor: "#gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 100,
    borderRadius: 5,
    backgroundColor: "#white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingTop: 75,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
  },
});

export default GoalInput;
