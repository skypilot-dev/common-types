import { UnpackedArray } from '../utility';

const array = [1, 'one', { a: 1 }];
const readonlyArray = [1, 'one', { a: 1 }] as const;

type Item = UnpackedArray<typeof array>;
type ReadonlyItem = UnpackedArray<typeof readonlyArray>;

describe('UnpackedArray', () => {
  it("should determine that the type of [1, 'string', { a: 1 }] is `number | string | { a: number }`", () => {

    const items: Array<Item>[] = [
      ['two', { a: 2 }, 2],
      [],
    ];

    /* Invalid values */
    // const disallowedItems: Item[] = [
    //   null,
    //   undefined,
    //   {},
    //   { b: 1 },
    //   () => true,
    // ];

    expect(items).toBe(items);
  });

  it("should determine that the type of readonly [1,  'one', a: 1 }] is `1 | 'one' | { a: 1 }`", () => {

    const readonlyItems: Array<ReadonlyItem>[] = [
      [1, 'one', { a: 1 }],
      [],
    ];

    /* Invalid values */
    // const disallowedArray: ReadonlyItem[] = [2, 'two', { a: 2 }];

    expect(readonlyItems).toBe(readonlyItems);
  });
});
