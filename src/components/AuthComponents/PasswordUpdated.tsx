import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../App";

export const PasswordUpdated = () => {
  return (
    <div>
      <h2>PASSWORD SUCCESSFULLY UPDATED</h2>
      <NavLink to={PATHS.LOGIN}>You may Log in now</NavLink>
    </div>
  );
};
