import classnames from 'classnames';
import React, { ReactNode, useContext, useState } from 'react';
import { baseDirection } from '../../constants';
import { ConfigContext, RadioGroupContext } from '../../context';
import './radio.less';

type SpaceDirection = (typeof baseDirection)[number];

export interface RadioGroupProps {
  disabled?: boolean;
  defaultValue?: string;
  className?: string;
  name?: string;
  direction?: SpaceDirection;
  children: ReactNode;
  onChange?: (checkedValue: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  disabled = false,
  className,
  direction = 'horizontal',
  children,
  defaultValue,
  onChange,
  ...resetProps
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('radio-group');
  const [value, setValue] = useState(defaultValue);
  const groupClass = classnames(prefix, className, {
    [`${prefix}-direction`]: direction !== 'horizontal',
    [`${prefix}-disabled`]: disabled,
  });

  const handleRadioChange = (event: React.MouseEvent<HTMLElement>) => {
    const { value } = event.target as HTMLInputElement;
    setValue(value);
    if (typeof onChange === 'function') {
      onChange(value);
    }
  };

  return (
    <div className={groupClass}>
      <RadioGroupContext.Provider
        value={{
          ...resetProps,
          children,
          value,
          onRadioChange: handleRadioChange,
        }}
      >
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
};

export default RadioGroup;
