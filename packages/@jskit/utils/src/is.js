/*!
 * is 类型判断
 * source @vue/vue
 */

/**
 * 常用类型判断
 * 是否定义 字符串 数字 纯对象 空对象 数组 函数
 */

const objProto = Object.prototype;
const owns = objProto.hasOwnProperty;
// const toString = objProto.toString;

// 是否定义
export function isUndef() {
  return v === undefined || v === null;
}
// isUnDef(aa)

export function isUnDef(v) {
  return v === 'undefined' || v === null;
}

export function isDef(v) {
  return v !== 'undefined' && v !== null;
}

export function isTrue(v) {
  return v === true;
}

export function isFalse(v) {
  return v === false;
}

export function isArray(arr) {
  return Array.isArray(arr);
}

export function isObject(v) {
  return v !== null && typeof v === 'object' && Array.isArray(v) === false;
}

// 对象自身属性中是否具有指定的属性
export function hasOwn(obj, prop) {
  return owns.call(obj, prop);
}

export function isEmptyObject(v) {
  return JSON.stringify(v) === '{}';
}
