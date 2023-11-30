import React from 'react';
import { baseAlign, baseDirection, baseSizes } from '../../constants';
import './space.less';
declare type SpaceAlign = (typeof baseAlign)[number];
declare type SpaceDirection = (typeof baseDirection)[number];
export declare type SpaceSize = (typeof baseSizes)[number] | number;
interface SpaceProps {
    children: React.ReactNode;
    align?: SpaceAlign;
    direction?: SpaceDirection;
    size?: SpaceSize;
    wrap?: boolean;
}
declare const Space: React.FC<SpaceProps>;
export default Space;
