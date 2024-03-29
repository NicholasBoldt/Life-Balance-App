import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Habit.css";
import flame from "../../sounds/flame.mp3";

const Habit = (props) => {
  const currentRole = props.currentRole;
  const currentHabit = props.currentHabit;
  const [streak, setStreak] = useState();

  useEffect(() => {
    async function getNewStreak() {
      const newStreak = await props.handleGetStreak(props.id)
      setStreak(newStreak);
    }
    getNewStreak();
  }, [props]);

  let audio = new Audio(flame);

  const completeClicked = () => {
    audio.play();
    props.handleCompleteHabit(props.id);
  };

  return (
    <div className="Habit">
      <div className="Habit-left">
        {props.displayMove ? (
          <div onClick={() => props.handleMoveUpHabit(props.id)}>
            <i class="material-icons">arrow_drop_up</i>
          </div>
        ) : (
          ""
        )}
        <Link
          className="Habit-link"
          to={{
            pathname: "/habit-details",
            state: { currentRole, currentHabit },
          }}
        >
          <div>
            {props.name}
            {props.amount ? ":" : ""}&nbsp;&nbsp;
          </div>
          <div>{props.amount}</div>
        </Link>
        &nbsp;&nbsp;
      </div>

      <div className="Habit-controls">
        {props.completed ? (
          <div className="align-vertical Streak-orange">
            {streak}
            <i class="material-icons">whatshot</i>
          </div>
        ) : (
          <div className="align-vertical Streak-grey">
            {streak}
            <i class="material-icons">whatshot</i>
          </div>
        )}

        {props.completed ? (
          <div>
            <button
              className="Habit-complete btn-small"
              onClick={() => props.handleCompleteHabit(props.id)}
            >
              Completed
            </button>
          </div>
        ) : (
          <div>
            <button
              className="Habit-complete btn-small grey"
              onClick={() => completeClicked()}
            >
              Incomplete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Habit;
