import React from 'react';
import Role from "../../components/Role/Role";
import HabitForm from "../../components/HabitForm/HabitForm";

function RoleDetailPage(props) {
  const role = props.location.state.role;
  return (
    <div>
      <Role name={role.name} habits={role.habits} tasks={role.tasks} />
      <button
          className='btn btn-danger'
          onClick={() => props.handleDeleteRole(role._id)}
        >Delete Role</button>
        <HabitForm />
    </div>


  );
}

export default RoleDetailPage;