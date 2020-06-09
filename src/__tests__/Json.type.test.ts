import {
  JsonArray,
  JsonMap,
  JsonPrimitive,
  JsonValue,
  DefiniteJsonMap,
  DefiniteJsonArray,
  DefiniteJsonValue,
} from '../json';

const primitives = [true, 0, 'string', null];
const maybeUndefinedPrimitives = [...primitives, undefined];

const primitivesMap = {
  booleanKey: true,
  numberKey: 0,
  stringKey: 'string',
  nullKey: null,
};
const indefinitePrimitivesMap = {
  ...primitivesMap,
  undefinedProp: undefined,
};

describe('JsonPrimitive', () => {
  it('JsonPrimitive should match boolean, number, string, or null', () => {
    const jsonPrimitives: JsonPrimitive[] = primitives;
    expect(jsonPrimitives).toBe(jsonPrimitives);
  });
});

describe('JsonMap', () => {
  it('JsonMap should allow indefinite JsonPrimitive values', () => {
    const jsonMap: JsonMap = indefinitePrimitivesMap;
    expect(jsonMap).toBe(jsonMap);
  });

  it('DefiniteJsonMap should allow only definite JsonPrimitive values', () => {
    const definiteJsonMap: DefiniteJsonMap = primitivesMap;
    expect(definiteJsonMap).toBe(definiteJsonMap);
  });
});

describe('JsonArray', () => {
  it('JsonArray should allow indefinite JsonPrimitive values', () => {
    const jsonArray: JsonArray = [
      ...maybeUndefinedPrimitives,
      indefinitePrimitivesMap,
      { a: indefinitePrimitivesMap, b: [indefinitePrimitivesMap] },
    ];
    expect(jsonArray).toBe(jsonArray);
  });

  it('DefiniteJsonArray should allow only definite JsonPrimitive values', () => {
    const jsonArray: DefiniteJsonArray = [
      ...primitives,
      primitivesMap,
      { a: primitivesMap, b: [primitivesMap] },
    ];
    expect(jsonArray).toBe(jsonArray);
  });
});

describe('JsonValue', () => {
  it('JsonValue should allow indefinite values', () => {
    const jsonValues: Array<JsonValue> = [
      ...maybeUndefinedPrimitives,
      indefinitePrimitivesMap,
      { a: indefinitePrimitivesMap, b: [indefinitePrimitivesMap] },
    ];
    expect(jsonValues).toBe(jsonValues);
  });

  it('DefiniteJsonValue should allow only definite JsonPrimitive values', () => {
    const definiteJsonValues: Array<DefiniteJsonValue> = [
      ...primitives,
      primitivesMap,
      { a: primitivesMap, b: [primitivesMap] },
    ];
    expect(definiteJsonValues).toBe(definiteJsonValues);
  });
});
