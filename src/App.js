import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import TrelloList from './components/TrelloList.jsx';
import { connect } from 'react-redux';
import TrelloButton from './components/TrelloButton.jsx';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { sort } from './actions';

class App extends Component {
//When we Dragg and drop the lists
  onDragEnd = (result) => {
    const { destination, source, DraggableID } = result;

    if(!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        Draggable
      )
    );
  };


  render() {

    const { lists } = this.props;

    return (
    <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
        <Navbar />
          <div style={styles.listsContainer}>
            {lists.map(list => (
              <TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
                />
            ))}
            <TrelloButton list/>
          </div>
      </div>
    </DragDropContext>
    )
  };
};

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
}

//Connect with react-redux
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps) (App);