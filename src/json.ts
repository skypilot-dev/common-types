import { Literal } from './emulation';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JsonArray extends Array<JsonValue> {}

export interface JsonObject { [key: string]: JsonValue }

export type JsonValue = Literal | JsonObject | JsonArray | null
