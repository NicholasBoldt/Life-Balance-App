import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./Habit.css";


function Habit(props) {
    const currentRole = props.currentRole;
    const currentHabit = props.currentHabit;
  const [streak, setStreak] = useState();

  useEffect(async () => {
    setStreak(await props.handleGetStreak(props.id));
    console.log("use effect:", streak)
  });

 

  

  return (
    <div className="Habit">
    {props.displayEdit ? <Link className="Habit-link" to={{
              pathname: '/habit-details',
              state: {currentRole, currentHabit}
          }}> <div className="Habit-text">{props.name}&nbsp;&nbsp;{props.amount}&nbsp;&nbsp;  </div></Link> : <div>{props.name}&nbsp;&nbsp;{props.amount}&nbsp;&nbsp;  </div>}
     


      <div className="Habit-controls">
      {props.completed ? 
        <div className="align-vertical Streak-orange">{streak}<i class="material-icons">whatshot</i></div>
        :
        <div className="align-vertical Streak-grey">{streak}<i class="material-icons">whatshot</i></div>}


        {props.completed ? (
        <div>
            <button
            className="Habit-complete btn-small"
            onClick={() => props.handleCompleteHabit(props.id)}>
            Completed
          </button>
      
        </div>
        ) : (
            <div >
            <button
            className="Habit-complete btn-small grey"
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