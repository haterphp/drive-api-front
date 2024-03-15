"use client";

import { IAuthDTO, IAuthErrors, IAuthPort } from "@/data/auth";
import { IAuthUseCase } from "@/data/auth/interfaces/use-case";
import { ExceptionService, MessagePipe } from "@/data/common";
import { COMMON_ERROR_MESSAGES } from "@/data/common/messages";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { UseFormSetError } from "react-hook-form";
import { UseMutationResult, useMutation } from "react-query";

const AUTH_ERROR_MESSAGES = {
  ...COMMON_ERROR_MESSAGES,
};

export type IAuthRequest = UseMutationResult<
  IAuthDTO,
  ExceptionService<IAuthErrors>,
  IAuthPort
>;

export const useAuthRequest = (
  useCase: IAuthUseCase,
  setError: UseFormSetError<IAuthPort>
): IAuthRequest => {
  const router = useRouter();

  const messagePipe = useMemo(() => new MessagePipe(), []);

  const callback = (port: IAuthPort): Promise<IAuthDTO> => {
    return useCase.execute(port);
  };

  const onSuccess = (_data: IAuthDTO) => {
    router.push("/app");
  };

  const onError = async (
    error: ExceptionService<IAuthErrors>
  ): Promise<void> => {
    if (error.data !== undefined) {
      const keys = Object.keys(error.data) as (keyof IAuthErrors)[];

      for (const key of keys) {
        const value = error.data[key]?.code;
        if (value === undefined) continue;

        if (key === "logical") {
          console.log(value);
          continue;
        }

        const message = await messagePipe.transform({
          message: AUTH_ERROR_MESSAGES[value],
          replaceArgs: {},
        });

        setError(key, { message }, { shouldFocus: true });
      }
    }
  };

  return useMutation(callback, { onSuccess, onError });
};
