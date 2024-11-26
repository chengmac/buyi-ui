import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import Icon from '../Icon';
import Space from '../Space';
import Modal from './Modal';
import { confirmProps, ModalFunctionProps } from './types';

export const confirm = (config: ModalFunctionProps & confirmProps) => {
  const { type, content, title, okText, cancelText, onCancel, onOk } = config;

  let timeoutId: ReturnType<typeof setTimeout>;

  let modalConfig = {
    visible: true,
  };

  let footer = (
    <>
      <Button type="primary" onClick={onOk}>
        {okText || '确认'}
      </Button>
      <Button onClick={onCancel}>{cancelText || '取消'}</Button>
    </>
  );

  function close() {
    modalConfig = {
      ...modalConfig,
      visible: false,
    };
    console.log(modalConfig);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    renderModal(modalConfig);
  }

  let header: ReactElement = <></>;
  if (type !== 'confirm') {
    footer = (
      <Button type="primary" onClick={close}>
        {okText || '确认'}
      </Button>
    );

    header = (
      <Space>
        <Icon type="icon-info-circle-fill" size="large" />
        {title}
      </Space>
    );
  }
  const showClose = type === 'confirm';

  function renderModal(config: any) {
    clearTimeout(timeoutId);
    // eslint-disable-next-line react/no-render-return-value
    timeoutId = setTimeout(() => {
      ReactDOM.render(
        <Modal
          visible={config.visible}
          title={header}
          onCancel={close}
          onOk={onOk}
          footer={footer}
          closeable={showClose}
        >
          {content}
        </Modal>,
        document.createDocumentFragment(), // 挂载至Dom片段中
      );
    });
  }

  renderModal(modalConfig);
};
