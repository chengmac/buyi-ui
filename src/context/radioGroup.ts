import { createContext } from 'react';
import { RadioGroupProps } from '../components/Radio/Group';

export interface RadioGroupContextProps extends RadioGroupProps {
  value?: string;
  onRadioChange?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const RadioGroupContext = createContext<RadioGroupContextProps>({
  children: null,
});
