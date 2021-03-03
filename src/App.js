import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import TaskRow from './components/TaskRow.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddList from './components/AddList.jsx';



function App() {

  //Tasks in local storage
  let tasksIniciales = JSON.parse(localStorage.getItem('tasks'));
  if( !tasksIniciales ) {
    tasksIniciales = [];
  }
  
  //Array the all tasks
  const [tasks, guardarTasks] = useState(tasksIniciales);

  //UseEffect to update when there are changes on the component
  useEffect( () => {
    let tasksIniciales = JSON.parse(localStorage.getItem('tasks'));

    if(tasksIniciales) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
    }

  }, [tasks]);

  //Function to take the current tasks and take the new ones
  const crearTask = task => { guardarTasks ([ ...tasks, task ])};

  //Function remove a task by you id
  const eliminarTask = id => {
  const nuevasTasks = tasks.filter(task => task.id !== id)
  guardarTasks(nuevasTasks);


}
  return (
    <Fragment>
        <TaskRow />
        <Navbar />
        <Card 
          crearTask={crearTask}
        />
        {tasks.map(task => (
          <AddList
          key={task.id}
          task={task}
          />
        ))} 
</Fragment>
  );
};
export default App;