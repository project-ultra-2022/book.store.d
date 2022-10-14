import { GenderEntity } from "../entities/GenderEntity";
import BusinessInterface from "../interfaces/BusinessInterface";
import GenderInterface from "../interfaces/GenderInterface";

export default class GenderBusiness implements BusinessInterface {
  private readonly data: GenderInterface | any;

  constructor(data?: GenderInterface) {
    this.data = data;
  }

  public async detail(id: number): Promise<GenderInterface> {
    const model = await GenderEntity.findOneBy({ id: id });
    if (!model) throw [204, "Element does not exist"];
    return model;
  }

  public async index(): Promise<Array<GenderInterface>> {
    const arrayModel = await GenderEntity.find();
    if (!arrayModel || arrayModel.length <= 0)
      throw [204, "Element does not exist"];
    return arrayModel;
  }

  public async create(): Promise<GenderInterface> {
    let model = new GenderEntity();
    model.name = this.data.name;
    return await model.save();
  }

  public async update(id: number): Promise<Boolean> {
    await this.detail(id);
    const model = await GenderEntity.update({ id: id }, this.data);
    if (!model.affected || model.affected <= 0) throw false;
    return true;
  }

  public async delete(id: number): Promise<Boolean> {
    await this.detail(id);
    const model = await GenderEntity.delete({ id: id });
    if (!model.affected || model.affected <= 0) throw false;
    return true;
  }
}
