import React from 'react';
import Nav from './header/Nav.jsx';
import TodoForm from './components/TodoForm.jsx';
import Cards from './cards/Cards';
import Lists from './components/Lists.jsx';




function App() {
  return (
    <>
      
      <Nav />
      <TodoForm/>
      <Cards />
      <Lists  />
      
    </>
  );
}
export default App;