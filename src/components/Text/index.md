---
nav: 组件

title: Text 文本
group: 常用
demo:
  cols: 2
---

#### Text 文本

用于显示标题、段落及内容，并且提供一些文本的基础操作。

#### 代码演示

```tsx | demo
/**
 * title: 基本用法
 * description: 相邻组件水平间距, 默认为水平方向
 */
import { Text } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Text style={{ color: '#1890ff' }}>块级Text测试使用</Text>
    <Text inline>行内Text测试使用</Text>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 作为复制使用
 * description: 设置内容可拷贝
 */
import { Text } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Text copyable style={{ color: '#1890ff' }}>
      块级测试Copy
    </Text>
    <Text inline copyable>
      行内测试Copy
    </Text>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 加粗使用
 * description: 设置内容加粗显示
 */
import { Text } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Text strong style={{ color: '#1890ff' }}>
      块级加粗
    </Text>
    <Text inline strong>
      行内加粗
    </Text>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 作为标题
 * description: 可以渲染为h1~h6标签，用来呈现不同级别的标题
 */
import { Text } from 'buyi-ui';
import React from 'react';

const Title = Text.Title;

export default () => (
  <React.Fragment>
    <Title as="h1">用作标题H1</Title>
    <Title as="h2">用作标题H2</Title>
    <Title as="h3">用作标题H3</Title>
    <Title as="h4">用作标题H4</Title>
    <Title as="h5">用作标题H5</Title>
    <Title as="h6">用作标题H6</Title>
  </React.Fragment>
);
```

### API

#### Text 组件

| 属性     | 说明                         | 类型    | 默认值 |
| -------- | ---------------------------- | ------- | ------ |
| inline   | 设置为行内显示               | boolean | false  |
| strong   | 设置加粗显示                 | boolean | false  |
| copyable | 设置内容是否可拷贝           | boolean | false  |
| ellipsis | 设置内容溢出时是否显示省略号 | boolean | false  |

#### Title 组件

| 属性 | 说明                                | 类型   | 默认值 |
| ---- | ----------------------------------- | ------ | ------ |
| as   | 设置渲染元素为 h1,h2,h3,h4,h5,h6 等 | string | h1     |
