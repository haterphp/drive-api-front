import { PropsWithChildren, ReactNode } from "react";

import "./index.css";

export interface IAuthFormContainer extends PropsWithChildren {
  title: string;
  Footer?: ReactNode;
}

export const AuthFormContainer = (props: IAuthFormContainer): JSX.Element => {
  const { title, children, Footer } = props;

  return (
    <div className="auth_form">
      <div className="auth_form__title">
        <h3 className="auth_form__subtitle">drive api</h3>
        <h1 className="auth_form__title_content">{title}</h1>
      </div>
      <div className="auth_form__content">{children}</div>
      {Footer !== undefined && (
        <div className="auth_form__footer">{Footer}</div>
      )}
    </div>
  );
};
