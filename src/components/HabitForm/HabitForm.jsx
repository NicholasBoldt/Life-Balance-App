import React, { Component } from 'react';
import rolesService from '../../utils/rolesService';
import './HabitForm.css'

class HabitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      newRole: ""
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
  };

  handleUpdateSubmit = async (e) => {
    e.preventDefault();
    await rolesService.updateHabit(this.state, this.props.habit._id);
    this.props.handleUpdateHabit();
  };

  isFormInvalid() {
    return !(this.state.name);
  }


  render() {
    return (
      <div className="HabitForm">
        <header className="header-footer">{this.props.update ? 'Update Habit' : 'Add Habit'}</header>
        <form className="form-horizontal" onSubmit={this.props.update ? this.handleUpdateSubmit : this.handleSubmit }>
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
            { this.props.update ? 
            <div>
            <select value={this.state.newRole} onChange={this.handleChange} >
                <option value="Art">Art</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>
              : ""}
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>{this.props.update ? "Update Habit" : "Add Habit"}</button>
            </div>
          </div>
        </form>
        {this.props.update ? <button className="btn red lighten-2" onClick={() => this.props.handleDeleteHabit(this.props.habit._id)}>Delete Habit</button> : ""}
      </div>
    );
  }
}

export default HabitForm;
