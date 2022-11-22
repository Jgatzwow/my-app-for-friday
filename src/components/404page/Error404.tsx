import React from "react";
import styles from "./error404.module.css";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../App";

export const Error404 = () => {
  return (
    <div className={styles.Error__container}>
      <h2 className={styles.error__title}>Error 404!</h2>
      <p className={styles.error__desc}>Page not Found</p>
      <NavLink className={styles.error__link} to={PATHS.LOGIN}>
        CLICK TO GO BACK TO STARTING PAGE
      </NavLink>
    </div>
  );
};
