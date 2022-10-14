import { BookEntity } from "../entities/BookEntity";
import BookInteface from "../interfaces/BookInterface";
import BusinessInterface from "../interfaces/BusinessInterface";

export default class BookBusiness implements BusinessInterface {
    private readonly data: BookInteface | any

    constructor(data?: BookInteface) {
        this.data = data;
    }
    public async detail(id: number): Promise<BookInteface> {
        const model = await BookEntity.findOneBy({ id: id })
        if (!model) throw [204, "Element does not exist"];
        return model;
    }

    public async index(): Promise<Array<BookInteface>> {
        const arrayModel = await BookEntity.find()
        if (!arrayModel || arrayModel.length <= 0)
            throw [204, "Element does not exist"];
        return arrayModel;
    }

    public async create(): Promise<BookInteface> {
        let model = new BookEntity
        model.name = this.data.name
        model.year = this.data.year
        model.gender = this.data.genderId
        model.author = this.data.authorId
        return await model.save();
    }

    public async update(id: number): Promise<Boolean> {
        await this.detail(id);
        const model = await BookEntity.update({ id: id }, this.data);
        if (!model.affected || model.affected <= 0) throw false;
        return true;
    }

    public async delete(id: number): Promise<Boolean> {
        await this.detail(id);
        const model = await BookEntity.delete({ id: id });
        if (!model.affected || model.affected <= 0) throw false;
        return true;
    }

}




