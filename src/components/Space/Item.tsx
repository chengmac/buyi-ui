import React from 'react';

interface SpaceProps {
  children: React.ReactNode;
  itemClassName: string;
}
const SpaceItem: React.FC<SpaceProps> = ({ children, itemClassName }) => {
  return <div className={itemClassName}>{children}</div>;
};

export default SpaceItem;
