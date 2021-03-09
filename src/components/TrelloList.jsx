import React from 'react';
import TrelloCard from './TrelloCard.jsx';
import TrelloButton from './TrelloButton.jsx';
import {Droppable} from 'react-beautiful-dnd';



const TrelloList = ({ title, cards, listID }) => (
<>
<Droppable droppableId={String(listID)} >
{ (provided) => (
  <div
    {...provided.droppableProps}
    ref={provided.innerRef}
    style={styles.container}
  >
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
</>
 );

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