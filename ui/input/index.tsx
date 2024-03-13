import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  HTMLInputTypeAttribute,
  useMemo,
} from "react";

import { IBaseComponentProps } from "../common/interfaces";

import { makeClassname } from "../common/functions";

import "./index.css";

interface IInputEvents {
  onInput?: FormEventHandler;
  onChange?: ChangeEventHandler;

  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
}

interface IInputProps extends IBaseComponentProps, IInputEvents {
  /** Base input props */
  type?: HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;

  /** Specific input props */
  label?: string;
  feedback?: string;
  isError?: boolean;
}

const Input = (props: IInputProps): JSX.Element => {
  const {
    type = "text",
    className,
    id,

    label,
    feedback,

    isError = false,
    ...rest
  } = props;

  const innerId = useMemo(() => {
    return id ?? "input_" + Math.random().toString();
  }, [id]);

  return (
    <div className={makeClassname("input", className)}>
      {label !== undefined && (
        <label htmlFor={innerId} className="input__label">
          {label}
        </label>
      )}

      <input
        type={type}
        id={innerId}
        className={makeClassname(
          "input__element",
          isError && "input__element--error"
        )}
        {...rest}
      />

      {feedback !== undefined && (
        <span className="input__feedback">{feedback}</span>
      )}
    </div>
  );
};

export { Input, type IInputProps };
