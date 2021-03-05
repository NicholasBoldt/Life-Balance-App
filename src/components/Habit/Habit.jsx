import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./Habit.css";


function Habit(props) {
    const currentRole = props.currentRole;
    const currentHabit = props.currentHabit;
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // setStreak(props.handleGetStreak(props.id));
  });

  

  return (
    <div className="Habit">
      <div>{props.name}&nbsp;&nbsp;{props.amount}&nbsp;&nbsp;  </div>

      <div>
        {props.completed ? (
        <div className="vAlign">
            <button
            className="Habit-complete btn btn-success"
            onClick={() => props.handleCompleteHabit(props.id)}>
            Completed
          </button>
          {/* &nbsp;
          <i class="material-icons orange">whatshot</i> 1 */}
        </div>
        ) : (
            <div className="vAlign">
            <button
            className="Habit-complete btn btn-default"
            onClick={() => props.handleCompleteHabit(props.id)}>
            Incomplete 
          </button>
          {/* &nbsp;
          <i class="material-icons">whatshot</i> 0 */}
        </div>
        )}
      </div>
      <div>
      <Link className="Habit-link btn btn-default" to={{
              pathname: '/habit-details',
              state: {currentRole, currentHabit}
          }}>Edit</Link>
      </div>
        
  
    </div>
  );
};

export default Habit;