import React, { Component } from 'react';
import rolesService from '../../utils/rolesService';
import "./RoleForm.css";

class RoleForm extends Component {
  state = {
    name: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await rolesService.addRole(this.state);
      this.props.handleAddRole();
      this.props.history.push('/');
    } catch (err) {

      
    }
  }

  isFormInvalid() {
    return !(this.state.name);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Add Role</header>
        <form className="RoleForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Role Name"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />

          <button className="btn-small" disabled={this.isFormInvalid()}>Add</button>
        </form>
      </div>
    );
  }
}

export default RoleForm;
