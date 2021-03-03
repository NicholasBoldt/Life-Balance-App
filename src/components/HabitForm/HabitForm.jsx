import React, { Component } from 'react';
import rolesService from '../../utils/rolesService';

class HabitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await rolesService.addHabit(this.state, this.props.role._id);
    this.props.handleAddHabit();
    // this.props.history.push("/details");
  };

  render(props) {
    return (
      <div>
        <header className="header-footer">{this.props.update ? 'Update Habit' : 'Add Habit'}</header>
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
                placeholder="Amount"
                value={this.state.amount}
                name="amount"
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

export default HabitForm;
