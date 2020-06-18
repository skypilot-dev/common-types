/* Pass in `Allow: undefined` to allow undefined values */

import { MaybeUndefined } from './utility';

/* eslint-disable @typescript-eslint/ban-types */
export type AsJsonMap<T> = { [K in keyof T]: AsJsonValue<T[K]>}

export type AsJsonValue<T> =
  T extends JsonPrimitive ? T :
    T extends Function ? never :
      T extends object ? AsJsonMap<T> :
        never;
/* eslint-enable @typescript-eslint/ban-types */

export type DefiniteJsonArray = Array<DefiniteJsonValue>

export type DefiniteJsonMap = { [key: string]: DefiniteJsonValue }

export type DefiniteJsonValue = DefiniteJsonArray | DefiniteJsonMap | JsonPrimitive;

export type JsonArray = Array<JsonValue>

export type JsonMap = { [key: string]: JsonValue }

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonMap | MaybeUndefined<JsonPrimitive>;
