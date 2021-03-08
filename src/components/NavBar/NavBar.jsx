import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >Logout</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/' className='NavBar-link' >Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/habits' className='NavBar-link' >Habits</Link>
      |&nbsp;&nbsp;
      <Link to='/tasks' className='NavBar-link' >Tasks</Link>
      
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