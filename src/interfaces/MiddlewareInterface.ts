import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export default interface MiddlewareInterface {
  createValidation: Schema;
  updateValidation: Schema;
  create(req: Request, res: Response, next: NextFunction): any;
  update(req: Request, res: Response, next: NextFunction): any;
}
