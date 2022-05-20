import { Form, message, Button, Select } from 'antd';
import React from 'react'
import './a.css'

const { Option } = Select;
const Demo = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    if(values.水果 == '葡萄柚'){
      message.info('grapefruit');
    }else if(values.水果 == '酸橙'){
      message.info('lime');
    }else if(values.水果 == '椰子'){
      message.info('coconut');
    }else if(values.水果 == '芒果'){
      message.info('mango');
    }
  };
  const onFinishFailed = () => {
    message.error('请选择水果!');
  };

  return (
    <Form form={form} name="control-hooks" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="水果"
        label="水果"
        rules={[
          {
            required: true,
            message: '请选择水果',
          },
        ]}
      >
        <Select>
          <Option value="葡萄柚">葡萄柚</Option>
          <Option value="酸橙">酸橙</Option>
          <Option value="椰子" disabled>椰子</Option>
          <Option value="芒果">芒果</Option>
        </Select>
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;