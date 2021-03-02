import React, { Fragment, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import TaskRow from './components/TaskRow.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  //Array the all tasks
  const [tasks, guardarTasks] = useState([]);

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
    <Navbar/>
    <Card
    crearTask={crearTask}
    /> 
    
  </Fragment>
  );
};
export default App;