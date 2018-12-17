/**
 * 尾递归优化实现斐波那契数列
 *
 * @param {number} n 传入位数
 * @returns {number} 返回数字
 */
function tail(n) {
  return fib(n, 0, 1);
}

/**
 * 尾递归优化
 *
 * @param {number} n 初始值
 * @param {number} current 当前位
 * @param {number} next 下一位
 * @returns {function} 尾调用
 */
function fib(n, current, next) {
  if (n === 0) return current;
  return fib(n - 1, next, current + next);
}

export default tail;
