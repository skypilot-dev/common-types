import { RequireProps } from '../index';

type RequireA = {
  a: string;
  b?: string;
  c?: string;
}

type RequireAB = RequireProps<RequireA, 'b'>

describe('RequireProps utility type', () => {
  it('demonstrates that typings work as intended', () => {
    const requireA: RequireA = { a: 'require', c: 'optional' };
    const requireAB: RequireAB = {
      ...requireA,
      b: 'new required',
    };
    expect(requireAB).toHaveProperty('b');
  });
});
