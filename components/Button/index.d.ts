import React from 'react';
import { baseSizes } from '../../constants';
import './button.less';
declare const ButtonTypes: readonly ["default", "primary", "dashed", "link"];
export declare type ButtonType = (typeof ButtonTypes)[number];
export declare type ButtonSize = (typeof baseSizes)[number];
export interface BaseButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    loading?: boolean;
    icon?: React.ReactNode;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    linkUrl?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Button: React.FC<BaseButtonProps>;
export default Button;
