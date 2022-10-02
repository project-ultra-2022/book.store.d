import { Request, Response } from "express";

export default interface ControllerInterface {
  detail(req: Request, res: Response): Promise<any>;
  index(req: Request, res: Response): Promise<any>;
  create(req: Request, res: Response): Promise<any>;
  update(req: Request, res: Response): Promise<any>;
  delete(req: Request, res: Response): Promise<any>;
}
