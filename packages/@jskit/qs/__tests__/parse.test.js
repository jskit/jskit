// const parse = require('../lib/parse');
import parse from '../src/parse';

const test1 =
  'https://m.iqianggou.com/?from=singlemessage&isappinstalled=0#bargain?id=646156&platform=5';
const result1 = {
  from: 'singlemessage',
  isappinstalled: '0',
  id: '646156',
  platform: '5',
};
const test2 = 'haoshiqi://com.doweidu/detail?id=1&order_id=23';
const test3 = 'id=1&order_id=23';
const test4 = 'id=1?order_id=23';
const test5 = 'id=1&order-id=23';
const result2 = {
  id: '1',
  order_id: '23',
};
const result5 = {
  id: '1',
  'order-id': '23',
};

describe('parse', () => {
  test('test1', () => {
    const result = parse(test1);
    expect(JSON.stringify(result)).toBe(JSON.stringify(result1));
  });

  const r2 = JSON.stringify(result2);
  const r5 = JSON.stringify(result5);
  test('test2', () => {
    const result = parse(test2);
    expect(JSON.stringify(result)).toBe(r2);
  });
  test('test3', () => {
    const result = parse(test3);
    expect(JSON.stringify(result)).toBe(r2);
  });
  test('test4', () => {
    const result = parse(test4);
    expect(JSON.stringify(result)).toBe(r2);
  });
  test('test5', () => {
    const result = parse(test5);
    expect(JSON.stringify(result)).toBe(r5);
  });
});
