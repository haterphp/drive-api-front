"use client";

import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  ForwardedRef,
  HTMLInputTypeAttribute,
  forwardRef,
  useMemo,
  useState,
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
  name?: string;

  /** Specific input props */
  label?: string;
  feedback?: string;
  isError?: boolean;
}

const InputRenderFunction = (
  props: IInputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
  const {
    type = "text",
    className,
    id,

    label,
    feedback,

    isError = false,

    onInput,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const [isShouldStayLabelFloated, setIsShouldStayLabelFloated] =
    useState(false);

  const innerId = useMemo(() => {
    return id ?? "input_" + Math.random().toString();
  }, [id]);

  /** Element classnames */

  const inputContainerClassname = useMemo(
    () => makeClassname("input", isFocus && "input--focus", className),
    [isError, isFocus, className]
  );

  const inputLabelClassname = useMemo(
    () =>
      makeClassname(
        "input__label",
        isShouldStayLabelFloated && "input__label--stay-focus"
      ),
    [isShouldStayLabelFloated]
  );

  /** Event handlers */

  const handleOnInput: FormEventHandler<HTMLInputElement> = (e) => {
    setIsShouldStayLabelFloated(e.currentTarget.value !== "");
    onInput && onInput(e);
  };

  const handleOnFocus: FocusEventHandler = (e) => {
    setIsFocus(true);
    onFocus && onFocus(e);
  };

  const handleOnBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setIsFocus(false);
    onBlur && onBlur(e);
  };

  return (
    <div
      className={makeClassname(
        "flex flex-col gap-1 w-full",
        isError && "input--error"
      )}
    >
      <div className={inputContainerClassname}>
        {label !== undefined && (
          <label htmlFor={innerId} className={inputLabelClassname}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          id={innerId}
          className="input__element"
          onInput={handleOnInput}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...rest}
        />
      </div>

      {feedback !== undefined && (
        <span className="input__feedback">{feedback}</span>
      )}
    </div>
  );
};

const Input = forwardRef(InputRenderFunction);

export { Input, type IInputProps };
