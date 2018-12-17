import { looseEqual, upperFirst, kebabCase, camelCase } from '../lib';

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
