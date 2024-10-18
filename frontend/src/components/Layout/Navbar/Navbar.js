import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li>
          Groups
          <span></span>
        </li>
        <li>
          Expenses
          <span></span>
        </li>
        <li>
          Users
          <span></span>
        </li>
        <li>
          Reports
          <span></span>
        </li>
        <li>
          Balances
          <span></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
