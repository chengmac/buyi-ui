---
nav: 组件

title: Icon
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
import { Icon, Space } from 'buyi-ui';
import React from 'react';
import { supportIconList } from '../../constants';

export default () => (
  <React.Fragment>
    <Space wrap>
      {supportIconList.map((type, index) => (
        <Icon size="large" type={type} key={`icon-${index}`} />
      ))}
    </Space>
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
