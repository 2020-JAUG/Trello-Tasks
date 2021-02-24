import React, { useState } from 'react';

const Card = () => { 

    const [newTask, setTask] = useState([])

    const [task, setTaks] = useState([])


    const handleInput = (e) => {
        console.log(e.target.value, e.target.name)
    }

    const handleSubmit = () => {
        
        console.log('Sending..')
    }


    return ( 
        <>        
        <div className="row mx-4">
            <div className="col-md-3">
                <div className= "card mt-5">
                    <div className="card-header card-wrapper">Tasks
                    </div>
                        <div className="card-body"><div>{handleSubmit.map}</div>
                            <input 
                                type="text" 
                                name="task1" 
                                onChange={handleInput} 
                                className="form-control" 
                                placeholder=" + add a list"                           
                           />
                                <div className="mt-3">
                                    <button 
                                        type="button" 
                                        value="submit" 
                                        onClick={ () => handleSubmit()} 
                                        className="form-control"
                                    >Add</button>
                                </div>
                        </div>
                </div>
            </div>
                
            <div className="col-md-3">
                <div className= "card mt-5">
                    <div className="card-header">Doing
                    </div>
                        <div className="card-body">
                            <input 
                                type="text" 
                                name="doing" 
                                onChange={handleInput} 
                                className="form-control" 
                                placeholder=" + add a list"
                            />
                        </div>
                </div>
            </div> 

            <div className="col-md-3">
                <div className= "card  mt-5">
                    <div className="card-header">Do
                    </div>  
                        <div className="card-body">
                            <input 
                                type="text"
                                name="do" 
                                onChange={handleInput} 
                                className="form-control" 
                                placeholder=" + add a list"
                            />
                        </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card mt-5">
                    <div className="card-header">
                        <input 
                        type="text" 
                        name="card" 
                        onChange={handleInput} 
                        className="form-control" 
                        placeholder=" + add a card"
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
 
export default Card;