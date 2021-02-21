import React, { Component } from 'react';
import './Cards.css';
import { todos } from '../todos.json';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
        todos
         }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleInput(e) {
        console.log(e.target.value, e.target.name);
    }

    handleSubmit = () => {
        
        console.log('Sending..');
    }

    handleAddTodo () {
        this.state({
          todos: [...this.state.todos,]
        })
      }

    render() {    
        return (
    <div className="row mx-4">
        <div className="col-md-3">
            <div className= "card mt-5">
                <div className="card-header">Tasks
                </div>
                    <div className="card-body"><div>{this.handleSubmit.map}</div>
                        <input type="text" name="task1" onChange={this.handleInput} className="form-control" placeholder=" + add a list">
                        </input>
                            <div className="mt-3">
                                <button type="button" value="submit" onClick={ () => this.handleSubmit()} className="form-control">Add
                                </button>
                            </div>
                    </div>
            </div>
        </div>
            
        <div className="col-md-3">
            <div className= "card mt-5">
                <div className="card-header">Doing
                </div>
                    <div className="card-body">
                        <input type="text" name="doing" onChange={this.handleInput} className="form-control" placeholder=" + add a list">
                        </input>
                    </div>
            </div>
        </div> 

        <div className="col-md-3">
            <div className= "card  mt-5">
                <div className="card-header">Do
                </div>
                    <div className="card-body">
                        <input type="text" name="do" onChange={this.handleInput} className="form-control" placeholder=" + add a list">
                        </input>
                    </div>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card mt-5">
                <div className="card-header">
                    <input type="text" name="card" onChange={this.handleInput} className="form-control" placeholder=" + add a card">
                    </input>
                </div>
            </div>
        </div>
    </div>
    );
    };
};
export default Cards;
