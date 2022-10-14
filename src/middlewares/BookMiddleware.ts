import { NextFunction, Request, Response } from "express";
import Joi, { Schema } from "joi";
import { ApiResponse } from "../interfaces/types";
import ValidateHelper from "../helpers/ValidateHelper";
import MiddlewareInterface from "../interfaces/MiddlewareInterface";

export default class BookMiddleware implements MiddlewareInterface {
  createValidation: Schema;
  updateValidation: Schema;
  private response: ApiResponse<any[]> = {
    statusCode: 400,
    message: "The data provided is not correct",
  };
  private readonly REGEX_STRING: RegExp =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  constructor() {
    this.createValidation = Joi.object()
      .keys({
        name: Joi.string()
          .required()
          .regex(this.REGEX_STRING)
          .label("The field 'name' is required and only allows letters"),
        year: Joi.string()
          .required()
          .label(
            "The field 'year' is required and only allows the structure year (2000)"
          ),
        genderId: Joi.string()
          .required()
          .label("The field 'genderId' is required and only allows numbers"),
        authorId: Joi.string()
          .required()
          .label("The field 'authorId' is required and only allows numbers"),
      })
      .required();

    this.updateValidation = Joi.object()
      .keys({
        name: Joi.string()
          .regex(this.REGEX_STRING)
          .label("The field 'name' only allows letters"),
        year: Joi.string().label(
          "The field 'year' only allows the structure year (2000)"
        ),
        genderId: Joi.string().label(
          "The field 'genderId' only allows numbers"
        ),
        authorId: Joi.string().label(
          "The field 'authorId' only allows numbers"
        ),
      })
      .required();
  }

  public create(req: Request, res: Response, next: NextFunction): any {
    const { error } = this.createValidation.validate(req.body, {
      abortEarly: false,
    });
    if (error != null) {
      this.response.data = ValidateHelper.validate(error);
      return res.status(this.response.statusCode).send(this.response);
    }
    return next();
  }

  public update(req: Request, res: Response, next: NextFunction): any {
    const { error } = this.updateValidation.validate(req.body, {
      abortEarly: false,
    });
    if (error != null) {
      this.response.data = ValidateHelper.validate(error);
      return res.status(this.response.statusCode).send(this.response);
    }
    return next();
  }
}
