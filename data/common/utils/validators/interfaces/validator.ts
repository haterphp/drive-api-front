interface IValidationErrorPayload<TData = unknown> {
  code: number;
  data?: TData;
}

interface IValidationError<TData = unknown> {
  isSuccess: boolean;
  errors?: IValidationErrorPayload<TData>;
}

interface IValidator {
  setNext(validator: IValidator): IValidator;

  validate(value: unknown): IValidationError;
}

export type { IValidator, IValidationError, IValidationErrorPayload };
