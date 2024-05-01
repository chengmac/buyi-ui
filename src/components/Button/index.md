---
nav: 组件

title: Button 按钮
group: 常用
groupOrder: 1
keywords: [button]
demo:
  cols: 2
---

#### Button 按钮

用于提供一个界面响应操作

##### 简介

目前仅支持简单的 4 种按钮类型，如下

- 主按钮
- 次按钮
- 虚线按钮
- 链接按钮

##### 代码演示

```tsx | demo
/**
 * title: 按钮类型
 * description: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮
 */
import { Button, Space } from 'buyi-ui';
import React from 'react';
export default () => (
  <React.Fragment>
    <Space>
      <Button type="primary">主按钮</Button>
      <Button type="default">次按钮</Button>
      <Button type="dashed">虚线按钮</Button>
      <Button type="link" linkUrl="https://baidu.com">
        链接按钮
      </Button>
    </Space>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 禁用状态
 * description: 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */
import { Button, Space } from 'buyi-ui';
import React from 'react';
export default () => (
  <React.Fragment>
    <Space>
      <Button type="primary" disabled>
        主按钮
      </Button>
      <Button type="default" disabled>
        次按钮
      </Button>
      <Button type="dashed" disabled>
        虚线按钮
      </Button>
      <Button type="link" linkUrl="https://baidu.com" disabled>
        链接按钮
      </Button>
    </Space>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 加载状态
 * description: 添加 loading 属性即可让按钮处于加载状态，最后三个按钮演示点击后进入加载状态。
 */
import { Button, Space } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Space>
      <Button type="primary" loading>
        刷新
      </Button>
      <Button type="dashed" loading>
        提交中
      </Button>
    </Space>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 图标按钮
 * description: 当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性为Icon 组件。
 */
import { Button, Icon, Space } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Space>
      <Button type="primary" loading />
      <Button type="default" icon={<Icon type="icon-download" />} />
      <Button type="dashed" icon={<Icon type="icon-totop" />} />
    </Space>
  </React.Fragment>
);
```

#### API

| 属性      | 说明               | 类型                                                              | 默认值    |
| --------- | ------------------ | ----------------------------------------------------------------- | --------- |
| disabled  | 设置按钮失效状态   | boolean                                                           | false     |
| type      | 设置按钮类型       | `primary` \| `ghost` \| `dashed` \| `link` \| `text` \| `default` | `default` |
| onClick   | 点击按钮时的回调   | (event: MouseEvent) => void                                       | -         |
| size      | 设置按钮大小       | `large` \| `middle` \| `small`                                    | `middle`  |
| icon      | 设置按钮的图标组件 | ReactNode                                                         | -         |
| loading   | 设置按钮载入状态   | boolean                                                           | false     |
| className | 设置按钮自定义样式 | string                                                            | -         |
| linkUrl   | 链接地址           | string                                                            | -         |
