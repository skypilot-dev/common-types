# @skypilot/common-types

[![npm stable](https://img.shields.io/npm/v/@skypilot/common-types?label=stable)](https://www.npmjs.com/package/@skypilot/common-types)&nbsp;
[![build](https://img.shields.io/github/workflow/status/skypilotcc/common-types/Stable%20release?label=stable%20build)]()&nbsp;
[![npm next](https://img.shields.io/npm/v/@skypilot/common-types/next?label=next)](https://www.npmjs.com/package/@skypilot/common-types)&nbsp;
[![next build](https://img.shields.io/github/workflow/status/skypilotcc/common-types/Prerelease?branch=next&label=next%20build)]()
[![license: ISC](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)  

A library of reusable common types for TypeScript projects

### Types & interfaces

```
interface Class<T> extends Function {
  new(...args: any[]): T
}

type Email = string

type Enum<E> = Record<keyof E, number | string> & { [key: number]: string }

type Integer = number

type Json = string

interface JsonArray extends Array<JsonValue> {}

interface JsonObject { [key: string]: JsonValue }

type JsonValue = Literal | JsonObject | JsonArray | null

type Literal = boolean | number | string

type SortComparison = -1 | 0 | 1

type Timestamp = Integer

type Url = string
```
