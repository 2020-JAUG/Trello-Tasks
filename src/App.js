import React from 'react';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import List from './components/List.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
    <Navbar/>
    <Card/>  
    <List titulo="Hola"/>
 
  </>
  );
};
export default App;


//<Cards/>    
//import Cards from './components/Cards.jsx';