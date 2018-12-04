/**
 * 处理参数
 *
 * @export
 * @param {any} params
 * @returns  { string }
 */

import compat from './compat';
// const toISO = Date.prototype.toISOString;

const defaults = {
  delimiter: '&',
  // encode: true,
  // encoder: utils.encode,
  // encodeValuesOnly: false,
  // serializeDate: function serializeDate(date) {
  //   return toISO.call(date);
  // },
  // skipNulls: false,
  // strictNullHandling: false,
};

export default function stringify(params, options = {}) {
  params = compat(Object.assign({}, params));
  const opts = Object.assign({}, defaults, options);
  const { delimiter = defaults.delimiter } = opts;

  const arr = [];
  for (const key in params) {
    // if (typeof params[key] === 'undefined' || params[key] === '') {
    //   delete params[key]
    // } else {
    // }
    if ({}.hasOwnProperty.call(params, key)) {
      arr.push(`${key}=${encodeURIComponent(params[key])}`);
    }
  }
  return arr.join(delimiter);
}
