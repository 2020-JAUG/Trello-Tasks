import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Card = ({ crearTask, eliminarTask }) => { 
    //Creating tasks in the main state
    const [task, setTaks] = useState({ 
        text: '',
        doing: '',
        hecho: '',
        card: ''
    })

    const [setError] = useState(false)

    //Sending state
    const [newTask, setTask] = useState([])

    //Function to upgrade the input, and We use array destructuring
    const handleChange = (e) => {
        //console.log(e.target.value)
        setTaks( {...task, [e.target.name]: e.target.value})
    };

    //Extract the values
    const { text, doing, hecho, card } = task;    

    //Sending data
    const handleSubmit =  (e) => {
        e.preventDefault();
       //console.log(task.text + ' ' + task.doing)
        setTask([...newTask, task]) 


    //Validating the task. NOTE: Trim removes blanks
    if(text.trim() === ' ' || doing.trim() === ' ' || hecho.trim() === ' ' || card.trim() === ' ' ){
        setError(true);
        return;
    };

    //Assign an id
    task.id= uuidv4();
    
    //Create task in main state
    crearTask(task);

    //Reset form
    setTaks({
        text: '',
        doing: '',
        hecho: '',
        card: ''
    })
    }


    return ( 
        <>        
        <div className="row mx-4">
            <div className="col-md-3">
                <div className= "card mt-5">
                    <div className="card-header card-wrapper">Tasks
                    </div>
                        <div className="card-body" onSubmit={handleSubmit}><div>{handleSubmit.map}</div>
                            <input 
                                type="text" 
                                name="text"
                                onChange={handleChange}
                                value={text} 
                                className="form-control" 
                                placeholder=" + add a list"                           
                           />
                           
                                <div className="mt-3">
                                    <button 
                                        type="button"
                                        name="agregar" 
                                        value="submit" 
                                        onClick={handleSubmit} 
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
                                onChange={handleChange}
                                value={doing} 
                                className="form-control" 
                                placeholder=" + add a list"
                            />
                        </div>
                </div>
            </div> 

            <div className="col ml-3">
                <div className="card mt-5">
                    <div className="card-header">Do
                    </div>
                        <div className="card-body">
                            <input 
                                type="text"
                                name="hecho"
                                onChange={handleChange}
                                value={hecho} 
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
                        onChange={handleChange}
                        value={card} 
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

/*

 <button
                                    className="button eliminar primary"
                                    oncClick={() => eliminarTask(task.id)}
                                    Eliminar></button>

*/