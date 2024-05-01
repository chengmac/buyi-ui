---
nav: 组件

title: Tabs 标签页
group: 数据展示
demo:
  cols: 2
---

#### Tabs 标签页

选项卡切换组件，用于在同一页面中进行多项任务的导航。

#### 代码演示

```tsx | demo
/**
 * title: 基本用法
 * description: 默认选中第一项，也可以通过 defaultActiveKey 设置默认项。
 */
import { Tabs } from 'buyi-ui';
import React from 'react';

export default () => {
  const tabItem = [
    {
      key: '1',
      title: '选项1',
      content: '选项1内容',
    },
    {
      key: '2',
      title: '选项2',
      content: '选项2内容',
    },
    {
      key: '3',
      title: '选项3',
      content: '选项3内容',
    },
  ];
  return (
    <React.Fragment>
      <Tabs items={tabItem} />
    </React.Fragment>
  );
};
```

```tsx | demo
/**
 * title: 禁用
 * description: 禁用某一项，可以通过 disabled 字段设置。
 */
import { Tabs } from 'buyi-ui';
import React from 'react';

export default () => {
  const tabItem = [
    {
      key: '1',
      title: '选项1',
      content: '选项1内容',
    },
    {
      key: '2',
      title: '选项1',
      content: '选项2内容',
      disabled: true,
    },
    {
      key: '3',
      title: '选项3',
      content: '选项3内容',
    },
  ];
  return (
    <React.Fragment>
      <Tabs items={tabItem} />
    </React.Fragment>
  );
};
```

```tsx | demo
/**
 * title: 尺寸可调
 * description: 选项卡大小可通过 size 字段设置。
 */
import { Radio, Tabs } from 'buyi-ui';
import React from 'react';

export default () => {
  const tabItem = [
    {
      key: '1',
      title: '带扩展选项1',
      content: '选项1内容',
    },
    {
      key: '2',
      title: '带扩展选项2',
      content: '选项2内容',
    },
    {
      key: '3',
      title: '选项3',
      content: '选项3内容',
    },
  ];

  const [size, setSize] = React.useState('small');

  return (
    <React.Fragment>
      <Radio.Group
        defaultValue="small"
        onChange={(checked: string) => setSize(checked)}
      >
        <Radio value="small">small</Radio>
        <Radio value="middle">middle</Radio>
        <Radio value="large">large</Radio>
      </Radio.Group>
      <Tabs items={tabItem} size={size} />
    </React.Fragment>
  );
};
```

```tsx | demo
/**
 * title: 扩展操作
 * description: 提供扩展操作，可以通过 extra 字段设置。
 */
import { Tabs } from 'buyi-ui';
import React from 'react';

export default () => {
  const tabItem = [
    {
      key: '1',
      title: '带扩展选项1',
      content: '选项1内容',
    },
    {
      key: '2',
      title: '带扩展选项2',
      content: '选项2内容',
    },
    {
      key: '3',
      title: '选项3',
      content: '选项3内容',
    },
  ];

  return (
    <React.Fragment>
      <Tabs items={tabItem} extra={<div>扩展操作</div>} />
    </React.Fragment>
  );
};
```

### API

#### Tabs 选项卡

| 属性             | 说明                               | 类型                                | 默认值 |
| ---------------- | ---------------------------------- | ----------------------------------- | ------ |
| items            | 设置 tabs 选项, 具体见下 Tabs.Item | array                               | []     |
| defaultActiveKey | 设置默认激活的选项卡               | string                              | -      |
| activeKey        | 设置激活的选项卡                   | string                              | -      |
| size             | 设置选项卡大小                     | string `small`\|`middle` \|`large`  | -      |
| extra            | 设置选项卡扩展操作                 | `ReactNode`                         | -      |
| onChange         | 选项卡切换时触发的回调             | Function(activeKey: string) => void | -      |

#### Tabs.Item 选项卡子项

| 属性     | 说明                 | 类型    | 默认值 |
| -------- | -------------------- | ------- | ------ |
| key      | 设置选项的唯一标识符 | string  | -      |
| title    | 设置选项的标题       | string  | -      |
| content  | 设置选项的内容       | string  | -      |
| disabled | 设置选项是否禁用     | boolean | -      |
