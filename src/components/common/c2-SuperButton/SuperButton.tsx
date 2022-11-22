import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./SuperButton.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

export const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps //
}) => {
  const finalClassName =
    s.button +
    (disabled
      ? " " + s.disabled
      : xType === "red"
      ? " " + s.red
      : " " + s.default) +
    (className ? " " + className : " " + s.secondary);
  // задачка на смешивание классов

  return (
    <button disabled={disabled} className={finalClassName} {...restProps} />
  );
};
