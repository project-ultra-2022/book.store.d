export default interface BusinessInterface {
  detail(id: number): Promise<any>;
  index(): Promise<any>;
  create(): Promise<any>;
  update(id: number): Promise<any>;
  delete(id: number): Promise<any>;
}
