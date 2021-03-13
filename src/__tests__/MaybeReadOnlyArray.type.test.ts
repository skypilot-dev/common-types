export {};

function toWritableArray<Item>(items: readonly Item[]): Item[] {
  return [
    ...items,
  ];
}

describe('MaybeReadOnlyArray', () => {
  it('should accept a constant array', () => {
    const items = [1, 2] as const;

    const mutableArray = toWritableArray(items);

    expect(mutableArray).toStrictEqual(items);
  });

  it('should accept a read-only array', () => {
    const items: readonly number[] = [1, 2];

    const mutableArray = toWritableArray(items);

    expect(mutableArray).toStrictEqual(items);
  });

  it('should accept a writable array', () => {
    const items = [1, 2];

    const mutableArray = toWritableArray(items);

    expect(mutableArray).toStrictEqual(items);
  });
});
