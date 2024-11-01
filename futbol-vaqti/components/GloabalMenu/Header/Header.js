"use client";

import React from "react";
import styles from "./Header.module.css";
import Topbar from "./Topbar/Topbar";
import Appbar from "./Appbar/Appbar";

const Header = ({}) => {
  return (
    <header className={styles.gloabal_menu}>
      <div>
        <Topbar />
        <Appbar />
      </div>
    </header>
  );
};

export default Header;
