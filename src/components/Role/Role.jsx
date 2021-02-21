import React from 'react';
import Habit from '../Habit/Habit';
import Task from '../Task/Task';


const Role = (props) => (
      <div>
          <h3>{props.name}</h3>
          {props.habits.map((habit) =>
            <Habit name={habit.name} amount={habit.amount} completed={habit.completed} />
          )}
      </div>
 );

export default Role;