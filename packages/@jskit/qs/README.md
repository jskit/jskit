# @jskit/qs

[![Circle CI](https://circleci.com/gh/jskit/shared/tree/master.svg?style=svg)](https://circleci.com/gh/jskit/shared/tree/master)

- 支持获取完整的 url 参数，拿参数
- 支持输出标准的 url 格式，用于分享

支持处理像这样不规整的URL，其query参数需要特殊处理

```html
// 微信分享后在 hash 前面自动添加参数，导致页面链接不规范
https://m.iqianggou.com/?from=singlemessage&isappinstalled=0#bargain?id=646156&platform=5
```
