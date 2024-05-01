---
nav: 组件

title: Space 间距
group: 布局
demo:
  cols: 2
---

#### Space 间距

用于设置组件相互之间的间距, 多用于一行或者一列的排列布局。

#### 代码演示

```tsx | demo
/**
 * title: 基本用法
 * description: 相邻组件水平间距, 默认为水平方向
 */
import { Button, Space } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Space>
      <Button>按钮1</Button>
      <Button type="primary">按钮2</Button>
      <Button type="default">按钮3</Button>
    </Space>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 垂直
 * description: 相邻组件垂直间距
 */
import { Button, Space } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Space direction="vertical">
      <Button>按钮1</Button>
      <Button type="primary">按钮2</Button>
      <Button type="default">按钮3</Button>
    </Space>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 自动换行
 * description: 组件会自动根据宽度折行显示
 */
import { Button, Space } from 'buyi-ui';
import React from 'react';

export default () => {
  const demo = new Array(20).fill('Button');
  return (
    <React.Fragment>
      <Space wrap>
        {demo.map((item, index) => (
          <Button key={index}>{`${item} ${index + 1}`}</Button>
        ))}
      </Space>
    </React.Fragment>
  );
};
```

```tsx | demo
/**
 * title: 间距尺寸及自定义尺寸
 * description: 间距预设大（`large`）、中（`middle`）、小（`small`）三种大小。<br/>通过设置 `size` 即可将间距设为大、中间距。若不设置size，则间距为小。
 */
import { Button, Space } from 'buyi-ui';
import React, { useState } from 'react';

export default () => {
  const demo = ['large', 'middle', 'small'];
  const [spaceSize, setSpaceSize] = useState(demo[0]);

  return (
    <React.Fragment>
      <Space wrap size={spaceSize}>
        {demo.map((size, index) => (
          <Button key={index} onClick={() => setSpaceSize(size)}>
            {size}
          </Button>
        ))}
      </Space>
    </React.Fragment>
  );
};
```

### API

| 属性      | 说明                         | 类型                                       | 默认值       |
| --------- | ---------------------------- | ------------------------------------------ | ------------ |
| align     | 设置组件对齐方式             | `center` \| `start` \| `end` \| `baseline` | `center`     |
| direction | 设置组件水平或者垂直方向排列 | `vertical` \| `horizontal`                 | `horizontal` |
| size      | 设置组件间距大小             | `large` \| `middle` \| `small` \| number   | `small`      |
| warp      | 设置组件自动换行显示         | boolean                                    | false        |
