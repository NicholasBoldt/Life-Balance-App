import React from 'react';
import "./Task.css"


const Task = (props) => (
  <div className="Task">
    <div>{props.name} </div>
    <button className="btn btn-default" onClick={()=>{props.handleDeleteTask(props.taskId)}}>Complete Task</button>
  </div>
);

export default Task;