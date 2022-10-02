import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import AuthorInterface from "../interfaces/AuthorInterface";
import { BookEntity } from "./BookEntity";

@Entity("authors")
export class AuthorEntity extends BaseEntity implements AuthorInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  @Column()
  birth_date: Date;

  @Column()
  death_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => BookEntity, (books) => books.author)
  books: BookEntity[];
}
