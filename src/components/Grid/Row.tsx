import classnames from 'classnames';
import React, { useContext } from 'react';
import { ConfigContext } from '../../context';
import {
  ComponentStyleProps,
  GapRules,
  GridAlign,
  GridJustify,
} from '../../types';
import './grid.less';

interface RowProps extends ComponentStyleProps {
  align?: GridAlign;
  children: React.ReactNode;
  justify?: GridJustify;
  wrap?: boolean;
  gap?: number | GapRules | [number, number];
}

const Row: React.FC<RowProps> = ({
  children,
  align,
  justify,
  style,
  wrap = false,
  gap,
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('row');

  const gapTransition =
    gap instanceof Array
      ? `${gap[0]}px, ${gap[1]}px`
      : gap instanceof Object
      ? gap.xs
      : `${gap}px`;

  const cssProperties = gap ? { gap: gapTransition, ...style } : style;

  const classList = classnames(prefix, {
    [`${prefix}-align-${align}`]: align,
    [`${prefix}-justify-${justify}`]: justify,
    [`${prefix}-wrap`]: wrap,
  });

  return (
    <div className={classList} style={cssProperties}>
      {children}
    </div>
  );
};

export default Row;
