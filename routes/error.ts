'use strict';

import {Exception} from '../src/exception';
import {NextFunction, Request, Response} from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  next(new Exception(`The path '${req.originalUrl}' does not exist.`, 404));
};

export const handler = (err: Exception, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'There was an error.';
  const source = err.stack || null;

  const error = process.env.NODE_ENV === 'development' ? {status, message, source}: {status, message};

  res.status(status).json({error});
};
