import React from 'react';
import Habit from '../Habit/Habit';
import Task from '../Task/Task';


const Role = (props) => (
      <div>
          {props.habits.map((habit) =>
            <Habit name={habit.name} amount={habit.amount} completed={habit.completed} />
          )}
      </div>
 );

export default Role;