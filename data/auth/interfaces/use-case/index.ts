import { IUseCase } from "@/data/common";
import { IAuthPort } from "../ports";
import { IAuthDTO } from "../dtos";

export type IAuthUseCase = IUseCase<IAuthPort, IAuthDTO>;
