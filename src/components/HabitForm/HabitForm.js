import React, { useState } from "react";
import rolesService from "../../utils/rolesService";
import "./HabitForm.css";

const HabitForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const handleNameChange = (event) => {
    setEnteredName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await rolesService.addHabit(
      { name: enteredName, amount: enteredAmount },
      props.role._id
    );
    props.handleAddHabit();
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    await rolesService.updateHabit(
      { name: enteredName, amount: enteredAmount },
      props.habit._id
    );
    props.handleUpdateHabit();
  };

  const isFormInvalid = () => {
    return !enteredName;
  };

  return (
    <div className="HabitForm">
      <header className="header-footer">
        {props.update ? "Update Habit" : "Add Habit"}
      </header>
      <form
        className="form-horizontal"
        onSubmit={props.update ? handleUpdateSubmit : handleSubmit}
      >
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={enteredName}
              name="name"
              onChange={handleNameChange}
            />
          </div>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              placeholder="Amount"
              value={enteredAmount}
              name="amount"
              onChange={handleAmountChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default" disabled={isFormInvalid()}>
              {props.update ? "Update Habit" : "Add Habit"}
            </button>
          </div>
        </div>
      </form>
      {props.update ? (
        <button
          className="btn red lighten-2"
          onClick={() => props.handleDeleteHabit(props.habit._id)}
        >
          Delete Habit
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default HabitForm;
