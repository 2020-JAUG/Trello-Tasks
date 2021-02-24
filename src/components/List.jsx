import React from 'react';
import TaskRow from './TaskRow.jsx';

const List = ({titulo}) => ( 
    <div className="row mx-4">
        <div className="col-md-3">
            <div className="card mt-3">
                <h4>{titulo}</h4>
                <TaskRow/>
            </div>
        </div>
    </div>
 );

export default List;