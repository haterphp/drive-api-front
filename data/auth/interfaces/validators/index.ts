import {
  IValidationErrorPayload,
  IValidationErrors,
  IValidatorsFactory,
} from "@/data/common/utils";

import { IAuthPort } from "../ports";

type IAuthValidatorErrors = IValidationErrors<"login" | "password">;
type IAuthValidator = IValidatorsFactory<IAuthPort>;

interface IAuthErrors extends IAuthValidatorErrors {
  logical: IValidationErrorPayload;
}

export type { IAuthValidator, IAuthValidatorErrors, IAuthErrors };
