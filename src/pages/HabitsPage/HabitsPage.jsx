import React from 'react';
import { Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';
import Role from '../../components/Role/Role';

const HabitsPage = (props) => {
  return (
    <div className="HabitsPage">
        <Role name={props.name} habits={props.habits} />
    </div>
  );

};

export default HabitsPage;