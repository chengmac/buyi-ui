/// <reference types="react" />
export interface ContextProps {
    getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
}
export declare const ConfigContext: import("react").Context<ContextProps>;
