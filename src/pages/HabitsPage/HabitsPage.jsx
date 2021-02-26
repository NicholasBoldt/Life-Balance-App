import React from 'react';
import { Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';
import Habit from '../../components/Habit/Habit';
import "./HabitsPage.css"

const HabitsPage = (props) => {
  return (
    <div className="HabitsPage">
      <div>
        {props.roles.map((role) => (
          role.habits.map((habit) => (
            <Habit
              name={habit.name}
              amount={habit.amount}
              completed={habit.completed}
              handleCompleteHabit={props.handleCompleteHabit}
              handleGetStreak={props.handleGetStreak}
              id={habit._id}
            />
        ))
        ))}
      </div>
    </div>
  );
};

export default HabitsPage;