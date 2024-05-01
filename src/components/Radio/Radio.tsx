import classnames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { ConfigContext, RadioGroupContext } from '../../context';
import './radio.less';

export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  className?: string;
  wrapperStyle?: React.CSSProperties;
  children?: React.ReactNode;
  value?: string | number;
  onChange?: (event: any) => void;
}

const InternalRadio: React.FC<RadioProps> = ({
  checked = false,
  disabled = false,
  wrapperStyle,
  className,
  children,
  value,
  defaultValue,
  onChange,
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('radio');
  const groupProps = useContext(RadioGroupContext);

  const [radioChecked, setRadioChecked] = useState<boolean>(checked);

  useEffect(() => {
    if (groupProps?.value || groupProps?.defaultValue) {
      setRadioChecked((groupProps.defaultValue || groupProps?.value) === value);
    }
  }, [groupProps]);

  const wrapClass = classnames(className, {
    [`${prefix}-wrapper`]: true,
    [`${prefix}-wrapper-disabled`]: disabled || groupProps.disabled,
  });

  const checkedClass = classnames(prefix, {
    [`${prefix}-checked`]: radioChecked,
    [`${prefix}-disabled`]: disabled || groupProps.disabled,
  });

  const radioChange = (event: any) => {
    if (radioChecked) return false;

    setRadioChecked(!radioChecked);
    if (typeof onChange === 'function') {
      onChange(event);
    }
    // trigger group onChange
    if (typeof groupProps.onRadioChange === 'function') {
      groupProps.onRadioChange(event);
    }
  };

  return (
    <label className={`${wrapClass}`} style={wrapperStyle}>
      <span className={`${checkedClass}`}>
        <input
          type="radio"
          name={groupProps.name}
          className={`${prefix}-input`}
          value={value}
          disabled={disabled || groupProps.disabled}
          onChange={radioChange}
          checked={!!defaultValue || !!groupProps.defaultValue}
        />
        <span className={`${prefix}-inner`}></span>
      </span>
      {children && <span className={`${prefix}-label`}>{children}</span>}
    </label>
  );
};

export default InternalRadio;
