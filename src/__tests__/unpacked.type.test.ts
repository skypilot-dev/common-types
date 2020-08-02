/* eslint-disable @typescript-eslint/no-unused-vars */

import type { ArrayItems } from '../unpacked';

describe('ArrayItems', () => {
  it('should determine that items in [1, 2] have type `number`', () => {
    const numeric = [1, 2];
    const validItem: ArrayItems<typeof numeric> = 1;

    /* Invalid values */
    // const invalidItem: ArrayItems<typeof numeric> = 'string';

    expect(validItem).toBeTruthy();
  });

  it('should determine that items in read-only [1, 2] have type `1 | 2`', () => {
    const numeric = [1, 2] as const;
    const item: ArrayItems<typeof numeric> = 1;

    /* Invalid values */
    // const invalidItem: ArrayItems<typeof numeric> = 3;

    expect(item).toBeTruthy();
  });

  it('should determine that items in [{ a: 1 }, { a: 2 }] have type `{ a: number }`', () => {
    const map = [{ a: 1 }, { a: 2 }];
    const validKey: ArrayItems<typeof map> = { a: 3 };

    /* Invalid values */
    // const invalidKey: ArrayItems<typeof map> = { b: 3 };

    expect(validKey).toBeTruthy();
  });

  it('should determine that items in readonly [{ a: 1 }, { a: 2 }] have type `{ a: 1 | 2 }`', () => {
    const maps = [{ a: 1 }, { a: 2 }] as const;
    const validValue: ArrayItems<typeof maps> = { a: 1 };

    /* Invalid values */
    // const invalidValue: ArrayItems<typeof map> = { a: 3 };

    expect(validValue).toBeTruthy();
  });

  it('should determine that items in [[1]] are of type `number[]`', () => {
    const numericArrays = [[1]];
    const validItem: ArrayItems<typeof numericArrays> = [2];

    /* Invalid values */
    // const invalidItem: ArrayItems<typeof numericArrays> = [''];

    expect(validItem).toBeTruthy();
  });

  it('should determine that items in read-only [[1, 2], [3]] are of type `[1 | 2] | [3]`', () => {
    const numericArrays = [[1, 2], [3]] as const;
    const validTuple: ArrayItems<typeof numericArrays> = [1, 2];
    const validItem: ArrayItems<typeof numericArrays> = [3];

    /* Invalid values */
    // const invalidTuple: ArrayItems<typeof numericArrays> = [1];
    // const invalidItem: ArrayItems<typeof numericArrays> = [4];

    expect([validItem, validTuple]).toBeTruthy();
  });

  it('should determine that a non-array value cannot have ArrayItems', () => {
    const map = { 0: 'a' };

    /* Invalid values */
    // const invalidItem: ArrayItems<typeof map> = 'b';

    expect(map).toBeTruthy();
  });
});
