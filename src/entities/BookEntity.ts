import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import BookInteface from "../interfaces/BookInterface";
import { AuthorEntity } from "./AuthorEntity";
import { GenderEntity } from "./GenderEntity";

@Entity("books")
export class BookEntity extends BaseEntity implements BookInteface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  year: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => AuthorEntity, (author) => author.books)
  author: AuthorEntity;

  @ManyToOne(() => GenderEntity, (gender) => gender.books)
  gender: GenderEntity;
}
