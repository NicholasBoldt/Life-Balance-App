import React, { useState } from 'react';
import rolesService from '../../utils/rolesService';
import "./RoleForm.css";

const RoleForm = props => {
  const [enteredRole, setEnteredRole] = useState('')

  const handleChange = event => {
    setEnteredRole(event.target.value);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await rolesService.addRole({name: enteredRole});
      props.handleAddRole();
    } catch (err) {

      
    }
  }

  const isFormInvalid = () => {
    return !enteredRole;
  }


  return (
      <div>
        <header className="header-footer">Add Role</header>
        <form className="RoleForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Role Name"
            value={enteredRole}
            name="name"
            onChange={handleChange}
          />

          <button className="btn-small" disabled={isFormInvalid()}>Add</button>
        </form>
      </div>
    );

}

export default RoleForm;
