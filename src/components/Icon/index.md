---
nav: 组件

title: Icon 图标
group: 常用
groupOrder: 1
demo:
  cols: 2
---

#### Icon

用于更加语义化修饰呈现内容

#### 代码演示

```tsx | demo
/**
 * title: 基本用法
 * description:
 */
import { Grid, Icon, Space, Text } from 'buyi-ui';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { supportIconList } from '../../constants';

export default () => (
  <React.Fragment>
    <Grid.Row gap={8} wrap align="middle">
      {supportIconList.map((type, index) => (
        <Grid.Col span={8} key={`icon-${index}`} className="buyi-icon-demo1">
          <CopyToClipboard text={`<Icon type="${type}" />`}>
            <div role="button">
              <Space direction="vertical">
                <Icon size="large" type={type} />
                <Text ellipsis>{type}</Text>
              </Space>
            </div>
          </CopyToClipboard>
        </Grid.Col>
      ))}
    </Grid.Row>
  </React.Fragment>
);
```

### API

| 属性      | 说明                         | 类型                                       | 默认值       |
| --------- | ---------------------------- | ------------------------------------------ | ------------ |
| align     | 设置组件对齐方式             | `center` \| `start` \| `end` \| `baseline` | `center`     |
| direction | 设置组件水平或者垂直方向排列 | `vertical` \| `horizontal`                 | `horizontal` |
| size      | 设置组件间距大小             | `large` \| `middle` \| `small` \| number   | `small`      |
| warp      | 设置组件自动换行显示         | boolean                                    | false        |
| className | 设置按钮自定义样式           | string                                     | -            |
