import {
  randomRange,
  looseEqual,
  upperFirst,
  kebabCase,
  camelCase,
  sleep,
} from '../lib';

// const testStr =
// '_~0123456789' + 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

test('randomRange', () => {
  expect(randomRange(1)).toBe(1);
  // expect(randomRange(1, 2)).toBe(1);
});

test('looseEqual', () => {
  let temp;
  expect(looseEqual(undefined, null)).toBe(false);
  expect(looseEqual(undefined, '')).toBe(false);
  expect(looseEqual(undefined, false)).toBe(false);
  expect(looseEqual('', false)).toBe(false);
  expect(looseEqual('', 0)).toBe(false);
  expect(looseEqual(false, '')).toBe(false);
  expect(looseEqual(false, 0)).toBe(false);
  expect(looseEqual(true, 1)).toBe(false);
  expect(looseEqual(null, '')).toBe(false);
  expect(looseEqual(null, 0)).toBe(false);
  expect(looseEqual({}, [])).toBe(false);
  expect(looseEqual({}, '')).toBe(false);
  expect(looseEqual(temp, undefined)).toBe(true);
  expect(looseEqual(temp, null)).toBe(false);
  const date = new Date('2018-12-18 12:42:30');
  expect(looseEqual(date, new Date('2018-12-18 12:42:30'))).toBe(true);
});

// 首字母大写
test('upperFirst', () => {
  expect(upperFirst('abc')).toBe('Abc');
  expect(upperFirst('order-detail')).toBe('Order-detail');
});

// kebabCase 连字符命名 eg: kebab-case
test('kebabCase', () => {
  expect(kebabCase('abc')).toBe('abc');
  expect(kebabCase('orderDetail')).toBe('order-detail');
});

// camelCase 小驼峰命名
test('camelCase', () => {
  expect(camelCase('abc')).toBe('abc');
  expect(camelCase('order-detail')).toBe('orderDetail');
});

it('sleep', async () => {
  const sleepTimes = await sleep(1000);
  expect(sleepTimes).toBe(1000);
});
