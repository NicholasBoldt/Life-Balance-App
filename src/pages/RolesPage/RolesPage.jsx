import React, { Component } from "react";
import RoleForm from "../../components/RoleForm/RoleForm";
import { Link } from 'react-router-dom';
import "./RolesPage.css"

class RolesPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="RolesPage">
        <div className="header-footer">Roles</div>
        {this.props.roles ? this.props.roles.map((role) => (
          <Link className="RolesPage-link" to={{
            pathname: '/details',
            state: {role}
          }}>{role.name}</Link>
        )) : "" }
        <RoleForm {...this.props} />
      </div>
    );
  }
}

export default RolesPage;
