import { Url } from '../pseudo';

describe('Url type', () => {
  it('should be a string', () => {
    const url: Url = 'http://example.com';
    expect(typeof url).toBe('string');
  });
});
