// import assert from 'power-assert';
import * as assert from 'power-assert';

describe('index', function() {
  it('works', function() {
    const a = [1, 2, 3];
    const zero = 0;
    const two = 2;
    assert(a.indexOf(zero) === two);
  });
});
