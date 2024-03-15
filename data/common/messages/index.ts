import { InternalCode, ValidationCode } from "../enums";

export const COMMON_ERROR_MESSAGES: Record<number, string> = {
  [InternalCode.PROPERTY_IS_REQUIRED]: "Поле не заполнено",
  [InternalCode.PROPERTY_ALREADY_EXIST]: "Поле должно быть уникальным",
  [ValidationCode.INVALID_EMAIL]: "Неверный формат email",
  [ValidationCode.INVALID_PHONE]: "Неверный формат телефона",
  [ValidationCode.INVALID_REGEX]: "Введены некорректные символы",
  [ValidationCode.INVALID_LENGTH]:
    "Поле должно содержать от {{min}} до {{max}} символов",
  [ValidationCode.INVALID_LENGTH_MAX]:
    "Поле должно содержать до {{max}} символов",
};
