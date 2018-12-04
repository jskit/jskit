import copy from './copy';

/**
 * parse 解析url
 *
 * 有些恶心的第三方App，不判断当前的url参数，
 * 就直接在域名路径后加自己的参数，导致URL不规范，无法常规处理了
 * https://m.iqianggou.com/?from=singlemessage&isappinstalled=0#bargain?id=646156&platform=5
 *
 * @export
 */

const searchReg = /([^&=?#]+)=([^&#]+)/g;
const urlReg = /\/+.*\?/;
const arrayReg = /(.+)\[\]$/;

function parse(url, key) {
  if (!url) return;

  const params = {};
  let match;
  let name;
  let value;
  let isArray;

  // 处理不符合 search 参数格式的情况
  url = url[0] !== '?' ? '?' + url : url;
  // 处理异常参数，如多个 ?
  url = url.replace(/\?/g, '&').replace('&', '?');

  /* eslint prefer-destructuring: 0 */
  while ((match = searchReg.exec(url))) {
    name = match[1];
    value = match[2];
    isArray = name.match(arrayReg);
    // 处理参数为url这种情况
    if (urlReg.test(value)) {
      params[name] = url.substr(url.indexOf(value));
      break;
    }
    if (isArray) {
      name = isArray[1];
      params[name] = params[name] || [];
      params[name].push(value);
    } else {
      params[name] = value;
    }
  }

  return key ? copy(params[key]) : copy(params);
}

// console.log(parse('id=xx&c=xx'))

export default parse;
