import React, { Component } from 'react';
import userService from '../../utils/userService';

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
    // try {
    //   await userService.addRole(this.state);

    // } catch (err) {
    //   // Invalid user data (probably duplicate email)
    //   this.props.updateMessage(err.message);
    // }
  }



  render() {
    return (
      <div>
        <header className="header-footer">Add Role</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Role Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button
                className="btn btn-default">
                Add Role
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RoleForm;
