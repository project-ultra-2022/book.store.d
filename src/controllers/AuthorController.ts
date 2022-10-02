import { ApiResponse } from "../interfaces/types";
import { Request, Response } from "express";
import InterfaceController from "../interfaces/ControllerInterface";
import AuthorBusiness from "../business/AuthorBusiness";
import AuthorInterface from "../interfaces/AuthorInterface";

export default class AuthorController implements InterfaceController {
  private response: ApiResponse<AuthorInterface | null> = {
    statusCode: 200,
    message: "Request Successful",
  };

  public async detail(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      let id: number =
        typeof req.query.id == "number" ? parseInt(req.query.id) : 1;
      this.response.data = await new AuthorBusiness(req.body).detail(id);
    } catch (error: any) {
      this.response.statusCode = 500;
      this.response.message = error;
    }
    return res.status(this.response.statusCode).send(this.response);
  }

  public async index(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    let responseCreate: ApiResponse<Array<AuthorInterface>> = {
      statusCode: 200,
      message: "Request Successful",
    };
    try {
      responseCreate.data = await new AuthorBusiness(req.body).index();
    } catch (error: any) {
      responseCreate.statusCode = 500;
      responseCreate.message = error;
    }
    return res.status(responseCreate.statusCode).send(responseCreate);
  }

  public async create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      this.response.data = await new AuthorBusiness(req.body).create();
    } catch (error: any) {
      this.response.statusCode = 500;
      this.response.message = error;
    }
    return res.status(this.response.statusCode).send(this.response);
  }

  public async update(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      let id: number =
        typeof req.query.id == "number" ? parseInt(req.query.id) : 1;
      this.response.data = await new AuthorBusiness(req.body).update(id);
    } catch (error: any) {
      this.response.statusCode = 500;
      this.response.message = error;
    }
    return res.status(this.response.statusCode).send(this.response);
  }

  public async delete(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      let id: number =
        typeof req.query.id == "number" ? parseInt(req.query.id) : 1;
      this.response.data = await new AuthorBusiness(req.body).delete(id);
    } catch (error: any) {
      this.response.statusCode = 500;
      this.response.message = error;
    }
    return res.status(this.response.statusCode).send(this.response);
  }
}
