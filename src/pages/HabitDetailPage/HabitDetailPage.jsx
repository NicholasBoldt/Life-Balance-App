import React, {useState, useEffect} from 'react'
import Role from "../../components/Role/Role";
import HabitForm from "../../components/HabitForm/HabitForm";
import TaskForm from "../../components/TaskForm/TaskForm";

function HabitDetailPage(props) {
    const [HabitId, setHabitId] = useState(props.location.state?.habit._id);
    const [currentHabit, setCurrentHabit] = useState({});

    useEffect(() => { 
        const roleIdx = props.roles.findIndex((role)=>{
            return role._id == roleId
        }) 
        setCurrentRole(props.roles[roleIdx]);
    }, [props])

  return (
    <div>
      <button
          className='btn btn-danger'
          onClick={() => }
        >Delete Role</button>
   
    </div>


  );
}

export default RoleDetailPage;