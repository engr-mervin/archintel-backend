import { Request, Response, NextFunction } from "express";

export function catchError(func: Function) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
}
