import { Button, Input } from "@/ui";

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Логин" />

      <Input label="Пароль" />

      <Button color="primary">Создать</Button>
    </div>
  );
}
