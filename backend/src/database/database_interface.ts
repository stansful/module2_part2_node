export interface Database<Type> {
  findAll(): Type[];

  findOne(any: Type): Type;

  create(any: Type): Type;

  delete(any: Type): Type;
}
