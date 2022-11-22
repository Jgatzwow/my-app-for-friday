import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../App";
import { SuperInputText } from "../common/c1-SuperInputText/SuperInputText";
import { SuperCheckbox } from "../common/c3-SuperCheckbox/SuperCheckbox";
import { SuperButton } from "../common/c2-SuperButton/SuperButton";
import { SuperInputPassword } from "../common/SuperInputPassword/SuperInputPassword";

export const Login = () => {
  return (
    <>
      <h2>LOG IN PAGE</h2>
      <form className={"login__form"}>
        <div>
          <SuperInputText placeholder={"email"} />
        </div>
        <div>
          <SuperInputPassword placeholder={"password"} />
        </div>
        <div>
          <SuperCheckbox> remember me</SuperCheckbox>
        </div>
        <div>
          <SuperButton>submit</SuperButton>
        </div>
      </form>
      <ul>
        <li>
          <NavLink to={PATHS.FORGOT_PASSWORD}>Forgot password</NavLink>
        </li>
        <li>
          <NavLink to={PATHS.REGISTER}>Register</NavLink>
        </li>
      </ul>
    </>
  );
};
