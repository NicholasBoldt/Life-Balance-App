import React, {useState, useEffect} from 'react'
import "./Habit.css";

function Habit(props) {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // setStreak(props.handleGetStreak(props.id));
  });

  

  return (
    <div className="Habit">
      <div>{props.name}&nbsp;&nbsp;{props.amount}  </div>

      <div>
        {props.completed ? (
        <div className="vAlign">
            <button
            className="btn btn-success"
            onClick={() => props.handleCompleteHabit(props.id)}>
            Completed
          </button>
          {/* &nbsp;
          <i class="material-icons orange">whatshot</i> 1 */}
        </div>
        ) : (
            <div className="vAlign">
            <button
            className="btn btn-default"
            onClick={() => props.handleCompleteHabit(props.id)}>
            Incomplete 
          </button>
          {/* &nbsp;
          <i class="material-icons">whatshot</i> 0 */}
        </div>
        )}
     
      </div>
        
  
    </div>
  );
};

export default Habit;