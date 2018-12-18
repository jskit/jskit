import { isUnDef, isDef, isArray, isObject, isEmptyObject } from '../src';

test('isUnDef', () => {
  let temp;
  expect(isUnDef({})).toBe(false);
  expect(isUnDef('')).toBe(false);
  expect(isUnDef(false)).toBe(false);
  expect(isUnDef(null)).toBe(true);
  expect(isUnDef(undefined)).toBe(false);
  expect(isUnDef(temp)).toBe(false);
});

test('isDef', () => {
  let temp;
  expect(isDef({})).toBe(true);
  expect(isDef('')).toBe(true);
  expect(isDef(false)).toBe(true);
  expect(isDef(null)).toBe(false);
  expect(isDef(undefined)).toBe(true);
  expect(isDef(temp)).toBe(true);
});

test('isArray', () => {
  let temp;
  expect(isArray({})).toBe(false);
  expect(isArray('')).toBe(false);
  expect(isArray(false)).toBe(false);
  expect(isArray(null)).toBe(false);
  expect(isArray(undefined)).toBe(false);
  expect(isArray(temp)).toBe(false);
  expect(isArray([])).toBe(true);
  expect(isArray([1, 2])).toBe(true);
});

test('isObject', () => {
  let temp;
  expect(isObject({})).toBe(true);
  expect(isObject('')).toBe(false);
  expect(isObject(false)).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(temp)).toBe(false);
  expect(isObject({ a: 1 })).toBe(true);
});

test('isEmptyObject', () => {
  let temp;
  expect(isEmptyObject({})).toBe(true);
  expect(isEmptyObject('')).toBe(false);
  expect(isEmptyObject(false)).toBe(false);
  expect(isEmptyObject(null)).toBe(false);
  expect(isEmptyObject(undefined)).toBe(false);
  expect(isEmptyObject(temp)).toBe(false);
});
