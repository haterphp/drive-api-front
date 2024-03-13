import { PropsWithChildren } from "react";
import { AuthFormContainer } from "../components/auth-form-container";

export default function LoginPageTemplate({ children }: PropsWithChildren) {
  return <AuthFormContainer title="Авторизация" children={children} />;
}
