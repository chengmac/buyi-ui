---
nav: 组件

title: Switch 开关
group: 数据交互
demo:
  cols: 2
---

#### Switch 开关

用于一些状态的切换。

#### 代码演示

```tsx | demo
/**
 * title: 基本用法
 * description: 最简单的用法
 */
import { Space, Switch } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Space>
      <Switch />
      <Switch checked />
    </Space>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 自定义文案
 * description: 支持自定义文案
 */
import { Switch } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Switch checkedText="是否开启" unCheckedText="是否关闭"></Switch>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 禁用
 * description: 不可用状态
 */
import { Switch } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Switch disabled></Switch>
  </React.Fragment>
);
```

### API

#### Switch 组件

| 属性          | 说明             | 类型                                     | 默认值 |
| ------------- | ---------------- | ---------------------------------------- | ------ |
| checked       | 是否选中         | boolean                                  | false  |
| disabled      | 是否禁用         | boolean                                  | false  |
| checkedText   | 选中时文案       | string                                   | -      |
| unCheckedText | 非选中时文案     | string                                   | -      |
| className     | 组件类名         | object                                   | -      |
| onChange      | 状态切换回调函数 | Function(checked: boolean, event: Event) | -      |
