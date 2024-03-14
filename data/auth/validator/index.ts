import {
  IValidators,
  PasswordValidator,
  RequiredValidator,
  ValidationChain,
} from "@/data/common/utils";

import { IAuthPort, IAuthValidator } from "../interfaces";

export class AuthValidator implements IAuthValidator {
  public properties: Partial<IValidators<keyof IAuthPort>> = {
    login: new ValidationChain([new RequiredValidator()]),
    password: new ValidationChain([
      new RequiredValidator(),
      new PasswordValidator(),
    ]),
  };
}
