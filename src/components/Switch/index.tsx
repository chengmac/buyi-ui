import classnames from 'classnames';
import React, { useContext, useState } from 'react';
import { ConfigContext } from '../../context';
import './switch.less';

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  checkedText?: string;
  unCheckedText?: string;
  className?: string;
  wrapperStyle?: React.CSSProperties;
  onChange?: (checked: boolean, event: React.MouseEvent<HTMLElement>) => void;
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  disabled = false,
  checkedText,
  unCheckedText,
  className,
  wrapperStyle,
  onChange,
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('switch');
  const [switchChecked, setSwitchChecked] = useState<boolean>(checked);

  const classList = classnames(prefix, className, {
    [`${prefix}-checked`]: switchChecked,
    [`${prefix}-disabled`]: disabled,
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) return false;
    setSwitchChecked(!switchChecked);
    if (typeof onChange === 'function') {
      onChange(switchChecked, event);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      className={classList}
      onClick={handleClick}
      style={wrapperStyle}
    >
      <div className={`${prefix}-handle`}></div>
      <span className={`${prefix}-inner`}>
        {checkedText && (
          <span className={`${prefix}-inner-checked`}>{checkedText}</span>
        )}
        {unCheckedText && (
          <span className={`${prefix}-inner-unChecked`}>{unCheckedText}</span>
        )}
      </span>
    </button>
  );
};

export default Switch;
