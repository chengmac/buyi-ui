import classnames from 'classnames';
import React, { useContext } from 'react';
import { baseSizes } from '../../constants';
import { ConfigContext } from '../../context';
import { warn } from '../../utils/console';
import Icon from '../Icon';
import './button.less';

const ButtonTypes = ['default', 'primary', 'dashed', 'link'] as const;
export type ButtonType = (typeof ButtonTypes)[number];
export type ButtonSize = (typeof baseSizes)[number];

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

const Button: React.FC<BaseButtonProps> = ({
  disabled = false,
  type = 'default',
  size,
  icon,
  children,
  className,
  loading,
  linkUrl,
  onClick,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('btn');
  const classList = classnames(
    prefix,
    {
      [`${prefix}-${type}`]: type,
      [`${prefix}-${size}`]: size,
    },
    {
      [`${prefix}-icon`]: (loading || icon) && children,
      [`${prefix}-icon-only`]: (loading || icon) && !children,
    },
    className,
  );

  const clickHandle = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    if (loading) return false;
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };

  if (typeof icon === 'string') {
    warn('Button', 'icon类型不对');
  }
  const iconNode = icon && (
    <span className={`${prefix}-icon-container`}>{icon}</span>
  );

  let buttonNode = (
    <button
      type="button"
      disabled={disabled}
      className={classList}
      {...restProps}
      onClick={clickHandle}
    >
      {iconNode}
      {loading && (
        <span className={`${prefix}-icon-container`}>
          <Icon type="icon-reload" className={`${prefix}-icon-loading`} />
        </span>
      )}
      {type === 'link' && !disabled ? (
        <a href={linkUrl} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
  return buttonNode;
};

export default Button;
