import assert from 'assert'
import { expectType } from 'ts-expect'
import { JSONBond, parse, stringify } from '.'

type Abc = { [char: string]: number }
const abc: Abc = { a: 1, b: 2 }

describe('JSON bond', () => {
  describe('stringify', () => {
    it('stringifies an object to JSON', () => {
      const json = stringify(abc)
      expectType<JSONBond<Abc>>(json)
      assert.deepEqual(json, '{"a":1,"b":2}')
    })
  })

  describe('parse', () => {
    it('parses JSON to an object', () => {
      const object = parse(stringify(abc))
      expectType<Abc>(object)
      assert.deepEqual(object, abc)
    })
  })
})
