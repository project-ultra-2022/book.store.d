import { ApiResponse } from "../interfaces/types";
import { Request, Response } from "express";
import BookBusiness from "../business/BookBusiness";
import BookInterface from "../interfaces/BookInterface";
import ControllerInterface from "../interfaces/ControllerInterface";

export default class BookController implements ControllerInterface {
  private response: ApiResponse<BookInterface> = {
    statusCode: 200,
    message: "Request Successful",
  };

  public async detail(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      this.response.data = await new BookBusiness().detail(
        parseInt(req.params.id)
      );
    } catch (error: any) {
      this.response.statusCode = error[0] ? error[0] : 500;
      this.response.message = error[1] ? error[1] : error;
    }
    return res.status(this.response.statusCode).send(this.response);
  }

  public async index(
    _req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    let responseCreate: ApiResponse<Array<BookInterface>> = {
      statusCode: 200,
      message: "Request Successful",
    };
    try {
      responseCreate.data = await new BookBusiness().index();
    } catch (error: any) {
      responseCreate.statusCode = error[0] ? error[0] : 500;
      responseCreate.message = error[1] ? error[1] : error;
    }
    return res.status(responseCreate.statusCode).send(responseCreate);
  }

  public async create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      this.response.data = await new BookBusiness(req.body).create();
    } catch (error: any) {
      this.response.statusCode = error[0] ? error[0] : 500;
      this.response.message = error[1] ? error[1] : error;
    }
    return res.status(this.response.statusCode).send(this.response);
  }

  public async update(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      await new BookBusiness(req.body).update(parseInt(req.params.id));
    } catch (error: any) {
      this.response.statusCode = error[0] ? error[0] : 500;
      this.response.message = error[1] ? error[1] : error;
    }
    return res.status(this.response.statusCode).send(this.response);
  }

  public async delete(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      await new BookBusiness().delete(parseInt(req.params.id));
    } catch (error: any) {
      this.response.statusCode = error[0] ? error[0] : 500;
      this.response.message = error[1] ? error[1] : error;
    }
    return res.status(this.response.statusCode).send(this.response);
  }
}
