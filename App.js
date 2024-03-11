import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import TodoList from './TodoList';
import ToDoForm from './TodoForm';


function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
  
  return (
    <SafeAreaView>
      <TodoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
