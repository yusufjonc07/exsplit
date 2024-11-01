"use client";

import React, { useState } from "react";
import styles from "./Topbar.module.css";
import Link from "next/link";

const Topbar = ({}) => {


  const [top_bar_menu_items, setTopBarMenuItems] = useState([
    {
      label: "Tickets & Hospitality",
      href: "/tickets"
    },
    {
      label: "FIFA+",
      href: "/fifa_plus"
    },
    {
      label: "FIFA STORE",
      href: "/fifa_store"
    },
  ])

  return (
    <div>
      <nav className={styles.top_bar}>
        <div className={styles.top_bar_menu}>
        {top_bar_menu_items.map((item,index)=>
          <div className={styles.top_bar_menu_item} key={index}>
            <Link href={item.href}>
              {item.label}
            </Link>
          </div>

        )}
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
