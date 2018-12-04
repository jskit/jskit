/**
 * 清除无效数据
 *
 * @param { Object } [obj={}] 对象
 * @returns { Object } 对象
 */
function compat(obj = {}) {
  for (const key in obj) {
    if (
      typeof obj[key] === 'undefined' ||
      obj[key] === null ||
      obj[key] === ''
    ) {
      delete obj[key];
    }
  }
  return obj;
}

export default compat;
