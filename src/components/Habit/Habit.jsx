import React from 'react';

function isCompleted(completed) {
    if (completed === true) {
       return completedButton(); 
    }
    else {
        return incompleteButton(); 
    }
}

function completedButton(props) {
    return <button className="btn btn-default">Completed</button>;
}

function incompleteButton(props) {
    return <button className="btn btn-default">Incomplete</button>;
}

const Habit = (props) => (
      <div className="flex-h">
         <div>{props.name} </div>
         <div>{props.amount} </div>
         <div>{isCompleted(props.completed)}</div>

   
    
      </div>
 );

export default Habit;