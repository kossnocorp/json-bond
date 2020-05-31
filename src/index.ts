export type JSONBond<_Type> = { json: string }

export function stringify<Type>(object: Type): JSONBond<Type> {
  return { json: JSON.stringify(object) }
}

export function parse<Type>({ json }: JSONBond<Type>): Type {
  return JSON.parse(json) as Type
}
