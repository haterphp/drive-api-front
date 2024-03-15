import { IPipe } from "../../interfaces";

interface IMessagePipePayload {
  message: string;
  replaceArgs: Record<string, string>;
}

class MessagePipe implements IPipe<IMessagePipePayload, string> {
  public transform(data: IMessagePipePayload): Promise<string> {
    const { message, replaceArgs } = data;

    const result = Object.entries(replaceArgs).reduce((acc, [k, v]) => {
      const r = new RegExp(`{{${k}}}`, "g");
      if (v !== undefined) return acc.replaceAll(r, v);
      return acc;
    }, message);

    return Promise.resolve(result);
  }
}

export { MessagePipe };
