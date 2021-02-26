import React from 'react';
import Habit from '../Habit/Habit';
import Task from '../Task/Task';


function displayHabits() {

}


const Role = (props) => (
      <div>
          <h3>{props.name}</h3>
          <h4> Habits </h4>
            {props.habits ? props.habits.map((habit) => (
            <Habit name={habit.name} amount={habit.amount} completed={habit.completed} />
          )) : ""}
          <h4> Tasks </h4>
          {props.tasks ? props.tasks.map((task) => (
            <Task name={task.name} taskId={task._id} handleDeleteTask={props.handleDeleteTask} />
          )) : " "}

      </div>
 );

export default Role;