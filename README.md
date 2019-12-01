# @skypilot/common-types

A library of reusable common types for TypeScript projects

### Types & interfaces

interface Class<T> extends Function {
  new(...args: any[]): T
}

type Integer = number

type Json = string

interface JsonArray extends Array<JsonValue> {}

interface JsonObject { [key: string]: JsonValue }

type JsonValue = Literal | JsonObject | JsonArray | null

type Literal = boolean | number | string

type Timestamp = Integer
