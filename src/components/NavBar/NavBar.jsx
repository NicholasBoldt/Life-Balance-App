import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link to="/login" className='NavBar-link'>LOGIN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
    </div>
  );
};

export default NavBar;