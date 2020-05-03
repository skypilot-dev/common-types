/* Pseudo-types */
/* TODO: Implement actual validation of pseudo-types if it ever becomes possible in TypeScript */

export type Email = string;

export type Html = string;

export type Integer = number;

export type Json = string;

export type SortComparison = -1 | 0 | 1;

export type Timestamp = Integer;

export type Url = string;


export interface Class<T> extends Function {
  new (...args: any[]): T;
}

export type Enum<E> = Record<keyof E, number | string> & { [key: number]: string };

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JsonArray extends Array<JsonValue> {}

export interface JsonObject { [key: string]: JsonValue }

export type JsonValue = Literal | JsonObject | JsonArray | null

export type Literal = boolean | number | string;

/* UTILITY TYPES  */

/* From https://stackoverflow.com/questions/40510611 */
export type AtLeastOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
}[Keys]

/* From https://stackoverflow.com/questions/40510611 */
export type ExactlyOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>
}[Keys]

export type Maybe<T> = T | null | undefined;

export type MaybeNull<T> = T | null;

export type MaybeReadOnlyArray<T> = T[] | readonly T[];

export type MaybeUndefined<T> = T | undefined;

/* Utility type to transform optional properties to required properties. */
/* DEPRECATED in favor of `RequireProps`. */
export type Require<T, R extends keyof T> = Omit<T, R> & Required<Pick<T, R>>

/* Utility type to transform optional properties to required properties. */
export type RequireProps<T, Require extends keyof T> = Omit<T, Require> & Required<Pick<T, Require>>
