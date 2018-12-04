# shared

## 升级

- 将 `kit-qs` `kit-request` 等汇总，统一在 @jskit 下
- 测试框架由 mocha 改为使用 jest

## 功能列表

- `@jskit/utils` 常用基础方法类集合，可按需引入
  - `is` 类型判断
  - `reg` 常用正则判断
  - `date` 日期时间格式转换
  - 倒计时
- `@jskit/qs` query 参数解析与拼接，合并等
- `@jskit/device` 设备判断
- `@jskit/env` 环境配置处理
- `@jskit/debug` 页面调试参数
- `@jskit/cookie` Cookie
- `@jskit/cache` 缓存
- `@jskit/api` 请求api 数据封装
  - `@jskit/request` 请求底层封装
- `@jskit/loadsrc` 动态加载资源
  - https://juejin.im/entry/59c128255188257e6e2628e4
  - https://www.jianshu.com/p/a7f2060695ca

扩展

- `@jskit/rem` px2rem 配套设置
- `@jskit/bridge` Hybrid jsbridge
- `@jskit/oauth` 授权登录

- event ?
- bus ?
- geo ?
- scroll ?
- filter ?

## 目标

- 使用 typescript 实现编码

## 关于版本控制

参考 @vue/cli 版本控制
