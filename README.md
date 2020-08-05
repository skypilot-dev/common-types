# @skypilot/common-types

[![npm stable](https://img.shields.io/npm/v/@skypilot/common-types?label=stable)](https://www.npmjs.com/package/@skypilot/common-types)
![stable build](https://img.shields.io/github/workflow/status/skypilot-dev/common-types/Stable%20release?label=stable%20build)
[![npm next](https://img.shields.io/npm/v/@skypilot/common-types/next?label=next)](https://www.npmjs.com/package/@skypilot/common-types)
![next build](https://img.shields.io/github/workflow/status/skypilot-dev/common-types/Prerelease?branch=next&label=next%20build)
![Codacy grade](https://img.shields.io/codacy/grade/561f2e20f35944e69cedc01073fd5823)
![downloads](https://img.shields.io/npm/dm/@skypilot/common-types)
[![license: ISC](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A library of reusable common types for TypeScript projects

## Exports

### Convenience aliases

```typescript
type AnyRecord = Record<string, any>

// Describes an object without properties
type EmptyObject = { [key: string]: never; [key: number]: never }
```

### Emulation types

```typescript
interface Class<T> extends Function {
  new(...args: any[]): T
}

type Enum<E> = Record<keyof E, number | string> & { [key: number]: string }

type Primitive = boolean | number | string;
```

### JSON types

```typescript
// Constructs a type that matches any serializable value
export type AsJsonValue<T> =
  T extends JsonPrimitive ? T :
    T extends Function ? never :
      T extends Array<unknown> ? AsJsonArray<T> :
        T extends object ? AsJsonMap<T> :
          never;

//  Constructs a type that matches any serializable array
export type AsJsonArray<T> = Array<AsJsonValue<UnpackedArray<T>>>

// Constructs a type that matches any serializable object map
export type AsJsonMap<T> =
  T extends Array<unknown> ? never :
    {[K in keyof T]: AsJsonValue<T[K]> };

interface DefiniteJsonArray extends Array<DefiniteJsonValue> {}

type DefiniteJsonMap = {
  [key: string]: DefiniteJsonArray | DefiniteJsonMap | JsonPrimitive;
}

type DefiniteJsonValue = DefiniteJsonArray | DefiniteJsonMap | JsonPrimitive;

interface JsonArray extends Array<JsonValue> {}

type JsonMap = {
  [key: string]: JsonArray | JsonMap | JsonPrimitive | undefined;
}

type JsonPrimitive = boolean | number | string | null;

type JsonValue = JsonArray | JsonMap | JsonPrimitive | undefined;
```

### Pseudo-types

These types provide semantic value only. (Until TypeScript allows pattern-matching, the patterns
these types imply will not be enforced.)

```typescript
type Email = string

type Integer = number

type Json = string

type Timestamp = Integer

type Url = string
```

### Utility types
`ArrayItems<A>`: constructs a type that is the union of all items in array `A`

`AtLeastOne<T>`: constructs a type that requires at least one property of `T`

`ExactlyOne<T>`: constructs a type that requires exactly one property of `T`

`Maybe<T>`: constructs a type that allows `T`, `null`, or `undefined`

`MaybeNull<T>`: constructs a type that allows `T` or `null`

`MaybeReadOnly<T>`: constructs a type that allows `T[]` or `readonly T[]`

`MaybeUndefined<T>`: constructs a type that allows `T` or `undefined`

`ObjectEntries<O>`: constructs a type that is the union of the types of all entries in object `O`

`ObjectKeys<O>`: constructs a type that is the union of all keys in object `O`

`ObjectValues<O, K?>`: constructs a type that is the union of all values in object `O`, or, if `K`
is provided, of all values mapped to keys `K` in object `O`

`PromisedReturnType<F>`: obtains the promised return type of function `F`

`Require<T, Required>` \[DEPRECATED in favor of `RequireProps`\]: constructs a type that makes the
`Required` properties of `T` required

`RequireProps<T, Required>`: constructs a type that makes the `Required` properties of `T` required

`UnpackedArray<T>`: constructs a type that is the union of the types of the items in an array of type `T`
