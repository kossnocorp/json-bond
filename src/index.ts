export type JsonBond<_Type> = { json: string }

export function stringify<Type>(object: Type): JsonBond<Type> {
  return { json: JSON.stringify(object) }
}

export function parse<Type>({ json }: JsonBond<Type>): Type {
  return JSON.parse(json) as Type
}
