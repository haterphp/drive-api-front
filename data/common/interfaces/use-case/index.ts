export interface IUseCase<TPort, TPayload> {
  execute(port?: TPort): Promise<TPayload>;
}
