import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx';
import TrelloList from './components/TrelloList.jsx';
import { connect } from 'react-redux';
import TrelloButton from './components/TrelloButton.jsx';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from './actions';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
//When we Dragg and drop the lists
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists } = this.props;

    return (
    <DragDropContext onDragEnd={this.onDragEnd}>
        <NavBar />
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lists.map((list, index) => (
                <TrelloList
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
            <TrelloButton list/>
          </ListContainer>
          )}
        </Droppable>
    </DragDropContext>
    )
  };
};

//Connect with react-redux
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps) (App);