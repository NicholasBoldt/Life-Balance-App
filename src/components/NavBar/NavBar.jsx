import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link'>LOGOUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>Hello, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOGIN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;