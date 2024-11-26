import styled from 'styled-components';

export const ModalMask = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
    0 9px 28px 8px #0000000d;
  pointer-events: auto;
  top: 100px;
  max-width: calc(100vw - 32px);
  margin: 0 auto;
  width: 480px;
`;
