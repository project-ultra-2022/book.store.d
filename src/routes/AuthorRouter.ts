import { Application } from "express";
import AuthorController from "../controllers/AuthorController";
import AuthorMiddleware from "../middlewares/AuthorMiddleware";

export default class AuthorRouter {
  private readonly endPoint: string;
  private readonly middleware: AuthorMiddleware;
  private readonly controller: AuthorController;

  constructor(app: Application) {
    this.endPoint = "/author";
    this.middleware = new AuthorMiddleware();
    this.controller = new AuthorController();

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
