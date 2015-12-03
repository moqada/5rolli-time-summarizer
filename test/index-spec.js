import assert from 'power-assert';
import summarizer from '../src';

describe('5rolli-time-summarizer', () => {
  it('summarizer()', () => {
    const ret = summarizer([
      {es50: 60, es90: 200, spent: 100},
      {es50: 120, es90: 300, spent: undefined},
      {es50: 15, es90: 45, spent: undefined},
      {es50: 60, es90: 200, spent: 300}
    ]);
    assert.deepEqual(ret, {
      buffer: 72500,
      es: 524,
      es50: 255,
      es90: 745,
      spent: 400
    });
  });
});
