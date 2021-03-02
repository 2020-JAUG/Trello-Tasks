import { Card } from '@material-ui/core';
import React from 'react';



const AddList = ({ task }) => ( 
<>
    <div className="task">
    <div className="row mx-2">
      <div div className="col-md-3">
        <Card
          { ...task.text }  
        />
      </div>
    </div>
    </div>
  
</>
 );

export default AddList;