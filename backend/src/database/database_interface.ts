export interface Database<Type> {
  findAll(): Type[];

  findOne(any: Type): Type | undefined;

  create(any: Type): Type;

  delete(any: Type): Type;
}
