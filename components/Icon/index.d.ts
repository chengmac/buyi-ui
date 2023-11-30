import React from 'react';
import { baseSizes } from '../../constants';
import './icon.less';
declare type IconSize = (typeof baseSizes)[number] | number;
interface IconProps {
    type: string;
    size?: IconSize;
    className?: string;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
