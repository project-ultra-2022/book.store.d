import { DataSource } from "typeorm";
import { AuthorEntity } from "./entities/AuthorEntity";
import { BookEntity } from "./entities/BookEntity";
import { GenderEntity } from "./entities/GenderEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "danielvalencia",
  password: "root",
  database: "typeormdb",
  synchronize: false,
  logging: false,
  subscribers: [],
  migrations: [],
  entities: [GenderEntity, AuthorEntity, BookEntity],
});
