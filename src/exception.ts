'use strict';

export class Exception extends Error {
  public status: number;

  constructor(message: string, status: number = 500) {
    super(message);
    this.status = parseInt(`${status}`, 10);

    Error.captureStackTrace(this, Exception);
  }
}
