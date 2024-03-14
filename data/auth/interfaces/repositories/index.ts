import { IAuthDTO } from "../dtos"
import { IAuthPort } from "../ports"

export interface IAuthRepository {
    login(port: IAuthPort): Promise<IAuthDTO>
    registration(port: IAuthPort): Promise<IAuthDTO>
}