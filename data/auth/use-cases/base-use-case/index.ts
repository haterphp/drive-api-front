import { ValidationRunner } from "@/data/common/utils";
import { IAuthPort, IAuthDTO, IAuthValidator } from "../../interfaces";
import { IAuthUseCase } from "../../interfaces/use-case";
import { HttpService } from "@/data/common";

type StrategyFunction = (port: IAuthPort) => Promise<IAuthDTO>;

export class BaseAuthUseCase implements IAuthUseCase {
  private _strategyFunction: StrategyFunction;

  private _validator: IAuthValidator;

  constructor(strategy: StrategyFunction, validator: IAuthValidator) {
    this._validator = validator;
    this._strategyFunction = strategy;
  }

  public async execute(port: IAuthPort): Promise<IAuthDTO> {
    new ValidationRunner(this._validator).validate(port);
    const res = await this._strategyFunction(port);

    HttpService.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.token}`;

    return res;
  }
}
