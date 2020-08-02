/* This file contains utility types that match the union of items in an array or of keys & values
   in an object */

export type ArrayItems<A> =
  A extends Array<infer Item> ? Item :
    A extends ReadonlyArray<infer Item> ? Item :
      never;

/* Construct a type that is the union of the types of all entries in object `O` */
export type ObjectEntries<O, Keys extends keyof O = keyof O> ={ [K in Keys]: O[K] }

/* Construct a type that returns all keys of `O` */
export type ObjectKeys<O> = keyof O

/* Construct a type that returns all values in object `O`, or, if `K` is provided, all values
   mapped to keys `K` in object `O` */
export type ObjectValues<O, K extends keyof O = keyof O> =  O[K]
