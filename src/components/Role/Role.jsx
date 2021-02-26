import React from 'react';
import Habit from '../Habit/Habit';
import Task from '../Task/Task';




const Role = (props) => (
  <div>
    <div className="header-footer">{props.name}</div>
    <h4> Habits </h4>
    {props.habits
      ? props.habits.map((habit) => (
          <Habit
            id={habit._id}
            name={habit.name}
            amount={habit.amount}
            completed={habit.completed}
            handleCompleteHabit={props.handleCompleteHabit}
            handleGetStreak={props.handleGetStreak}
          />
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

export default Role;