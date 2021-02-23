import React, { Component } from "react";
import Role from "../../components/Role/Role";
import RoleForm from "../../components/RoleForm/RoleForm";

class RolesPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="RolesPage">
        {this.props.roles.map((role) => (
          <Role name={role.name} />
        ))}
        <RoleForm {...this.props} />
      </div>
    );
  }
}

export default RolesPage;
