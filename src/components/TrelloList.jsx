import React from 'react';
import TrelloCard from './TrelloCard.jsx';
import TrelloButton from './TrelloButton.jsx';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from "styled-components"
import { deleteCard } from '../actions/CardActions.jsx';

const ListContainer = styled.div`
background-color: #dfe3e6;
border-radius: 3px;
width: 300px;
padding: 8px;
height: 100%;
margin-right: 8px;
`;


const TrelloList = ({ title, cards, listID, index }) => {

  return (
    <Draggable draggableId = {String(listID)} index = {index}>
      {provided => (
        <ListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
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
                      listID={listID}
                      deleteCard={deleteCard}
                    />
                  ))}
                  {provided.placeholder}
                  <TrelloButton listID={listID} />
                </div>
              )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
);
};

export default TrelloList;