import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
} from "react";
import s from "./SuperInputText.module.css";

// default input props type
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// Omit to exclude type prop from Default input props
type SuperInputTextPropsType = Omit<DefaultInputPropsType, "type"> & {
  // adding some extra props
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: ReactNode;
  spanClassName?: string;
};

export const SuperInputText: React.FC<SuperInputTextPropsType> = ({
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  spanClassName,
  id,

  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);

    onChangeText?.(e.currentTarget.value);
  };
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress?.(e);
    onEnter && e.key === "Enter" && onEnter();
  };

  const finalSpanClassName =
    s.error + (spanClassName ? " " + spanClassName : "");
  const finalInputClassName =
    s.input +
    (error ? " " + s.errorInput : " " + s.superInput) +
    (className ? " " + s.className : "");

  return (
    <div className={s.inputWrapper}>
      <input
        id={id}
        type={"text"}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps}
      />
      <span id={id ? id + "-span" : undefined} className={finalSpanClassName}>
        {error}
      </span>
    </div>
  );
};
