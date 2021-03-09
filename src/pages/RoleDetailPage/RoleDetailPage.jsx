import React, { useState, useEffect } from "react";

import HabitForm from "../../components/HabitForm/HabitForm";
import TaskForm from "../../components/TaskForm/TaskForm";
import Habit from "../../components/Habit/Habit";
import Task from "../../components/Task/Task";
import "./RoleDetailPage.css";

function RoleDetailPage(props) {
  const [roleId, setRoleId] = useState(props.location.state?.role._id);
  const [currentRole, setCurrentRole] = useState({});

  useEffect(() => {
    const roleIdx = props.roles.findIndex((role) => {
      return role._id == roleId;
    });
    setCurrentRole(props.roles[roleIdx]);
  }, [props]);

  return (
    <div className="RoleDetailPage">
      <div>
        <div className="header-footer">{currentRole.name}</div>
        <h5>Habits</h5>
        {currentRole.habits
          ? currentRole.habits.map((habit) => (
              <Habit
                currentRole={currentRole}
                id={habit._id}
                currentHabit={habit}
                name={habit.name}
                amount={habit.amount}
                completed={habit.completed}
                handleCompleteHabit={props.handleCompleteHabit}
                handleGetStreak={props.handleGetStreak}
                handleMoveUpHabit={props.handleMoveUpHabit}
                history={props.history}
                displayEdit={true}
              />
            ))
          : ""}
        <h5>Tasks</h5>
        {currentRole.tasks
          ? currentRole.tasks.map((task) => (
              <Task
                name={task.name}
                taskId={task._id}
                handleDeleteTask={props.handleDeleteTask}
              />
            ))
          : " "}
      </div>
      <div className="RoleDetailPage-forms">
        <HabitForm
          role={currentRole}
          handleAddHabit={props.handleAddHabit}
          history={props.history}
          update={false}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; 
        <TaskForm role={currentRole} handleAddTask={props.handleAddTask} />
      </div>
      <button
        className="btn red lighten-2"
        onClick={() => props.handleDeleteRole(currentRole._id)}
      >
        Delete Role
      </button>
    </div>
  );
}

export default RoleDetailPage;
