import express from "express";
import morgan from "morgan";
import cors from "cors";
import AuthorRouter from "./routes/AuthorRouter";
import BookRouter from "./routes/BookRouter";
import GenderRouter from "./routes/GenderRouter";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use((_req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

new AuthorRouter(app);
new BookRouter(app);
new GenderRouter(app);

export default app;
