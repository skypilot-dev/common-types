import {
  AsJsonMap,
  JsonArray,
  JsonMap,
  JsonPrimitive,
  JsonValue,
  DefiniteJsonArray,
  DefiniteJsonMap,
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

describe('AsJson', () => {
  it('AsJsonMap should accept types that satisfy its constrainst', () => {
    interface MyMap {
      a: number;
      b: number;
    }

    /* Because it lacks an index signature, `MyMap` isn't compatible with `JsonMap`;
       but TypeScript is able to infer the type parameter to `AsJsonMap` */
    function takesJsonMap<T>(_map: AsJsonMap<T>): void { /* do nothing */ }
    const myMap: MyMap = { a: 1, b: 2 };
    takesJsonMap(myMap);

    expect(myMap).toBe(myMap);
  });
});

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
