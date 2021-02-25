import React from 'react';
import Habit from '../Habit/Habit';
import Task from '../Task/Task';


function displayHabits() {

}


const Role = (props) => (
      <div>
          <h3>{props.name}</h3>
          <h4> Habits </h4>
            {props.habits.map((habit) => (
            <Habit name={habit.name} amount={habit.amount} completed={habit.completed} />
          ))}
          <h4> Tasks </h4>
          {props.tasks.map((task) => (
            <Task name={task.name} amount={task.amount} completed={task.completed} />
          ))}

      </div>
 );

export default Role;