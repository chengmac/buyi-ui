import React, { useContext, useEffect, useMemo } from 'react';
import { ConfigContext } from '../../context';
import { SizeMap } from './constants';
import Content from './Content';
import './modal.less';
import { ModalProps } from './types';

const ModalPortal: React.FC<ModalProps> = (props) => {
  const { visible, mousePosition, size } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('modal');
  const modalContentRef = React.useRef<HTMLDivElement>(null);
  const prevProps = React.useRef<boolean>();

  const mousePositionStyle: React.CSSProperties | undefined = useMemo(() => {
    let elementOffset = { left: 480, top: 100 };
    const modalSize = typeof size === 'string' ? SizeMap[size] : 480;
    const clientWidth = document.body.clientWidth;

    elementOffset.left = (clientWidth - modalSize) / 2;
    return mousePosition
      ? {
          transformOrigin: `${mousePosition?.x - elementOffset.left}px ${
            mousePosition?.y - elementOffset.top
          }px`,
        }
      : undefined;
  }, [size]);

  useEffect(() => {
    // 存储上一个visible
    prevProps.current = visible;
  }, [visible]);

  const displayStyle = useMemo(() => {
    if (prevProps.current && !visible) {
      setTimeout(() => {}, 300);
      return { display: 'none' };
    }
    return undefined;
  }, [visible, prevProps]);

  return (
    <div>
      <div className={`${prefix}-mask`} style={{ ...displayStyle }}></div>
      <div
        tabIndex={-1}
        className={`${prefix}-wrap`}
        style={{ ...displayStyle }}
      >
        <Content
          {...props}
          ref={modalContentRef}
          mousePositionStyle={mousePositionStyle}
          prevVisible={prevProps.current}
        />
      </div>
    </div>
  );
};

export default ModalPortal;
