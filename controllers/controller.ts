'use strict';

import {NextFunction, Request, Response} from 'express';

export abstract class Controller {
  private readonly HEADERS = {
    'Content-Type': 'application/json',
  };

  protected request: Request;
  protected response: Response;
  protected next: NextFunction;

  /**
   * @param {e.Request} request
   * @param {e.Response} response
   * @param {e.NextFunction} next
   */
  public constructor(request: Request, response: Response, next: NextFunction) {
    this.request = request;
    this.response = response;
    this.next = next;
  }

  public abstract resolve(): void;

  /**
   * @param {object} data
   * @param {number} status
   */
  protected success(data: object, status: number = 200): void {
    this.response.status(status).header(this.HEADERS).json({data});
  }

  /**
   * @param {any} err
   */
  protected error(err: any): void {
    this.next(err);
  }
}
