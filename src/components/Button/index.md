### Button

This is an example component.

```tsx
import React from 'react';
import Button from './button';

export default () => (
  <React.Fragment>
    <Button disabled={true}>禁用按钮</Button>
    <Button type="primary">基本按钮</Button>
    <Button
      type="default"
      onClick={() => {
        console.log(234);
      }}
    >
      默认按钮
    </Button>
  </React.Fragment>
);
```
