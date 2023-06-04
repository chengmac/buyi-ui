import { createContext } from 'react';

export interface ContextProps {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
}

const defaultPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `buyi-${suffixCls}` : 'buyi';
};

export const ConfigContext = createContext<ContextProps>({
  getPrefixCls: defaultPrefixCls,
});
