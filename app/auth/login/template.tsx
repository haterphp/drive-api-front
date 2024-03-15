import { PropsWithChildren } from "react";
import { AuthFormContainer } from "../_components/auth-form-container";
import Link from "next/link";

const LoginFormFooter = () => {
  return (
    <div className="flex items-center gap-1">
      <p>Нет аккаунта?</p>

      <Link href={"/auth/sign-up"} className="link">
        Создать
      </Link>
    </div>
  );
};

export default function LoginPageTemplate({ children }: PropsWithChildren) {
  return (
    <AuthFormContainer
      title="Авторизация"
      children={children}
      Footer={<LoginFormFooter />}
    />
  );
}
