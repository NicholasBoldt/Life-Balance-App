import React, { Component } from "react";
import RoleForm from "../../components/RoleForm/RoleForm";
import { Link } from 'react-router-dom';

class RolesPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="RolesPage">
        {this.props.roles.map((role) => (
          <Link to={{
            pathname: '/details',
            state: {role}
          }}>{role.name}</Link>
        ))}
        <RoleForm {...this.props} />
      </div>
    );
  }
}

export default RolesPage;
