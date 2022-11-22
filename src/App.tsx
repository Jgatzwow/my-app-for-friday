import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./components/AuthComponents/Login";
import { Registration } from "./components/AuthComponents/Registration";
import { PasswordRestoration } from "./components/AuthComponents/PasswordRestoration";
import { PasswordChange } from "./components/AuthComponents/PasswordChange";
import { Profile } from "./components/Profile/Profile";
import { ComponentsTest } from "./components/commonComponentsStand/ComponentsTest";
import { Error404 } from "./components/404page/Error404";
import { PasswordUpdated } from "./components/AuthComponents/PasswordUpdated";

export const PATHS = {
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgotPassword",
  CHANGE_PASSWORD: "/newPassword",
  PROFILE: "/profile",
  TEST: "/test",
  PASSWORD_UPDATED: "/passwordUpdated",
};

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main className={"main"}>
        <Routes>
          <Route path={"/"} element={<Navigate to={PATHS.LOGIN} />} />
          <Route path={PATHS.LOGIN} element={<Login />} />
          <Route path={PATHS.REGISTER} element={<Registration />} />
          <Route
            path={PATHS.FORGOT_PASSWORD}
            element={<PasswordRestoration />}
          />
          <Route path={PATHS.CHANGE_PASSWORD} element={<PasswordChange />} />
          <Route path={PATHS.PASSWORD_UPDATED} element={<PasswordUpdated />} />
          <Route path={PATHS.PROFILE} element={<Profile />} />
          <Route path={PATHS.TEST} element={<ComponentsTest />} />
          <Route path={"/*"} element={<Error404 />} />
        </Routes>
      </main>
    </div>
  );
};
