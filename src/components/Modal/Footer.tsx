import React from 'react';
import { Button } from '../../index';
import { FooterProps } from './types';

export const Footer: React.FC<FooterProps> = ({
  prefixCls,
  onCancel,
  footer,
}) => {
  return footer !== null ? (
    <div className={`${prefixCls}-footer`}>
      {!footer ? (
        <>
          <Button onClick={onCancel}>取消</Button>
          <Button type="primary">确定</Button>
        </>
      ) : (
        footer
      )}
    </div>
  ) : null;
};
