---
nav: 组件

title: Radio 单选框
group: 数据交互
demo:
  cols: 2
---

#### Radio 单选框

用于在多个备选项中选中单个状态

#### 代码演示

```tsx | demo
/**
 * title: 基本用法
 * description: 最简单的用法
 */
import { Radio } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Radio>Radio</Radio>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 禁用状态
 * description: 禁用状态的单选框
 */
import { Radio } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Radio disabled>不可用</Radio>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: Radio.Group
 * description: 配合多个输入框选项
 */
import { Radio } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Radio.Group value="1">
      <Radio value="1">选项1</Radio>
      <Radio value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: Radio.Group 禁用
 * description: 所有单选框全部禁用
 */
import { Radio } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Radio.Group disabled>
      <Radio value="1">选项1</Radio>
      <Radio value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: Radio.Group 排列方式
 * description: 支持水平排列和垂直排列两种
 */
import { Radio, Text } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Text>水平排列</Text>
    <Radio.Group defaultValue="1">
      <Radio value="1">选项1</Radio>
      <Radio value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>

    <Text style={{ marginTop: 20 }}>垂直排列</Text>
    <Radio.Group direction="vertical">
      <Radio value="1">选项1</Radio>
      <Radio value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>
  </React.Fragment>
);
```

### API

#### Radio 组件

| 属性         | 说明                      | 类型                   | 默认值 |
| ------------ | ------------------------- | ---------------------- | ------ |
| value        | 对比 value 后判断是否选中 | string                 | -      |
| defaultValue | 默认选中                  | string                 | -      |
| disabled     | 禁用                      | boolean                | false  |
| checked      | 设置当前选中              | boolean                | false  |
| wrapperStyle | 组件外层容器类名          | object                 | -      |
| className    | 组件类名                  | object                 | -      |
| onChange     | 选项变化时回调函数        | Function(event: Event) | -      |

#### Radio.Group 组件

| 属性         | 说明                                               | 类型                       | 默认值       |
| ------------ | -------------------------------------------------- | -------------------------- | ------------ |
| defaultValue | 默认选中                                           | string                     | -            |
| disabled     | 禁用                                               | boolean                    | false        |
| className    | 组件类名                                           | object                     | -            |
| direction    | 设置组件水平或者垂直方向排列                       | `vertical` \| `horizontal` | `horizontal` |
| name         | RadioGroup 下所有 input[type="radio"] 的 name 属性 | string                     | -            |
| onChange     | 选项变化时回调函数                                 | Function(event: Event)     | -            |
