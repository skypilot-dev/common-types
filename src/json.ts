/* eslint-disable @typescript-eslint/no-empty-interface */

/* Pass in `Allow: undefined` to allow undefined values */

import { UnpackedArray } from './utility';

/* eslint-disable @typescript-eslint/ban-types */
export type AsJsonValue<T> =
  T extends JsonPrimitive ? T :
    T extends Function ? never :
      T extends Array<unknown> ? AsJsonArray<T> :
        T extends object ? AsJsonMap<T> :
          never;

export type AsJsonArray<T> = Array<AsJsonValue<UnpackedArray<T>>>

export type AsJsonMap<T> =
  T extends Array<unknown> ? never :
    {[K in keyof T]: AsJsonValue<T[K]> };

export interface DefiniteJsonArray extends ArrayLike<DefiniteJsonValue> {}

export interface DefiniteJsonMap extends Record<string, DefiniteJsonValue> {}

export type DefiniteJsonValue = JsonPrimitive | JsonArray | JsonMap;

export interface JsonArray extends ArrayLike<JsonValue> {}

export interface JsonMap extends Record<string, JsonValue> {}

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonPrimitive | JsonArray | JsonMap | undefined;

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type NotJsonable = ((...args: any[]) => any) | undefined;
