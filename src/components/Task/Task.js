import React from 'react';
import "./Task.css"


const Task = (props) => (
  <div className="Task">
    <div>{props.name} </div>
    &nbsp;&nbsp;
    <div>
    <button className="btn-small grey" onClick={()=>{props.handleDeleteTask(props.taskId)}}>INCOMPLETE</button>
    </div>
    
  </div>
);

export default Task;