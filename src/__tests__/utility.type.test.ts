import { ExactlyOne, UnpackedArray } from '../utility';

const array = [1, 'one', { a: 1 }];
const readonlyArray = [1, 'one', { a: 1 }] as const;

type Item = UnpackedArray<typeof array>;
type ReadonlyItem = UnpackedArray<typeof readonlyArray>;

interface User {
  email: string;
  id: number;
}

interface DetailedUser {
  email: string;
  id: number;
  givenName: string;
  surname?: string;
}
describe('ExactlyOne', () => {
  it("when no props are specified, should require exactly one of the object's properties", () => {
    const idOnly: ExactlyOne<User> = { id: 1 };
    const emailOnly: ExactlyOne<User> = { email: 'j@doe.com' };

    // Invalid values
    // const noProps: ExactlyOne<User> = {};
    // const tooManyProps: ExactlyOne<DetailedUser> = { id: 1, email: 'j@doe.com' };

    expect([idOnly, emailOnly]).toBeTruthy();
  });

  it('when props are specified, should require exactly one of the specified props & any number of other props', () => {
    const idOnly: ExactlyOne<DetailedUser, 'id' | 'email'> = { id: 1, givenName: 'J', surname: 'Doe' };
    const emailOnly: ExactlyOne<DetailedUser, 'id' | 'email'> = { email: 'j@doe.com', givenName: 'J' };

    // Invalid values
    // const tooManyProps: ExactlyOne<DetailedUser, 'id' | 'email'> = {};
    // const missingPrimaryProp: ExactlyOne<DetailedUser, 'id' | 'email'> = { giveName: 'J' };
    // const missingOtherProp: ExactlyOne<DetailedUser, 'id' | 'email'> = { id: 1 };

    expect([idOnly, emailOnly]).toBeTruthy();
  });
});

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
