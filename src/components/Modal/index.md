---
nav: 组件

title: Modal 模态框
group: 常用
demo:
  cols: 2
---

#### Modal 模态框

模态框（Modal）是一种对话框，它将一个任务或信息聚焦于当前页面，并阻止用户与其他页面的交互。
用于弹出一个对话框或者消息提示，需要用户进行确认后才可关闭。

#### 代码演示

```tsx | demo
/**
 * title: 基本
 * description: 模态框组件一般用于需要用户确认或输入信息的场景，比如删除、提交、修改等。
 */
import { Button, Modal } from 'buyi-ui';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const createSuccess = () => {
    setVisible(true);
  };

  return (
    <React.Fragment>
      <Button onClick={createSuccess}>基础弹框</Button>
      <Modal title="标题" visible={visible} onCancel={() => setVisible(false)}>
        内容
      </Modal>
    </React.Fragment>
  );
};
```

```tsx | demo
/**
 * title: 大小
 * description: 模态框大小，有`small`、`middle`、`large`、`xLarge`四种，默认为 `small`。
 */
import { Button, Modal, Space } from 'buyi-ui';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const [size, setSize] = React.useState('small');
  const createSuccess = (size: string) => {
    setSize(size);
    setVisible(true);
  };

  return (
    <React.Fragment>
      <Space>
        <Button onClick={() => createSuccess('small')}>Small</Button>
        <Button onClick={() => createSuccess('middle')}>Middle</Button>
        <Button onClick={() => createSuccess('large')}>Large</Button>
        <Button onClick={() => createSuccess('xLarge')}>xLarge</Button>
      </Space>
      <Modal
        title="标题"
        visible={visible}
        onCancel={() => setVisible(false)}
        size={size}
      >
        内容
      </Modal>
    </React.Fragment>
  );
};
```

```tsx | demo
/**
 * title: 自定义页脚
 * description: 对于复杂的场景，可以自定义页脚，当footer为null，则不显示页脚。
 */
import { Button, Modal } from 'buyi-ui';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const createSuccess = () => {
    setVisible(true);
  };

  return (
    <React.Fragment>
      <Button onClick={createSuccess}>隐藏弹框页脚</Button>
      <Modal
        title="标题"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        内容
      </Modal>
    </React.Fragment>
  );
};
```

```tsx | demo
/**
 * title: 静态方法
 * description: 提供了创建弹框的静态方法，不需要在调用组件时再创建实例。
 */
import { Button, Modal, Space } from 'buyi-ui';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const createSuccess = () => {
    Modal.success({
      title: '成功',
      content: '这是一段内容',
    });
  };

  const createError = () => {
    Modal.success({
      title: '错误',
      content: '这是一段内容',
    });
  };

  const createWarning = () => {
    Modal.success({
      title: '警告',
      content: '这是一段内容',
    });
  };

  const createInfo = () => {
    Modal.success({
      title: '信息',
      content: '这是一段内容',
    });
  };

  const createConfirm = () => {
    Modal.success({
      title: '确认',
      content: '这是一段内容',
    });
  };

  return (
    <React.Fragment>
      <Space>
        <Button onClick={createSuccess}>Success</Button>
        <Button onClick={createError}>Error</Button>
        <Button onClick={createWarning}>Warning</Button>
        <Button onClick={createInfo}>Info</Button>
        <Button onClick={createConfirm}>Confirm</Button>
      </Space>
    </React.Fragment>
  );
};
```

### API

| 属性         | 说明                                              | 类型                                      | 默认值        |
| ------------ | ------------------------------------------------- | ----------------------------------------- | ------------- |
| title        | 设置弹出框的标题                                  | `ReactNode`                               | `string`      |
| direction    | 设置组件水平或者垂直方向排列                      | `vertical` \| `horizontal`                | `horizontal`  |
| size         | 设置组件间距大小                                  | `large` \| `middle` \| `small` \| `small` |
| visible      | 是否显示弹框                                      | boolean                                   | false         |
| closeable    | 是否显示关闭按钮                                  | boolean                                   | true          |
| getContainer | 弹框挂载元素                                      | `HTMLElement`                             | document.body |
| footer       | 自定义底部内容， 当不需要默认底部按钮时，可以设为 | `ReactNode`                               |               |
| onCancel     | 点击关闭或者取消回调函数                          | function (e)                              |               |
| onOk         | 点击确定回调函数                                  | function (e)                              |               |
