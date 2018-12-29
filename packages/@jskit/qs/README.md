# @jskit/qs

[![Circle CI](https://circleci.com/gh/jskit/shared/tree/master.svg?style=svg)](https://circleci.com/gh/jskit/shared/tree/master)

目标

- [x] 拿参数 支持获取完整的 url 搜索参数
- [ ] 用于分享 支持输出标准的 url 格式数据
- [x] 兼容处理 微信分享后在 hash 前面自动添加参数，导致页面链接不规范
- [ ] 支持参数的 merge 合并
- [ ] 支持url 的映射转换

支持处理像这样不规整的URL，其query参数需要特殊处理

```html
// 微信分享后在 hash 前面自动添加参数，导致页面链接不规范
https://m.iqianggou.com/?from=singlemessage&isappinstalled=0#bargain?id=646156&platform=5
```

## Usage

- `copy`      简单拷贝 `JSON.parse(JSON.stringify(data))`;
- `compact`   清除数组中的空数据，如 `''`, `0`, `undefined`, `false`, `NaN`
- `compactObject` 清除对象的无效数据，如 `''`, `undefined`, `null`
- `parse`     解析 url 的 query 参数，输出为对象
- `stringify` 对象转化为查询字符串

```js
import {
  copy,
  compat,
  parse,
  stringify,
} from '@jskit/qs';

// 非规范链接
const url = 'https://m.iqianggou.com/?from=singlemessage&isappinstalled=0#bargain?id=646156&platform=5'

const query = parse(url);
```
