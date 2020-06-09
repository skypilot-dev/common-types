/* Pass in `Allow: undefined` to allow undefined values */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JsonArray<Allow = never> extends Array<JsonValue<Allow>> {}

export type JsonMap<Allow = never> = {
  [key: string]: JsonArray<Allow> | JsonMap<Allow> | JsonPrimitive<Allow>;
}

export type JsonPrimitive<Allow = never> = boolean | number | string | null | Allow;

export type JsonValue<Allow = never> = JsonArray<Allow> | JsonMap<Allow> | JsonPrimitive<Allow>;

export type DefiniteJsonArray = JsonArray<never>;
export type DefiniteJsonMap = JsonMap<never>;
export type DefiniteJsonValue = JsonValue<never>;

export type IndefiniteJsonArray = JsonArray<undefined>;
export type IndefiniteJsonMap = JsonMap<undefined>;
export type IndefiniteJsonValue = JsonValue<undefined>;
