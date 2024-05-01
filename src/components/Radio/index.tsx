import Group from './Group';
import InternalRadio, { RadioProps } from './Radio';

type RadioType = React.FC<RadioProps> & {
  Group: typeof Group;
};

const Radio = InternalRadio as RadioType;
Radio.Group = Group;

export default Radio;
