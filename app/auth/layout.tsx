import { PropsWithChildren } from "react";

import "./index.css";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="auth_layout">
      <div className="auth_layout__container">{children}</div>
    </div>
  );
}
