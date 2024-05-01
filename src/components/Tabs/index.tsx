import classnames from 'classnames';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { baseSizes } from '../../constants';
import { ConfigContext } from '../../context';
import Grid from '../Grid';
import TabItem from './TabItem';
import './tabs.less';

export type TabSize = (typeof baseSizes)[number] | number;
export type TabsSize = (typeof baseSizes)[number];

interface Item {
  title: string;
  key: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  size?: TabsSize;
  items: Item[];
  defaultActiveKey?: string;
  activeKey?: string;
  style?: React.CSSProperties;
  extra?: React.ReactNode;
  onChange?: (event: any) => void;
}
const Tabs: React.FC<TabsProps> = ({
  size,
  items,
  activeKey,
  defaultActiveKey = items?.[0]?.key,
  style,
  extra,
  onChange,
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('tabs');
  const sizeCls = typeof size === 'string' && size;
  const [active, setActive] = useState(activeKey || defaultActiveKey);
  const [underlineStyle, setUnderlineStyle] = useState<React.CSSProperties>({});
  const ref = useRef<HTMLLIElement>(null);

  const cssProperties =
    typeof size === 'number' ? { ...style, gap: size } : style;

  const classList = classnames(prefix, {
    [`${prefix}-${sizeCls}`]: size,
  });

  const underlineAnimated = classnames(
    `${prefix}-bar-underline`,
    `${prefix}-bar-underline-animated`,
  );

  const offsetLeft = useMemo(() => {
    const index = (items || []).findIndex((item) => item.key === active) * 100;
    return index > 0 ? `-${index}%` : `${index}%`;
  }, [active]);

  useEffect(() => {
    setActive(activeKey || defaultActiveKey);
  }, [activeKey, defaultActiveKey]);

  useEffect(() => {
    console.log(ref);
    // 在副作用中获取宽度
    if (ref.current) {
      setUnderlineStyle({
        transform: `translate3d(${ref.current.offsetLeft}px, 0, 0)`,
        width: `${ref.current.offsetWidth}px`,
      });
    }
  }, []);

  const clickHandler = (key: string, event: React.MouseEvent<HTMLElement>) => {
    setUnderlineStyle({
      transform: `translate3d(${event.currentTarget.offsetLeft}px, 0, 0)`,
      width: `${event.currentTarget.offsetWidth}px`,
    });
    setActive(key);
    if (typeof onChange === 'function') {
      onChange(key);
    }
  };

  return (
    <div className={classList} style={cssProperties}>
      <div className={`${prefix}-bar`}>
        <Grid.Row justify="space-between" align="middle">
          <Grid.Col>
            <ul>
              {(items || []).map((item, index) => {
                return (
                  <TabItem
                    ref={index === 0 ? ref : undefined}
                    key={item.key}
                    itemClassName={classnames(`${prefix}-tab-item`, {
                      [`${prefix}-tab-active`]: active === item.key,
                      [`${prefix}-tab-${size}`]: size,
                      [`${prefix}-tab-disabled`]: item.disabled,
                    })}
                    aria-selected={active === item.key}
                    aria-disabled={item.disabled}
                    onClick={(event) =>
                      !item.disabled && clickHandler(item.key, event)
                    }
                  >
                    {item.title}
                  </TabItem>
                );
              })}
            </ul>
          </Grid.Col>
          {extra && (
            <Grid.Col>
              <div className={`${prefix}-extra-action`}>{extra}</div>
            </Grid.Col>
          )}
        </Grid.Row>
        <div className={underlineAnimated} style={underlineStyle} />
      </div>
      <div className={`${prefix}-content`} style={{ marginLeft: offsetLeft }}>
        {(items || []).map((item) => {
          return (
            <div
              role="tabpanel"
              aria-hidden={active !== item.key}
              key={item.key}
              className={classnames(`${prefix}-tab-pane`, {
                [`${prefix}-tab-pane-active`]: active === item.key,
                [`${prefix}-tab-pane-inactive`]: active !== item.key,
              })}
            >
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
