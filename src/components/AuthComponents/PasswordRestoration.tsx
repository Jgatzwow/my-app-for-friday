import React from "react";
import { PATHS } from "../../App";
import { NavLink } from "react-router-dom";
import { SuperInputText } from "../common/c1-SuperInputText/SuperInputText";

export const PasswordRestoration = () => {
  return (
    <>
      <h2>Restore password</h2>
      <form>
        <div>
          <SuperInputText placeholder={"enter your email"} />
        </div>
        <div>
          <NavLink to={PATHS.CHANGE_PASSWORD}>Send</NavLink>
        </div>
      </form>
    </>
  );
};
