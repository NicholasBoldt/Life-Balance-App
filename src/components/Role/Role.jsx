import Habit from '../Habit/Habit';
import Task from '../Task/Task';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'




function Role(props) {
  return (
    <div>
    <div className="header-footer">{props.name}</div>
    <h4> Habits </h4>
    {props.habits
      ? props.habits.map((habit) => (
          <Habit
            currentRole={props.currentRole}
            id={habit._id}
            currentHabit={habit}
            name={habit.name}
            amount={habit.amount}
            completed={habit.completed}
            handleCompleteHabit={props.handleCompleteHabit}
            handleGetStreak={props.handleGetStreak}
            displayEdit={true} />
            
        ))
      : ""}
    <h4> Tasks </h4>
    {props.tasks
      ? props.tasks.map((task) => (
          <Task
            name={task.name}
            taskId={task._id}
            handleDeleteTask={props.handleDeleteTask}
          />
        ))
      : " "}
  </div>
  );
};

export default Role;