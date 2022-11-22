import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../../App";
import styles from "./navbar.module.css";

export const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={PATHS.PROFILE}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={PATHS.TEST}
          >
            Test
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
