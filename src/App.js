import React from 'react';
import './App.css';
import Nav from './header/Nav.jsx';
import TodoForm from './components/TodoForm.jsx';
import Cards from './cards/Cards';
import Lists from './components/Lists.jsx';



function App() {
  return (
    <div className="App.css">
      
      <Nav />
      <TodoForm/>
      <Cards />
      <Lists/>
    </div>
  );
}
export default App;