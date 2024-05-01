import classnames from 'classnames';
import React, { useContext } from 'react';
import { ConfigContext } from '../../context';
import { ComponentStyleProps, LiteralUnion } from '../../types';
import './grid.less';

type GridType = number | LiteralUnion<'none' | 'auto'>;
interface ColProps extends ComponentStyleProps {
  span?: number;
  children: React.ReactNode;
  flex?: GridType;
  className?: string;
}

const parseGrid = (flex: GridType): string => {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
};

const Col: React.FC<ColProps> = ({
  children,
  span,
  flex,
  style,
  className,
}) => {
  const { getPrefixCls } = useContext(ConfigContext);

  const prefix = getPrefixCls('col');

  const cssProperties = flex ? { flex: parseGrid(flex), ...style } : style;
  const classList = classnames(prefix, className, {
    [`${prefix}-span-${span}`]: span,
  });

  return (
    <div className={classList} style={cssProperties}>
      {children}
    </div>
  );
};

export default Col;
