import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import GenderInterface from "../interfaces/GenderInterface";
import { BookEntity } from "./BookEntity";

@Entity("genders")
export class GenderEntity extends BaseEntity implements GenderInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => BookEntity, (books) => books.gender)
  books: BookEntity[];
}
