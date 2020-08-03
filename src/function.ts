/* eslint-disable @typescript-eslint/no-explicit-any */

/* Obtain the promised return type of an asynchronous function */
export type PromisedReturnType<F extends (...args: any[]) => Promise<any>> =
  F extends (...args: any[]) => Promise<infer R> ? R
    : never;
