import React,{useState} from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function ToDoForm({addTask}) {
  const [taskText, setTaskText] = useState('');

  
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a new task..." onChangeText={(text) => setTaskText(text)}
        value={taskText} />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 30,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#00FF00",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
