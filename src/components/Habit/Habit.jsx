import React, {useState, useEffect} from 'react'
import "./Habit.css";

function Habit(props) {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setStreak();
  });

  

  return (
    <div className="Habit">
      <div>{props.name}&nbsp;&nbsp;{props.amount}  </div>

      <div>
        {props.completed ? (
          <button
            className="btn btn-success"
            onClick={() => props.handleCompleteHabit(props.id)}>
            Completed
          </button>
        ) : (
          <button
            className="btn btn-default"
            onClick={() => props.handleCompleteHabit(props.id)}>
            Incomplete
          </button>
        )}
      </div>
  
    </div>
  );
};

export default Habit;