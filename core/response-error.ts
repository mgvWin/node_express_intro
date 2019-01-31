import * as Boom from 'boom';

export class ResponseError extends Boom {
  constructor(message?: string | Error, options?: Boom.Options<any>) {
    super(message, options);
  }
}
