import React, { Component } from "react";
import Role from "../../components/Role/Role";
import RoleForm from "../../components/RoleForm/RoleForm";

class RolesPage extends Component {
  render() {
    return (
      <div className="RolesPage">
        {this.props.roles.map((role) => (
          <Role name={role.name} />
        ))}
        <RoleForm />
      </div>
    );
  }
}

export default RolesPage;
