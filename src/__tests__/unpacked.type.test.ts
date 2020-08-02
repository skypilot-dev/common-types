/* eslint-disable @typescript-eslint/no-unused-vars */

import type { ArrayItems, ObjectEntries, ObjectKeys, ObjectValues } from '../unpacked';

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

describe('ObjectKeys', () => {
  it("should determine that the keys in { a: 1, b: 2 } are of type `{ [key: 'a' | 'b']: number }`", () => {
    const map = { a: 1, b: 2 };
    const validKey: ObjectKeys<typeof map> = 'b';

    /* Invalid values */
    // const invalidKey: ObjectKeys<typeof map> = 'c';

    expect(validKey).toBeTruthy();
  });
});

describe('ObjectValues', () => {
  it("should determine that the values in { a: 1, b: 'string' } are of type `number | string`", () => {
    const map = { a: 1, b: '2' };
    const validNumberValue: ObjectValues<typeof map> = 3;
    const validStringValue: ObjectValues<typeof map> = '4';

    const validAValue: ObjectValues<typeof map, 'a'> = 5;
    const validBValue: ObjectValues<typeof map, 'b'> = '6';

    /* Invalid values */
    // const invalidValue: ObjectValues<typeof map> = true; // not of type 'number | string'
    // const invalidAValue: ObjectValues<typeof map, 'a'> = '7'; // not of type 'number'
    // const invalidBValue: ObjectValues<typeof map, 'b'> = 8; // not of type 'string'

    expect([validNumberValue, validStringValue, validAValue, validBValue]).toBeTruthy();
  });

  it('should determine that the values in read-only { a: 1, b: 2 } are of type `1 | 2`', () => {
    const map = { a: 1, b: 2 } as const;
    const validValue: ObjectValues<typeof map> = 1;

    /* Invalid values */
    // const invalidValue: ObjectValues<typeof map> = 3;

    expect(validValue).toBeTruthy();
  });
});

describe('ObjectEntries', () => {
  it('should determine that the entries in { a: 1, b: 2 } are of type `{ a: number, b: number }`', () => {
    const map = { a: 1, b: 2 };
    const validMap: ObjectEntries<typeof map> = { a: 3, b: 4 };
    const validConstrainedMap: ObjectEntries<typeof map, 'a'> = { a: 3 };

    /* Invalid values */
    // const invalidMap: ObjectEntries<typeof map> = { c: 1 };
    // const invalidConstrainedMap: ObjectEntries<typeof map, 'a'> = { b: 3 };

    expect([validMap, validConstrainedMap]).toBeTruthy();
  });

  it('should determine that the entries in read-only { a: 1, b: 2 } are of type `{ a: 1, b: 2 }`', () => {
    const map = { a: 1, b: 2 } as const;
    const validMap: ObjectEntries<typeof map> = { a: 1, b: 2 };
    const validConstrainedMap: ObjectEntries<typeof map, 'b'> = { b: 2 };

    /* Invalid values */
    // const invalidMap1: ObjectEntries<typeof map> = { a: 2, b: 1 };
    // const invalidMap2: ObjectEntries<typeof map> = { a: 1, b: 2, c: 3 };
    // const invalidConstrainedMap: ObjectEntries<typeof map, 'b'> = { a: 1 };

    expect([validMap, validConstrainedMap]).toBeTruthy();
  });
});
