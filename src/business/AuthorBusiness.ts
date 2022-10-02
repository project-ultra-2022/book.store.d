import { AuthorEntity } from "../entities/AuthorEntity";
import AuthorInterface from "../interfaces/AuthorInterface";
import BusinessInterface from "../interfaces/BusinessInterface";

export default class AuthorBusiness implements BusinessInterface {
  private readonly data: AuthorInterface;

  constructor(data: AuthorInterface) {
    this.data = data;
  }

  public async detail(id: number): Promise<AuthorInterface | null> {
    return await AuthorEntity.findOneBy({ id: id });
  }

  public async index(): Promise<Array<AuthorEntity>> {
    return await AuthorEntity.find();
  }

  public async create(): Promise<AuthorEntity> {
    let model = new AuthorEntity();
    model.name = this.data.name;
    model.country = this.data.country;
    model.birth_date = new Date(this.data.birth_date);
    model.death_date = new Date(this.data.death_date);

    return await model.save();
  }

  public async update(id: number): Promise<AuthorInterface | any> {
    const author = await AuthorEntity.findOneBy({ id: id });
    if (!author) throw "Author does not exist";
    const result = await AuthorEntity.update({ id: id }, this.data);
    if (!result.affected || result.affected <= 0) throw "Error update";
    return await AuthorEntity.findOneBy({ id: id });
  }

  public async delete(id: number): Promise<AuthorInterface | any> {
    const author = await AuthorEntity.findOneBy({ id: id });
    if (!author) throw "Author does not exist";
    const result = await AuthorEntity.delete({ id: id });
    if (!result.affected || result.affected <= 0) throw "Error delete";
    return author;
  }
}
