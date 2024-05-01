---
nav: 组件

title: Grid 栅格布局
group: 布局
groupOrder: 2
demo:
  cols: 2
---

#### Grid 栅格布局

用于排列布局栅格系统

我们的栅格化系统基于 Grid 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序

#### 代码演示

```tsx | demo
/**
 * title: 基本用法
 * description: 从堆叠到水平排列，使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。
 */
import { Grid, Text } from 'buyi-ui';
import React from 'react';

const style = {
  padding: '8px 0px',
  background: '#1677ff',
};
export default () => (
  <React.Fragment>
    <Text.Title as="h3">span 6</Text.Title>
    <Grid.Row>
      <Grid.Col className="buyi-col-demo1" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={6}>
        <div>col-6</div>
      </Grid.Col>
    </Grid.Row>
    <Text.Title as="h3">span 4</Text.Title>
    <Grid.Row>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
    </Grid.Row>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 间距
 * description: 设置子元素之间相隔距离
 */
import { Grid, Text } from 'buyi-ui';
import React from 'react';

const style = {
  padding: '8px 0px',
  background: '#1677ff',
};
export default () => (
  <React.Fragment>
    <Text.Title as="h3">gap 8</Text.Title>
    <Grid.Row gap={8}>
      <Grid.Col className="buyi-col-demo1" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={6}>
        <div>col-6</div>
      </Grid.Col>
    </Grid.Row>
    <Text.Title as="h3">gap 16</Text.Title>
    <Grid.Row gap={16}>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo1" span={4}>
        <div>col-4</div>
      </Grid.Col>
    </Grid.Row>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 对齐
 * description: 设置子元素垂直对齐
 */
import { Grid, Text } from 'buyi-ui';
import React from 'react';

export default () => (
  <React.Fragment>
    <Text.Title as="h3"> align top</Text.Title>
    <Grid.Row align="top">
      <Grid.Col className="buyi-col-demo2" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo2" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo2" span={6}>
        <div>col-6</div>
      </Grid.Col>
    </Grid.Row>
    <Text.Title as="h3"> align middle</Text.Title>
    <Grid.Row align="middle">
      <Grid.Col className="buyi-col-demo2" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo2" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo2" span={6}>
        <div>col-6</div>
      </Grid.Col>
    </Grid.Row>
    <Text.Title as="h3"> align bottom</Text.Title>
    <Grid.Row align="bottom">
      <Grid.Col className="buyi-col-demo2" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo2" span={6}>
        <div>col-6</div>
      </Grid.Col>
      <Grid.Col className="buyi-col-demo2" span={6}>
        <div>col-6</div>
      </Grid.Col>
    </Grid.Row>
  </React.Fragment>
);
```

```tsx | demo
/**
 * title: 排列
 * description: 设置子元素水平方向上排列
 */
import { Grid, Text } from 'buyi-ui';
import React from 'react';

export default () => {
  const demo = new Array(20).fill('Button');
  return (
    <React.Fragment>
      <Text.Title as="h3"> justify start</Text.Title>
      <Grid.Row justify="start">
        <Grid.Col className="buyi-col-demo2" span={6}>
          <div>col-6</div>
        </Grid.Col>
        <Grid.Col className="buyi-col-demo2" span={6}>
          <div>col-6</div>
        </Grid.Col>
        <Grid.Col className="buyi-col-demo2" span={6}>
          <div>col-6</div>
        </Grid.Col>
      </Grid.Row>
      <Text.Title as="h3"> justify center</Text.Title>
      <Grid.Row justify="center">
        <Grid.Col className="buyi-col-demo2" span={6}>
          <div>col-6</div>
        </Grid.Col>
        <Grid.Col className="buyi-col-demo2" span={6}>
          <div>col-6</div>
        </Grid.Col>
        <Grid.Col className="buyi-col-demo2" span={6}>
          <div>col-6</div>
        </Grid.Col>
      </Grid.Row>
      <Text.Title as="h3"> justify end</Text.Title>
      <Grid.Row justify="end">
        <Grid.Col className="buyi-col-demo2" span={6}>
          <div>col-6</div>
        </Grid.Col>
        <Grid.Col className="buyi-col-demo2" span={6}>
          <div>col-6</div>
        </Grid.Col>
        <Grid.Col className="buyi-col-demo2" span={6}>
          <div>col-6</div>
        </Grid.Col>
      </Grid.Row>
    </React.Fragment>
  );
};
```

### API

#### Row 组件

| 属性      | 说明                                                                                                                                     | 类型                                                              | 默认值  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| align     | 设置垂直对齐方式                                                                                                                         | `top` \| `middle` \| `bottom` \| `stretch`                        | `top`   |
| justify   | 设置水方向排列方式                                                                                                                       | `start` \| `end` \| `center` \| `space-between` \| `space-around` | `start` |
| wrap      | 设置是否换行                                                                                                                             | boolean                                                           | false   |
| gap       | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 `{ xs: 8, sm: 16, md: 24}`。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | number \| object \| array \|                                      |
| className | 设置按钮自定义样式                                                                                                                       | string                                                            | -       |

#### Col 组件

| 属性      | 说明                                                                               | 类型                 | 默认值 |
| --------- | ---------------------------------------------------------------------------------- | -------------------- | ------ |
| flex      | flex 布局属性                                                                      | `string` \| `number` |        |
| span      | 栅格占位格数，为 0 时无意义,范围为`2` \| `4` \| `6` \| `8` \| `10` \| `12` \| `24` | number               |        |
| className | 设置按钮自定义样式                                                                 | string               | -      |
