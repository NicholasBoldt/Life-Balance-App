import React from 'react';
import { Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';
import Role from '../../components/Role/Role';

const RolesPage = (props) => {
  return (
    <div className="RolesPage">
         {props.roles.map((role) =>
            <Role name={role.name} />
          )}
        <form onSubmit={props.addRole}>
           <label>
             <div>ROLE</div>
             <input name='role'
            onChange={props.handleChange}/>
          
           </label>
           <button >ADD ROLE</button>
        </form>
    </div>
  );

};

export default RolesPage;