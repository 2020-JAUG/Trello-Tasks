import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {Draggable} from 'react-beautiful-dnd';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { deleteCard } from '../actions';
import Icon from "@material-ui/core/Icon";

const CardContainer = styled.div`
margin-bottom: 8px;
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 29px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;


const TrelloCard = ({ text, id, index, listID }) => {

  const dispatch = useDispatch();

    const handleDeleteCard = () => {
      console.log(index)
       return (deleteCard(id, listID, dispatch, index) );
      };

    return (
    <>
    <Draggable draggableId={String(id)} index={index}>
        {provided => (
            <CardContainer
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
                <Card className='card'>
                <DeleteButton fontSize="small" onClick={() => handleDeleteCard(id, index) }>
                    Delete
                </DeleteButton>

                <CardContent>
                    <Typography gutterBottom>{text}</Typography>

                </CardContent>
                </Card>
            </CardContainer>
        )}
    </Draggable>
    </>
    );
};

export default TrelloCard;