import { IInputProps } from "@/ui/input";
import { FieldError } from "react-hook-form";

export const controlInputState = (
  state?: FieldError
): Pick<IInputProps, "feedback" | "isError"> => {
  if (state !== undefined) {
    return { isError: !!state.message, feedback: state.message };
  }

  return {};
};
