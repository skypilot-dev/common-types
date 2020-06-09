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
