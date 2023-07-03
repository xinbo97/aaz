// @ts-nocheck
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

import EditTable from './TestTable';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 600; i++) {
  originData.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 35,
    address: `London Park no. ${i}`,
  });
}

const App: React.FC = () => {
  const [form] = Form.useForm();
  // const [data, setData] = useState(originData);

  return (
    <Form form={form} component={false} initialValues={{ table: originData }}>
      <Button
        onClick={() => {
          console.log('>>>', form.getFieldsValue());
        }}
      >
        点击
      </Button>
      <Form.Item label="姓名" name="name">
        <Input />
      </Form.Item>
      <Form.Item name="table">
        <EditTable />
      </Form.Item>
    </Form>
  );
};

export default App;
