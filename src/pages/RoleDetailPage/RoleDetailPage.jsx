import React, {useState, useEffect} from 'react'
import Role from "../../components/Role/Role";
import HabitForm from "../../components/HabitForm/HabitForm";
import TaskForm from "../../components/TaskForm/TaskForm";
import "./RoleDetailPage.css";

function RoleDetailPage(props) {
    const [roleId, setRoleId] = useState(props.location.state?.role._id);
    const [currentRole, setCurrentRole] = useState({});

    useEffect(() => { 
        const roleIdx = props.roles.findIndex((role)=>{
            return role._id == roleId
        }) 
        setCurrentRole(props.roles[roleIdx]);
    }, [props])

  return (
    <div className="RoleDetailPage">
      <Role
        currentRole={currentRole}
        name={currentRole.name}
        habits={currentRole.habits}
        tasks={currentRole.tasks}
        handleDeleteTask={props.handleDeleteTask}
        handleCompleteHabit={props.handleCompleteHabit}
        handleGetStreak={props.handleGetStreak}
      />
      <HabitForm
        role={currentRole}
        handleAddHabit={props.handleAddHabit}
        history={props.history}
      />
      <TaskForm role={currentRole} handleAddTask={props.handleAddTask} />
      <button
        className="btn btn-danger"
        onClick={() => props.handleDeleteRole(currentRole._id)}
      >
        Delete Role
      </button>
    </div>
  );
}

export default RoleDetailPage;