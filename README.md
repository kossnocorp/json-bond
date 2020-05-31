# JSON bond

JSON bond provides a way to add type-safety to JSON strings.

## Installation

The library is available as an [npm package](https://www.npmjs.com/package/json-bond). To install JSON bond, run:

```sh
npm install json-bond --save
# Or using Yarn:
yarn add json-bond
```

## Usage

```ts
import { JSONBond, parse, stringify } from 'json-bond'

type Abc = { [char: string]: number }
const abc: Abc = { a: 1, b: 2 }

const json = stringify(abc)
//=> JSONBond<Abc>

const result = parse(json)
//=> Abc
```

## Changelog

See [the changelog](./CHANGELOG.md).

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)
