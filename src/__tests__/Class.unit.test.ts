import { Class } from '../emulation';

class BaseClass {
  prop1 = 'any value';
}

class Sample {
  prop1 = 'any value';
}

describe('Class type', () => {
  it('should allow a variable that stores a class to be typed and used as a constructor', () => {
    const SampleClass: Class<BaseClass> = Sample;
    const sample = new SampleClass();
    expect(sample).toBeInstanceOf(Sample);
  });
});
