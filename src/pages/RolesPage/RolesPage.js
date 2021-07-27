import React from "react";
import RoleForm from "../../components/RoleForm/RoleForm";
import { Link } from "react-router-dom";
import "./RolesPage.css";

const RolesPage = (props) => {
  let rolesList =
    props.roles == 0 ? (
      <div>You have no current roles</div>
    ) : (
      <div className="RolesPage">
        {props.roles.map((role) => (
          <Link
          key={role._id}
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

  let userSingedIn = props.user ? (
    <div>
      <div className="header-footer">Roles</div>
      <div> {rolesList}</div>
      <div>
        <RoleForm {...props} />
      </div>
    </div>
  ) : (
    <div className="header-footer">Login or Sign up to get started</div>
  );

  return <div className="RolesPage">{userSingedIn}</div>;
};

export default RolesPage;
