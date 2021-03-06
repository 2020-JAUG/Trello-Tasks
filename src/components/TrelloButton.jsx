import React from 'react';
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

class TrelloButton extends React.Component {
    //Create the state to the form and function
    state = {
        formOpen: false,
        text: ''
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    closeForm = () => {
        this.setState({
            formOpen: false
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const {dispatch} = this.props;
        const {text} = this.state;

        if(text) {
            this.setState({
                text: ''
            })
            dispatch(addList(text))
        }

        return;
    };

    handleAddCard = () => {
        const { dispatch, listID} = this.props;
        const {text} = this.state;

        if(text) {
            this.setState({
                text: ''
            })
            dispatch(addCard( listID, text ))
        };
    };

     handleDeleteCard = () => {
        const { dispatch, listID, id } = this.props;


        console.log(listID);
        dispatch(this.handleDeleteCard (id, listID));
      };

    renderAddButton = () => {
        const { list } = this.props;

    //We create the different buttons with conditionals
    const buttonText = list ? "Add another list" : "Add another card"
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
        <div
        onClick={this.openForm}
        style={{
            ...styles.openFormButtonGroup,
            opacity: buttonTextOpacity,
            color: buttonTextColor,
            backgroundColor: buttonTextBackground
        }}>
            <Icon>add</Icon>
                <p>{buttonText}</p>
        </div>
       );
    };

    renderForm = () => {
        const { list } = this.props;

        const placeholder = list ? 'Enter list title' : 'Enter a title for this card';

        const buttonTitle = list ? 'Add List' : 'Add Card';

        return <div>
            <Card
                style={{
                    minHeight: 85,
                    minWidth: 272,
                    padding: "6px 8px 2px"
                }}
            >
                <Textarea
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize: 'none',
                        width: '100%',
                        overflow: 'hidden',
                        outline: 'none',
                        border: 'none'
                    }}
                />
            </Card>
            <div style={styles.formButtonGroup}>
                <Button
                    onClick={this.handleDeleteCard}
                    onMouseDown={ list ? this.handleAddList : this.handleAddCard }
                    variant='contained'
                    style={{ color: 'white', backgroundColor: '#5aac44' }}
                    >{buttonTitle} {" "}
                </Button>
                <Icon style={{ marginLeft: 10, cursor: 'pointer' }}>close</Icon>
            </div>
        </div>
    };
//A conditional to rendering
 render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    };
};

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 170,
        paddingLeft: 10,
        marginTop: 12
    },
    formButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 8,
    }
};

export default connect () (TrelloButton);