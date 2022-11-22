import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../App";
import { SuperInputPassword } from "../common/SuperInputPassword/SuperInputPassword";

export const PasswordChange = () => {
  return (
    <div>
      <h2>Change password here</h2>
      <form>
        <div>
          <SuperInputPassword placeholder={"enter new password"} />
        </div>
        <div>
          <SuperInputPassword placeholder={"repeat new password"} />
        </div>
        <div>
          <NavLink to={PATHS.PASSWORD_UPDATED}>Confirm</NavLink>
        </div>
      </form>
    </div>
  );
};
