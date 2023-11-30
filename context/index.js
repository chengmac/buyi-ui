import { createContext } from 'react';
var defaultPrefixCls = function defaultPrefixCls(suffixCls, customizePrefixCls) {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? "buyi-".concat(suffixCls) : 'buyi';
};
export var ConfigContext = /*#__PURE__*/createContext({
  getPrefixCls: defaultPrefixCls
});