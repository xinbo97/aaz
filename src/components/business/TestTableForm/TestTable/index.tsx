// @ts-nocheck
import React, { useEffect, useContext } from 'react';
import { Form, Table, InputNumber, Input, Button } from 'antd';
import type { FormInstance, EditableRowProps } from 'antd';
import { cloneDeep } from 'lodash-es';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}
const EditableContext = React.createContext<FormInstance<any> | null>(null);

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const TestInput = (props) => {
  console.log('>>>props>>', props);

  const changeVal = (e) => {
    props.onChange(e.target.value);
    props.handleChange(e);
  };

  return <Input onChange={changeVal} value={props.value} />;
};

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  handleChange,

  ...restProps
}) => {
  const form = useContext(EditableContext)!;
  useEffect(() => {
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  }, []);
  return (
    <td {...restProps} onMouseEnter={() => {}} onMouseLeave={() => {}}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {/* 这里利用handleChange改值是利用了引入类型改值的原理 */}
          {/* <Input onChange={handleChange} /> */}
          <TestInput handleChange={handleChange} />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    editable: true,
  },
  {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    editable: true,
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    editable: true,
  },
  {
    title: '操作列',
    dataIndex: 'op',
    width: '40%',
    // editable: true,
    render: (text, record, index) => {
      return (
        <a
          onClick={() => {
            console.log('>>>>record', record);
          }}
        >
          {' '}
          点击
        </a>
      );
    },
  },
];

const EditTable = (props) => {
  const handleChange = (e, key, dataIndex) => {
    // 这里和 save 的逻辑一样
    const newData = [...props.value]; // 这里 form 值的更新非常巧妙，是利用了引入类型地址一样来进行改form值的；如果这里一旦使用了cloneDeep，那么form值就不会变了！并且这里不用 onChange 来做数据收集同步 其数据同步将被 Form 自动接管，这会导致循环触发更新从而卡顿。
    // const newData = cloneDeep([...props.value]);
    const targetRow = newData.filter((item) => item.key === key)[0];

    if (targetRow) {
      targetRow[dataIndex] = e.target.value; // 改变当前 row 的值
      // props.onChange?.(newData); // 不用 onChange 来做数据收集同步，数据同步将被 Form 自动接管，这会导致循环触发更新从而卡顿。
    }
  };
  const mergedColumns = columns.map((col) => {
    return {
      ...col,
      onCell: (record: Item, rowIndex: number) => ({
        record,
        index: rowIndex,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: col.editable,
        form: props.form,
        handleChange: (e) => handleChange(e, record.key, col.dataIndex),
      }),
    };
  });

  return (
    <>
      <Button
        onClick={() => {
          const newData = [{ name: 'test' }, ...props.value];
          props.onChange?.(newData);
        }}
      >
        点击新增一行
      </Button>
      <Table
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={props.value}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          pageSize: 300,
        }}
        scroll={{ y: 400 }}
      />
    </>
  );
};

export default EditTable;
