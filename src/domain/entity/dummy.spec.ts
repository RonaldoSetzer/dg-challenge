import { dummy } from './dummy';

describe('Dummy test', () => {
  it('should pass', () => {
    expect(dummy()).toEqual('dummy');
  });
});
