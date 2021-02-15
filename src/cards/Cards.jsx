import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 

        return (
    
    <div className="row mx-4">
        <div className="col-md-3">
            <div className= "card mt-5">
                <div className="card-header">Task 1
                </div>
                    <div className="card-body">
                        <input type="text" name="title" className="form-control" placeholder=" + add a list">
                        </input>
                    </div>
            </div>
        </div>
            
        <div className="col-md-3">
            <div className= "card  mt-5">
                <div className="card-header">Task 2
                </div>
                    <div className="card-body">
                        <input type="text" name="title" className="form-control" placeholder=" + add a list">
                        </input>
                    </div>
            </div>
        </div>
    </div>
    );
    }
} 
export default Cards;
