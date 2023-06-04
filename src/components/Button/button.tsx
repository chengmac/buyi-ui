import classNames from 'classnames';
import React, { useContext } from 'react';
import { ConfigContext } from '../../context';
import './button.less';

const ButtonTypes = ['default', 'primary', 'dashed'] as const;
export type ButtonType = (typeof ButtonTypes)[number];
const ButtonSizes = ['large', 'default', 'small'] as const;
export type ButtonSize = (typeof ButtonSizes)[number];

export interface BaseButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  loading?: boolean;
  icon?: string;
  shape?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick: (e: Event) => void;
}

const Button: React.FC<BaseButtonProps> = ({
  disabled = false,
  type = 'primary',
  size,
  children,
  className,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('btn');
  const classList = classNames(
    prefix,
    {
      [`${prefix}-${type}`]: type,
      [`${prefix}-${size}`]: size,
    },
    className,
  );

  let buttonNode = (
    <button
      type="button"
      disabled={disabled}
      className={classList}
      {...restProps}
    >
      <span>{children}</span>
    </button>
  );
  return buttonNode;
};

export default Button;
