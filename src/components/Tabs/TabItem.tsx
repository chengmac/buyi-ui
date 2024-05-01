import React from 'react';

interface TabProps {
  children: React.ReactNode;
  itemClassName: string;
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}
const TabItem = React.forwardRef(
  (props: TabProps, ref: React.ForwardedRef<HTMLLIElement>) => {
    const { children, itemClassName, ...resetProps } = props;
    return (
      <li role="tab" className={itemClassName} {...resetProps} ref={ref}>
        {children}
      </li>
    );
  },
);

export default TabItem;
