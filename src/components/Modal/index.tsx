import { confirm } from './Confirm';
import OriginModal from './Modal';
import { ModalFunctionProps, ModalStaticFunctions } from './types';

type ModalType = typeof OriginModal & ModalStaticFunctions;

const Modal: ModalType = OriginModal;

Modal.success = (props: ModalFunctionProps) => {
  return confirm({
    type: 'success',
    ...props,
  });
};

Modal.error = (props: ModalFunctionProps) => {
  return confirm({
    type: 'error',
    ...props,
  });
};

Modal.warning = (props: ModalFunctionProps) => {
  return confirm({
    type: 'warning',
    ...props,
  });
};

Modal.info = (props: ModalFunctionProps) => {
  return confirm({
    type: 'info',
    ...props,
  });
};

Modal.confirm = (props: ModalFunctionProps) => {
  return confirm({
    type: 'confirm',
    ...props,
  });
};

export default Modal;
