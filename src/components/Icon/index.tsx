import classnames from 'classnames';
import React, { useContext } from 'react';
import { baseSizes } from '../../constants';
import { ConfigContext } from '../../context';
import './icon.less';

type IconSize = (typeof baseSizes)[number] | number;

interface IconProps {
  type: string;
  size?: IconSize;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ type, size, className }) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('icon');
  const classList = classnames('iconfont', type, className, {
    [`${prefix}-${size}`]: size,
  });

  return <i className={classList}></i>;
};

export default Icon;
