const compat = require('../lib/compat');
// import compat from '../lib/compat'

let temp;
const result1 = {
  from: 'singlemessage',
  isappinstalled: '0',
  t3: null,
  t4: 0,
  id: '646156',
  platform: '5',
};
const test1 = {
  from: 'singlemessage',
  isappinstalled: '0',
  t1: '',
  t2: temp,
  t3: null,
  t4: 0,
  id: '646156',
  platform: '5',
};

describe('compat', () => {
  test('test1', () => {
    const result = compat(test1);
    expect(JSON.stringify(result)).toBe(JSON.stringify(result1));
  });
});
