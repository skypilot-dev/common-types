/* Pseudo-types */
export type Integer = number;

export type Json = string;

export type Timestamp = Integer;


export interface Class<T> extends Function {
  new (...args: any[]): T;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JsonArray extends Array<JsonValue> {}

export interface JsonObject { [key: string]: JsonValue }

export type JsonValue = Literal | JsonObject | JsonArray | null

export type Literal = boolean | number | string;
