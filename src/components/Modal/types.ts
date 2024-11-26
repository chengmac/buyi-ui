import React from 'react';
export type ModalSize = 'xLarge' | 'large' | 'middle' | 'small' | number;

export interface ModalProps {
  getContainer?: HTMLElement;
  children?: React.ReactNode;
  size?: ModalSize;
  style?: React.CSSProperties;
  destroyOnClos?: boolean;
  title: React.ReactNode;
  visible: boolean;
  closeable?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  mousePosition?: { x: number; y: number } | null;
  footer?: React.ReactNode | null;
}

type ModalStaticType = 'info' | 'error' | 'warning' | 'success' | 'confirm';

export type ModalStaticFunctions = {
  [key in ModalStaticType]?: (config: ModalFunctionProps) => void;
};

export interface confirmProps {
  type: ModalStaticType;
}

export interface ModalFunctionProps {
  title: string;
  content: string;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: React.ReactNode | string;
  cancelText?: React.ReactNode | string;
  closeable?: boolean;
}

export interface ModalContentProps extends ModalProps {
  mousePositionStyle?: React.CSSProperties;
  prevVisible?: boolean;
}

export interface FooterProps {
  prefixCls: string;
  onCancel?: () => void;
  onOk?: () => void;
  footer?: React.ReactNode | null;
}
