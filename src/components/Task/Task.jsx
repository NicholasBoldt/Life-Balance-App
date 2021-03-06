import React from 'react';
import "./Task.css"


const Task = (props) => (
  <div className="Task">
    <div>{props.name} </div>
    <div>
    <button className="btn-small grey" onClick={()=>{props.handleDeleteTask(props.taskId)}}>Complete Task</button>
    </div>
    
  </div>
);

export default Task;