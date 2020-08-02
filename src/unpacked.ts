/* This file contains utility types that match the union of items in an array or of keys & values
   in an object */

export type ArrayItems<A> =
  A extends Array<infer Item> ? Item :
    A extends ReadonlyArray<infer Item> ? Item :
      never;
