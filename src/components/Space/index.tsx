import classnames from 'classnames';
import React, { useContext } from 'react';
import { baseAlign, baseDirection, baseSizes } from '../../constants';
import { ConfigContext } from '../../context';
import SpaceItem from './Item';
import './space.less';

type SpaceAlign = (typeof baseAlign)[number];
type SpaceDirection = (typeof baseDirection)[number];
export type SpaceSize = (typeof baseSizes)[number] | number;

interface SpaceProps {
  children: React.ReactNode;
  align?: SpaceAlign;
  direction?: SpaceDirection;
  size?: SpaceSize;
  wrap?: boolean;
}
const Space: React.FC<SpaceProps> = ({
  children,
  align,
  direction = 'horizontal',
  size,
  wrap,
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('space');
  const sizeCls = typeof size === 'string' && size;
  const style = typeof size === 'number' ? { gap: size } : {};
  const classList = classnames(prefix, {
    [`${prefix}-align-${align}`]: align,
    [`${prefix}-${direction}`]: direction,
    [`${prefix}-${sizeCls}`]: size,
    [`${prefix}-wrap`]: wrap,
  });

  const initItem = (children as []).map((child, index) => {
    const key = `space-${index}`;
    return (
      <SpaceItem key={key} itemClassName={`${prefix}-item`}>
        {child}
      </SpaceItem>
    );
  });

  return (
    <div className={classList} style={style}>
      {initItem}
    </div>
  );
};

export default Space;
