import {
  JsonArray,
  JsonMap,
  JsonPrimitive,
  JsonValue,
  IndefiniteJsonValue,
  DefiniteJsonMap,
  DefiniteJsonArray,
  IndefiniteJsonArray,
  IndefiniteJsonMap,
  DefiniteJsonValue,
} from '../json';

const primitives = [true, 0, 'string', null];
const maybeUndefinedPrimitives = [...primitives, undefined];

const primitivesMap = {
  boolean: true,
  number: 0,
  string: 'string',
  null: null,
};
const indefinitePrimitivesMap = {
  ...primitivesMap,
  undefined: undefined,
};

describe('JsonPrimitive', () => {
  it('JsonPrimitive should match boolean, number, string, or null', () => {
    const jsonPrimitives: JsonPrimitive[] = primitives;
    expect(jsonPrimitives).toBe(jsonPrimitives);
  });

  it('JsonPrimitive<undefined> should also match undefined values', () => {
    const jsonPrimitives: JsonPrimitive<undefined>[] = [
      true,
      0,
      'string',
      null,
      undefined,
    ];
    expect(jsonPrimitives).toBe(jsonPrimitives);
  });
});

describe('JsonMap', () => {
  it('and its alias DefiniteJsonMap should allow definite values', () => {
    const jsonMap: JsonMap = {
      boolean: true,
      number: 0,
      string: 'string',
      null: null,
    };
    expect(jsonMap).toBe(jsonMap);

    const definiteJsonMap: DefiniteJsonMap = { ...jsonMap };
    expect(definiteJsonMap).toBe(definiteJsonMap);
  });

  it('JsonMap<undefined> and its alias IndefiniteJsonMap should allow indefinite values', () => {
    const jsonMap: JsonMap<undefined> = indefinitePrimitivesMap;
    expect(jsonMap).toBe(jsonMap);

    const indefiniteJsonMap: IndefiniteJsonMap = { ...jsonMap };
    expect(indefiniteJsonMap).toBe(indefiniteJsonMap);
  });
});

describe('JsonArray', () => {
  it('and its alias DefiniteJsonArray should allow definite values', () => {
    const jsonArray: JsonArray = [
      ...primitives,
      primitivesMap,
      { a: primitivesMap, b: [primitivesMap] },
    ];
    expect(jsonArray).toBe(jsonArray);

    const definiteJsonArray: DefiniteJsonArray = [...jsonArray];
    expect(definiteJsonArray).toBe(definiteJsonArray);
  });

  it('JsonArray<undefined> should allow indefinite values', () => {
    const jsonArray: JsonArray<undefined> = [
      ...maybeUndefinedPrimitives,
      indefinitePrimitivesMap,
      { a: indefinitePrimitivesMap, b: [indefinitePrimitivesMap] },
    ];
    expect(jsonArray).toBe(jsonArray);

    const indefiniteJsonArray: IndefiniteJsonArray = [...jsonArray];
    expect(indefiniteJsonArray).toBe(indefiniteJsonArray);
  });
});

describe('JsonValue', () => {
  it('and its alias DefiniteJsonValue should allow definite values', () => {
    const jsonValues: JsonValue[] = [
      ...primitives,
      primitivesMap,
      { a: primitivesMap, b: [primitivesMap] },
    ];
    expect(jsonValues).toBe(jsonValues);

    const definiteJsonValues: DefiniteJsonValue[] = [...jsonValues];
    expect(definiteJsonValues).toBe(definiteJsonValues);
  });

  it('JsonValue<undefined> and its alias IndefiniteJsonValue should allow indefinite values', () => {
    const jsonValues: Array<JsonValue<undefined>> = [
      ...maybeUndefinedPrimitives,
      indefinitePrimitivesMap,
      { a: indefinitePrimitivesMap, b: [indefinitePrimitivesMap] },
    ];
    expect(jsonValues).toBe(jsonValues);

    const maybeUndefined: IndefiniteJsonValue[] = [...jsonValues];
    expect(maybeUndefined).toBe(maybeUndefined);
  });
});
