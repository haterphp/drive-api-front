import { HttpService } from "@/data/common";
import { IAuthDTO, IAuthPort, IAuthRepository } from "../interfaces";

export class AuthRepository implements IAuthRepository {
  public async login(port: IAuthPort): Promise<IAuthDTO> {
    return HttpService.post("/auth/login", port);
  }

  public async registration(port: IAuthPort): Promise<IAuthDTO> {
    return HttpService.post("/auth/register", port);
  }
}
