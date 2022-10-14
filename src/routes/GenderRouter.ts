import { Application } from "express";
import GenderController from "../controllers/GenderController";
import GenderMiddleware from "../middlewares/GenderMiddleware";

export default class GenderRouter {
  private readonly endPoint: string;
  private readonly middleware: GenderMiddleware;
  private readonly controller: GenderController;

  constructor(app: Application) {
    this.endPoint = "/gender";
    this.middleware = new GenderMiddleware();
    this.controller = new GenderController();

    app
      .route(this.endPoint)
      .get(this.controller.index.bind(this.controller))
      .post(this.middleware.create.bind(this.middleware))
      .post(this.controller.create.bind(this.controller));

    app
      .route(this.endPoint + "/:id")
      .get(this.controller.detail.bind(this.controller))
      .delete(this.controller.delete.bind(this.controller))
      .put(this.middleware.update.bind(this.middleware))
      .put(this.controller.update.bind(this.controller));
  }
}
