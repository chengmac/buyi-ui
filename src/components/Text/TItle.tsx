import classnames from 'classnames';
import React, { useContext } from 'react';
import { ConfigContext } from '../../context';
import { TitleAsList } from '../../types';
import './text.less';

export interface TitleProps {
  children: string;
  as?: TitleAsList;
  style?: React.CSSProperties;
}

const Title: React.FC<TitleProps> = ({ children, as = 'h1', style }) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('title');

  return React.createElement(
    as,
    { className: classnames(prefix), style: style },
    children,
  );
};

export default Title;
