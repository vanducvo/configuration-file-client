import React from 'react';
import {Form, Input, Button} from 'antd';
import 'antd/dist/antd.css';

function LoginForm() {
  return (
    <Form
      layout="vertical"
      name="login"
      onFinish={() => {}}
      onFinishFailed={() => {}}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;