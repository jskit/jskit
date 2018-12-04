const parse = require('../lib/parse');
// import parse from '../src/parse'

const test1 =
  'https://m.iqianggou.com/?from=singlemessage&isappinstalled=0#bargain?id=646156&platform=5';
const result1 = {
  from: 'singlemessage',
  isappinstalled: '0',
  id: '646156',
  platform: '5',
};
const test2 = 'haoshiqi://com.doweidu/activityshare?activityId=1&xxx=23';
const test3 = 'activityId=1&xxx=23';
const result2 = {
  activityId: '1',
  xxx: '23',
};

describe('parse', () => {
  test('test1', () => {
    const result = parse(test1);
    expect(JSON.stringify(result)).toBe(JSON.stringify(result1));
  });

  const r2 = JSON.stringify(result2);
  test('test2', () => {
    const result = parse(test2);
    expect(JSON.stringify(result)).toBe(r2);
  });
  test('test3', () => {
    const result = parse(test3);
    expect(JSON.stringify(result)).toBe(r2);
  });
});
