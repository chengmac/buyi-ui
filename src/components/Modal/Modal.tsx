import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.less';
import ModalPortal from './Portal';
import { ModalProps } from './types';

type MousePosition = { x: number; y: number } | null;
let mousePosition: MousePosition;

const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.clientX,
    y: e.clientY,
  };

  setTimeout(() => {
    mousePosition = null;
  }, 100);
};

// 只有点击事件支持从鼠标位置动画展开
if (window?.document?.documentElement) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}

const Modal = React.forwardRef<any, ModalProps>((props, ref) => {
  const {
    children,
    visible,
    getContainer = document.body,
    ...resetProps
  } = props;

  const Portal = (
    <ModalPortal
      {...resetProps}
      visible={visible}
      mousePosition={mousePosition}
    >
      {children}
    </ModalPortal>
  );

  const [shouldRender, setShouldRender] = React.useState(props.visible);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }
  }, [visible]);

  const mergedRef = useRef(ref);
  let reffedChildren = Portal;

  if (ref) {
    reffedChildren = React.cloneElement(Portal, {
      ref: mergedRef,
    });
  }

  // 初次进来时，visible为false或者getContainer为undefined，不渲染Portal
  if (!shouldRender || getContainer === undefined) {
    return null;
  }

  const inlineContainer = getContainer !== document.body;

  return (
    <>
      {inlineContainer
        ? reffedChildren
        : createPortal(reffedChildren, getContainer)}
    </>
  );
});

Modal.displayName = 'Modal';

export default Modal;
