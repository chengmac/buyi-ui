import classnames from 'classnames';
import React, { useContext, useMemo } from 'react';
import { ConfigContext } from '../../context';
import { Button, Grid, Icon } from '../../index';
import { Footer } from './Footer';
import './modal.less';
import { ModalContentProps } from './types';

const { Row, Col } = Grid;

const Content = React.forwardRef<any, ModalContentProps>(
  (
    {
      children,
      visible,
      title,
      mousePosition,
      mousePositionStyle,
      prevVisible,
      size = 'small',
      footer,
      closeable = true,
      onCancel,
    },
    ref,
  ) => {
    const { getPrefixCls } = useContext(ConfigContext);
    const prefix = getPrefixCls('modal');

    // const [animatedVisible, setAnimatedVisible] = useState<boolean>(visible);

    // useEffect(() => {
    //   setAnimatedVisible(visible);
    // }, [visible]);

    const displayStyle = useMemo(() => {
      if (prevVisible && !visible) {
        return { display: 'none' };
      }
      return undefined;
    }, [visible, prevVisible]);

    return (
      <div
        role="modal"
        className={classnames(`${prefix}`, {
          [`${prefix}-${size}`]: !!size,
          [`${prefix}-zoomIn`]: !!mousePosition && visible,
          [`${prefix}-zoomOut`]: prevVisible && !visible,
        })}
        aria-label="modal"
        ref={ref}
        style={{
          ...mousePositionStyle,
          ...displayStyle,
        }}
      >
        <div className={`${prefix}-content`} tabIndex={0}>
          <div className={`${prefix}-header`}>
            <Row justify="space-between">
              <Col>{title}</Col>
              <Col style={{ cursor: 'pointer' }}>
                {closeable && (
                  <Button
                    onClick={onCancel}
                    className={`${prefix}-close`}
                    aria-label="close"
                  >
                    <Icon type="icon-close" size="large" />
                  </Button>
                )}
              </Col>
            </Row>
          </div>
          <div className={`${prefix}-body`}>{children}</div>
          <Footer onCancel={onCancel} footer={footer} prefixCls={prefix} />
        </div>
      </div>
    );
  },
);

export default Content;
