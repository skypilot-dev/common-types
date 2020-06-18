import { AsJsonArray, AsJsonMap, AsJsonValue } from '../json';

interface MyMap {
  a: string;
  b?: number;
  c?: {
    d: {
      e: string;
    }[];
  };
}

function takesJsonArray<T>(_array: AsJsonArray<T>): void { /* do nothing */ }
function takesJsonMap<T>(_map: AsJsonMap<T>): void { /* do nothing */ }
function takesJsonValue<T>(_value: AsJsonValue<T>): void { /* do nothing */ }

const typedJsonMap: MyMap = { a: '', b: 2, c: { d: [{ e: '1' }, { e: '2' }] } };
const untypedJsonMap = { a: 1, b: 2, c: [{ e: 1 }], d: null };

describe('AsJsonArray', () => {
  it('should accept any value serializable as a JSON array', () => {

    /* Valid values */
    takesJsonArray([]);
    takesJsonArray([1, 2, 3]);
    takesJsonArray([typedJsonMap]);
    takesJsonArray([untypedJsonMap]);

    /* Invalid values */
    // takesJsonArray(1);
    // takesJsonArray('');
    // takesJsonArray(true);
    // takesJsonArray(null);
    // takesJsonArray({});
    // takesJsonArray(typedJsonMap);
    // takesJsonArray(untypedJsonMap);

    expect(typedJsonMap).toBe(typedJsonMap);
  });
});

describe('AsJsonValue', () => {
  it('should accept any value serializable as JSON', () => {

    /* Valid values */
    takesJsonValue(1);
    takesJsonValue('');
    takesJsonValue(true);
    takesJsonValue(null);
    takesJsonValue({});
    takesJsonValue([]);
    takesJsonValue(typedJsonMap);
    takesJsonValue(untypedJsonMap);

    /* Invalid values */
    // takesJsonValue(() => true);

    expect(typedJsonMap).toBe(typedJsonMap);
  });
});

describe('AsJsonMap', () => {
  it('should accept any object serializable as JSON', () => {

    takesJsonMap(typedJsonMap);
    takesJsonMap(untypedJsonMap);

    /* Invalid values */
    // takesJsonMap(1);
    // takesJsonMap('string');
    // takesJsonMap(true);
    // takesJsonMap(null);
    // takesJsonMap([]);
    // takesJsonMap([1, 2, 3]);
    // takesJsonMap([{ a: 1 }, { b: 2 }, { c: 3 }, { d: null }]);

    expect(true).toBe(true);
  });
});
