import {
  isUnDef,
  isDef,
  isNumber,
  isString,
  isArray,
  isObject,
  isEmptyObject,
  isFunction,
} from '../lib';

test('isUnDef', () => {
  expect(isUnDef(null)).toBe(true);
  expect(isUnDef({})).toBe(false);
  expect(isUnDef('')).toBe(false);
  expect(isUnDef(false)).toBe(false);
  expect(isUnDef()).toBe(false);
});

test('isDef', () => {
  expect(isDef({})).toBe(true);
  expect(isDef('')).toBe(true);
  expect(isDef(false)).toBe(true);
  expect(isDef(null)).toBe(false);
  expect(isDef()).toBe(true);
});

test('isNumber', () => {
  let temp;
  expect(isNumber(0)).toBe(true);
  expect(isNumber(0 / -1)).toBe(true);
  expect(isNumber(3)).toBe(true);
  expect(isNumber(NaN)).toBe(true);
  expect(isNumber(Infinity)).toBe(true);
  expect(isNumber(-Infinity)).toBe(true);
  expect(isNumber(Object(42))).toBe(true);
  expect(isNumber()).toBe(false);
  expect(isNumber(temp)).toBe(false);
  expect(isNumber(null)).toBe(false);
  expect(isNumber(true)).toBe(false);
});

test('isString', () => {
  expect(isString('foo')).toBe(true);
  expect(isString(Object('foo'))).toBe(true);
  expect(isString()).toBe(false);
  expect(isString(String)).toBe(false);
  const F = function() {};
  F.prototype = Object('');
  expect(isString(F)).toBe(false);
});

test('isArray', () => {
  expect(isArray({})).toBe(false);
  expect(isArray('')).toBe(false);
  expect(isArray(false)).toBe(false);
  expect(isArray(null)).toBe(false);
  expect(isArray()).toBe(false);
  expect(isArray([])).toBe(true);
  expect(isArray([1, 2])).toBe(true);
});

test('isObject', () => {
  expect(isObject({})).toBe(true);
  expect(isObject()).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject(true)).toBe(false);
  expect(isObject('')).toBe(false);
  expect(isObject(NaN)).toBe(false);
  expect(isObject(Object)).toBe(false);
  expect(isObject(function() {})).toBe(false);
});

test('isEmptyObject', () => {
  expect(isEmptyObject({})).toBe(true);
  expect(isEmptyObject('')).toBe(false);
  expect(isEmptyObject(false)).toBe(false);
  expect(isEmptyObject(null)).toBe(false);
  expect(isEmptyObject()).toBe(false);
});

test('isFunction', () => {
  expect(isFunction(function() {})).toBe(true);
  if (typeof window !== 'undefined') {
    expect(isFunction(window.alert)).toBe(true);
  }
  expect(isFunction({})).toBe(false);
  expect(isFunction(null)).toBe(false);
  expect(isFunction()).toBe(false);
});
