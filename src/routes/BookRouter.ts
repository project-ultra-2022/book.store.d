import { Application } from "express";
import BookController from "../controllers/BookController";
import BookMiddleware from "../middlewares/BookMiddleware";

export default class BookRouter {
  private readonly endPoint: string;
  private readonly middleware: BookMiddleware;
  private readonly controller: BookController;

  constructor(app: Application) {
    this.endPoint = "/book";
    this.middleware = new BookMiddleware();
    this.controller = new BookController();

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
