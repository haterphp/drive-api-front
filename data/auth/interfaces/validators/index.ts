import { IValidationErrors, IValidatorsFactory } from "@/data/common/utils";
import { IAuthPort } from "../ports";

type IAuthValidatorErrors = IValidationErrors<"login" | "password">;
type IAuthValidator = IValidatorsFactory<IAuthPort>;

export type { IAuthValidator, IAuthValidatorErrors };
