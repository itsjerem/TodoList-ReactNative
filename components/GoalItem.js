import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
} from "react-native";

const GoalItem = ({ title, onDelete, onEdit }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedGoal, setEditedGoal] = useState(title);

  const handleDelete = () => {
    setDeleteModalVisible(false);
    onDelete();
  };

  const handleEdit = () => {
    setEditModalVisible(false);
    onEdit(editedGoal);
  };

  return (
    <View style={styles.listItem}>
      <Text>{title}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => setEditModalVisible(true)}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDeleteModalVisible(true)}>
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={deleteModalVisible} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this goal?
            </Text>
            <Button title="Yes" onPress={handleDelete} />
            <Button title="No" onPress={() => setDeleteModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Modal visible={editModalVisible} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={setEditedGoal}
              value={editedGoal}
            />
            <Button title="Confirm" onPress={handleEdit} />
            <Button title="Cancel" onPress={() => setEditModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#white",
    borderColor: "#gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  deleteButtonText: {
    color: "red",
    fontWeight: "bold",
  },
  editButtonText: {
    color: "red",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
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
});

export default GoalItem;
