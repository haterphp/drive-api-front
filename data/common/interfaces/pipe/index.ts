export interface IPipe<TPort, TPayload> {
  transform(port: TPort): Promise<TPayload>;
}
