// 工具类
// https://stackoverflow.com/questions/34072598/es6-exporting-importing-in-index-file
// https://github.com/gajus/create-index
// https://github.com/leebyron/ecmascript-more-export-from
// https://github.com/tc39/proposal-export-default-from

console.error('已废弃，请使用 @dwdjs/utils/qs');

export * from './parse';
export * from './copy';
export * from './format';
export * from './stringify';
export * from './compact';
export * from './compactObject';

// export default {
//   copy,
//   parse,
//   format,
//   stringify,
//   compact,
// }
