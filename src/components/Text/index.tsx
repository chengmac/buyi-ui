import classnames from 'classnames';
import React, { useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ConfigContext } from '../../context';
import Icon from '../Icon';
import './text.less';
import Title from './TItle';

export interface TextProps {
  children: string;
  inline?: boolean;
  copyable?: boolean;
  strong?: boolean;
  ellipsis?: boolean;
  style?: React.CSSProperties;
}

const TextComponent: React.FC<TextProps> = ({
  children,
  inline,
  copyable,
  strong,
  ellipsis,
  style,
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('text');
  const classList = classnames(prefix, {
    [`${prefix}-inline`]: inline,
    [`${prefix}-strong`]: strong,
    [`${prefix}-ellipsis`]: ellipsis,
  });

  const copyNode = (
    <CopyToClipboard text={children}>
      <span role="button" tabIndex={0} className="buyi-text-copy">
        <Icon type="icon-copy" />
      </span>
    </CopyToClipboard>
  );

  return (
    <>
      {inline ? (
        <>
          <span className={classList} style={style}>
            {children}
            {copyable && copyNode}
          </span>
        </>
      ) : (
        <div className={classList} style={style}>
          {children}
          {copyable && copyNode}
        </div>
      )}
    </>
  );
};

type TextType = typeof TextComponent & {
  Text: typeof TextComponent;
  Title: typeof Title;
};

const Text = TextComponent as TextType;
Text.Text = TextComponent;
Text.Title = Title;

export default Text;
