import React from 'react';
import { Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';
import Role from '../../components/Role/Role';

const RolesPage = (props) => {
  return (
    <div className="RolesPage">
        <Role name={props.name} habits={props.habits} />
    </div>
  );

};

export default RolesPage;