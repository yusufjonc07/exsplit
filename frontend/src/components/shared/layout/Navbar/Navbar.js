import React, {useState} from "react";
import { Link, Route } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {


  const [navItems, s] = useState([
    {
      to: '/',
      label: 'Groups'
    },
    {
      to: '/expenses',
      label: 'Expenses'
    },
    {
      to: '/users',
      label: 'Users'
    },
    {
      to: '/reports',
      label: 'Reports'
    },
    {
      to: '/balances',
      label: 'Balances'
    },
  ]);

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        
       
      </ul>
    </nav>
  );
};

export default Navbar;
