import React, {useState, useEffect} from 'react'
import Role from "../../components/Role/Role";
import HabitForm from "../../components/HabitForm/HabitForm";
import TaskForm from "../../components/TaskForm/TaskForm";

function HabitDetailPage(props) {
    const [HabitId, setHabitId] = useState(props.location.state?.habit._id);
    const [currentHabit, setCurrentHabit] = useState({});

    useEffect(() => { 
        const habitIdx = props.roles[roleIdx].findIndex((habit)=>{
            return habit._id == habitId
        }) 
        setCurrentHabit(props.roles[roleIdx].habits[habitIdx]);
    }, [props])

  return (
    <div>
        <button
          className='btn btn-danger'
          onClick={() => props.handleUpdateHabit(currentHabit._id)}
        >Update Habit</button>
      <button
          className='btn btn-danger'
          onClick={() => props.handleDeleteHabit(currentHabit._id)}
        >Delete Habit</button>
   
    </div>


  );
}

export default RoleDetailPage;