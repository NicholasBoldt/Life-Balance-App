import React, {useState, useEffect} from 'react'


function HabitDetailPage(props) {
    const [roleId, setRoleId] = useState(props.location.state?.currentRole._id);
    const [habitId, setHabitId] = useState(props.location.state?.habit._id);
    const [currentHabit, setCurrentHabit] = useState({});

    useEffect(() => { 
        const roleIdx = props.roles.findIndex((role)=>{
            return role._id == roleId
        }) 
        const habitIdx = props.roles[roleIdx].habits.findIndex((habit)=>{
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

export default HabitDetailPage;