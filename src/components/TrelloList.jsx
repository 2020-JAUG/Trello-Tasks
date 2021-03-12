import React from 'react';
import TrelloCard from './TrelloCard.jsx';
import TrelloButton from './TrelloButton.jsx';
import { Droppable, Draggable } from 'react-beautiful-dnd';



const TrelloList = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId = {String(listID)} index = {index}>

  {provided => (
    <div
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      style={styles.container}
    >
    <Droppable droppableId = {String(listID)} type="card">
 {provided => (
  <div {...provided.droppableProps} ref={provided.innerRef}>
    <h4>{title}</h4>
    {cards.map((card, index) => (
      <TrelloCard
        key={card.id}
        index={index}
        text={card.text}
        id={card.id}
      />
      ))}
      <TrelloButton listID={listID} />
      {provided.placeholder}
  </div>
  )}
</Droppable>
</div>
)}
</Draggable>
);
};

 const styles = {
   container: {
     backgroundColor: "#dfe3e6",
     /*backgroundColor: "transparent",*/
     borderRadius: 4,
     marginTop: 16,
     width: 300,
     padding: 8,
     marginRight: 20,
     height: '100%',
     marginLeft: 40
   }
 };

export default TrelloList;