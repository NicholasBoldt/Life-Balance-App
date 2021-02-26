import React from 'react';





const Task = (props) => (
  <div>
    <div>{props.name} </div>
    <button className="btn btn-default" onClick={()=>{props.handleDeleteTask(props.taskId)}}>Complete Task</button>
  </div>
);

export default Task;