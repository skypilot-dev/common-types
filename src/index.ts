/* Pseudo-types */
export type Integer = number;

export type Json = string;

export type Timestamp = Integer;


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JsonArray extends Array<JsonValue> {}

export interface JsonObject { [key: string]: JsonValue }

export type JsonValue = Literal | JsonObject | JsonArray | null

export type Literal = boolean | number | string;
