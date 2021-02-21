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
    return <button>Completed</button>;
}

function incompleteButton(props) {
    return <button>Incomplete</button>;
}

const Habit = (props) => (
      <div className="flex-h">
         <h2>{props.name} </h2>
         <h2>{props.amount} </h2>
         <div>{isCompleted(props.completed)}</div>

   
    
      </div>
 );

export default Habit;