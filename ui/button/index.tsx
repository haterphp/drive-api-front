"use client";

import { MouseEventHandler, PropsWithChildren } from "react";

import { IBaseComponentProps } from "../common/interfaces";

import { makeClassname } from "../common/functions";

import "./index.css";

type ButtonColors = "primary" | "secondary";

interface IButtonProps extends PropsWithChildren<IBaseComponentProps> {
  color: ButtonColors;
}

const BUTTON_CLASSNAMES: Record<ButtonColors, string> = {
  primary: "btn--color-primary",
  secondary: "btn--color-secondary",
};

const Button = (props: IButtonProps): JSX.Element => {
  const { color, className, children, ...rest } = props;

  return (
    <button
      className={makeClassname("btn", BUTTON_CLASSNAMES[color], className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button, type IButtonProps, type ButtonColors };
