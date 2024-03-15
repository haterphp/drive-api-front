import { RegistrationUseCase } from "@/data/auth/use-cases";
import { IAuthRequest, useAuthRequest } from "../base-auth-request";
import { useMemo } from "react";
import { AuthRepository } from "@/data/auth/repository";
import { AuthValidator } from "@/data/auth/validator";
import { UseFormSetError } from "react-hook-form";
import { IAuthPort } from "@/data/auth";

export const useRegistrationRequest = (
  setError: UseFormSetError<IAuthPort>
): IAuthRequest => {
  const repository = useMemo(() => new AuthRepository(), []);
  const validator = useMemo(() => new AuthValidator(), []);

  return useAuthRequest(
    new RegistrationUseCase(repository, validator),
    setError
  );
};
