import { PropsWithChildren } from "react";
import { AuthFormContainer } from "../_components/auth-form-container";
import Link from "next/link";

const SignUpFormFooter = () => {
  return (
    <div className="flex items-center gap-1">
      <p>Уже есть аккаунта?</p>

      <Link href={"/auth/login"} className="link">
        Войти
      </Link>
    </div>
  );
};

export default function SignUpPageTemplate({ children }: PropsWithChildren) {
  return (
    <AuthFormContainer
      title="Регистрация"
      children={children}
      Footer={<SignUpFormFooter />}
    />
  );
}
