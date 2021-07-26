import React from "react";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";
import Habit from "../../components/Habit/Habit";
import "./HabitsPage.css";

const HabitsPage = (props) => {
  return (
    <div className="HabitsPage">
      <div className="header-footer">All Habits</div>
      <div>
        {props.roles.map((role) =>
          role.habits.map((habit) => (
            <Habit
              currentRole={role}
              currentHabit={habit}
              name={habit.name}
              amount={habit.amount}
              completed={habit.completed}
              handleCompleteHabit={props.handleCompleteHabit}
              handleGetStreak={props.handleGetStreak}
              id={habit._id}
              displayEdit={true}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HabitsPage;
