import React from "react";
import { NavBar } from "./NavBar/NavBar";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a href="#">
          Some Logo will be here {/*<img src="#" alt="Some Header Logo" />*/}
        </a>
      </div>
      <NavBar />
    </header>
  );
};
