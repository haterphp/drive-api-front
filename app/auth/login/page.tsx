"use client";

import { Button, Input } from "@/ui";
import { useLoginRequest } from "../_requests";
import { useForm } from "react-hook-form";
import { IAuthPort } from "@/data/auth";
import { controlInputState } from "@/ui/common/functions";

const DEFAULT_FORM_VALUES = { login: "", password: "" };

export default function LoginPage() {
  const form = useForm<IAuthPort>({ defaultValues: DEFAULT_FORM_VALUES });
  const { mutateAsync } = useLoginRequest(form.setError);

  const handleOnSubmit = async (data: IAuthPort): Promise<void> => {
    await mutateAsync(data);
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={form.handleSubmit(handleOnSubmit)}
    >
      <Input
        label="Логин"
        {...controlInputState(form.formState.errors.login)}
        {...form.register("login")}
      />

      <Input
        label="Пароль"
        type="password"
        {...controlInputState(form.formState.errors.password)}
        {...form.register("password")}
      />

      <Button color="primary">Войти</Button>
    </form>
  );
}
