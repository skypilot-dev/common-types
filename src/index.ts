/* Pseudo-types */
/* TODO: Implement actual validation of pseudo-types if it ever becomes possible in TypeScript */

export type Html = string;

export type Integer = number;

export type Json = string;

export type SortComparison = -1 | 0 | 1;

export type Timestamp = Integer;

export type Url = string;


export interface Class<T> extends Function {
  new (...args: any[]): T;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JsonArray extends Array<JsonValue> {}

export interface JsonObject { [key: string]: JsonValue }

export type JsonValue = Literal | JsonObject | JsonArray | null

export type Literal = boolean | number | string;
