export interface JSONBond<_Type> extends String {}

export function stringify<Type>(object: Type): JSONBond<Type> {
  return JSON.stringify(object);
}

export function parse<Type>(json: JSONBond<Type>): Type {
  return JSON.parse(json.toString()) as Type;
}