import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import s from "./SuperCheckbox.module.css";

// default input props type
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, "type"> & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
};

export const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children, // children type is included in React.FC type
  id,

  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
  };

  const finalInputClassName = s.checkbox + (className ? " " + className : "");

  return (
    <label className={s.label}>
      <input
        id={id}
        type={"checkbox"}
        onChange={onChangeCallback}
        className={finalInputClassName}
        {...restProps}
      />
      {children && (
        <span id={id ? id + "-span" : undefined} className={s.spanClassName}>
          {children}
        </span>
      )}
    </label> // label makes so clicking on span effects checkbox
  );
};
