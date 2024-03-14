import { IAuthValidator, IAuthRepository } from "../../interfaces";

import { BaseAuthUseCase } from "../base-use-case";

export class LoginUseCase extends BaseAuthUseCase {
  constructor(repository: IAuthRepository, validator: IAuthValidator) {
    super(repository.login, validator);
  }
}
