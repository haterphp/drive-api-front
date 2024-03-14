import { IAuthDTO, IAuthPort, IAuthRepository } from "../interfaces";

export class AuthRepository implements IAuthRepository {
  public async login(port: IAuthPort): Promise<IAuthDTO> {
    return Promise.resolve({ token: "" });
  }

  public async registration(port: IAuthPort): Promise<IAuthDTO> {
    return Promise.resolve({ token: "" });
  }
}
