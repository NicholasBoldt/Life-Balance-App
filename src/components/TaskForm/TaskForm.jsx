import React, { Component } from 'react';
import rolesService from '../../utils/rolesService';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      day: "",
        time: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await rolesService.addTask(this.state, this.props.role._id);
    // this.props.handleAddTask();
    // this.props.history.push("/details");
  };

  render() {
    return (
      <div>
        <header className="header-footer">Add Task</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Day"
                value={this.state.day}
                name="day"
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Time"
                value={this.state.time}
                name="time"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Add Habit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskForm;