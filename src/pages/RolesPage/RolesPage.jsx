import React, { Component } from "react";
import RoleForm from "../../components/RoleForm/RoleForm";
import { Link } from 'react-router-dom';
import "./RolesPage.css"

class RolesPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let rolesList =
      this.props.roles == 0 ? (
        <div>You have no current roles</div>
      ) : (
        <div className="RolesPage">
          {this.props.roles.map((role) => (
            <Link
              className="RolesPage-link"
              to={{
                pathname: "/details",
                state: { role },
              }}
            >
              {role.name}
            </Link>
          ))}
        </div>
      );

    let userSingedIn = this.props.user ? (
      <div>
        <div className="header-footer">Roles</div>
        <div> {rolesList}</div>
        <div>
          <RoleForm {...this.props} />
        </div>
      </div>
    ) : (
      <div className="header-footer">Login or Sign up to get started</div>
    );

    return <div className="RolesPage">{userSingedIn}</div>;
  }
}

export default RolesPage;
