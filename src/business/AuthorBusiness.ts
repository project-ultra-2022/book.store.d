import { AuthorEntity } from "../entities/AuthorEntity";
import AuthorInterface from "../interfaces/AuthorInterface";
import BusinessInterface from "../interfaces/BusinessInterface";

export default class AuthorBusiness implements BusinessInterface {
  private readonly data: AuthorInterface;

  constructor(data: AuthorInterface) {
    this.data = data;
  }

  public async detail(id: number): Promise<AuthorInterface> {
    const model = await AuthorEntity.findOneBy({ id: id });
    if (!model) throw [204, "Element does not exist"];
    return model;
  }

  public async index(): Promise<Array<AuthorInterface>> {
    const arrayModel = await AuthorEntity.find();
    if (!arrayModel || arrayModel.length <= 0)
      throw [204, "Element does not exist"];
    return arrayModel;
  }

  public async create(): Promise<AuthorInterface> {
    let model = new AuthorEntity();
    model.name = this.data.name;
    model.country = this.data.country;
    model.birth_date = new Date(this.data.birth_date);
    model.death_date = new Date(this.data.death_date);
    return await model.save();
  }

  public async update(id: number): Promise<Boolean> {
    await this.detail(id);
    const model = await AuthorEntity.update({ id: id }, this.data);
    if (!model.affected || model.affected <= 0) throw false;
    console.log("PONER ATENCIÓN");
    console.log(model);
    return true;
  }

  public async delete(id: number): Promise<Boolean> {
    await this.detail(id);
    const model = await AuthorEntity.delete({ id: id });
    if (!model.affected || model.affected <= 0) throw false;
    return true;
  }
}
