import React, {useState, useEffect} from 'react'
import HabitForm from "../../components/HabitForm/HabitForm"
import Habit from "../../components/Habit/Habit"

function HabitDetailPage(props) {
    const [roleId, setRoleId] = useState(props.location.state?.currentRole._id);
    const [habitId, setHabitId] = useState(props.location.state?.currentHabit._id);
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
        <div>{currentHabit.name} {currentHabit.amount} </div>
      <HabitForm update={true} handleUpdateHabit={props.handleUpdateHabit} handleDeleteHabit={props.handleDeleteHabit} habit={currentHabit}/>
    </div>
  );
}

export default HabitDetailPage;