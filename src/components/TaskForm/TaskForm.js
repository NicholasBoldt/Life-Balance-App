import React, { useState } from "react";
import rolesService from "../../utils/rolesService";

const TaskForm = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const handleChange = (event) => {
    setEnteredName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await rolesService.addTask({ name: enteredName }, props.role._id);
    props.handleAddTask();
  };

  const isFormInvalid = () => {
    return !enteredName;
  };

  return (
    <div>
      <header className="header-footer">Add Task</header>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={enteredName}
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default" disabled={isFormInvalid()}>
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
