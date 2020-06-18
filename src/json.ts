/* Pass in `Allow: undefined` to allow undefined values */

import { MaybeUndefined } from './utility';

export type DefiniteJsonArray = Array<DefiniteJsonValue>

export type DefiniteJsonMap = { [key: string]: DefiniteJsonValue }

export type DefiniteJsonValue = DefiniteJsonArray | DefiniteJsonMap | JsonPrimitive;

export type JsonArray = Array<JsonValue>

export type JsonMap = { [key: string]: JsonValue }

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonMap | MaybeUndefined<JsonPrimitive>;
