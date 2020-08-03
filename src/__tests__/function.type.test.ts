/* This rule must be disabled! Otherwise, TypeScript will use the declared function return types
   instead of inferring them */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { PromisedReturnType } from '../function';

describe('PromisedReturnType', () => {
  it('given an asynchronous function, should obtain the promised return type', () => {

    function syncFn(a: string): string {
      return a;
    }

    async function asyncFn(a: string) {
      return a;
    }

    const retVal: PromisedReturnType<typeof asyncFn> = 'a';

    // Invalid values
    // const invalidValue: PromisedReturnType<typeof asyncFn> = 1; // not a string

    expect([syncFn, retVal]).toBeTruthy();
  });

  it('given a synchronous function that returns a promise, should obtain the promised return type', () => {

    function syncFn(a: string) {
      return Promise.resolve(a);
    }

    const retVal: PromisedReturnType<typeof syncFn> = 'a';

    // Invalid values
    // const invalidSyncFn: PromisedReturnType<typeof syncFn> = 'a'; // not an async function

    expect([syncFn, retVal]).toBeTruthy();
  });
});
