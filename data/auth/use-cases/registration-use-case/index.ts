import { IAuthValidator, IAuthRepository } from "../../interfaces";

import { BaseAuthUseCase } from "../base-use-case";

export class RegistrationUseCase extends BaseAuthUseCase {
  constructor(repository: IAuthRepository, validator: IAuthValidator) {
    super(repository.registration, validator);
  }
}
