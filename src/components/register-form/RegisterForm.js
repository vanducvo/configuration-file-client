import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

function RegisterForm() {
  const [usernameStatus, setUsernameStatus ] = useState("");
  
  function setLoading() {
    setUsernameStatus("validating");
  }

  function checkUsernameExists(e){
    console.log(e.target.value);
    setUsernameStatus("success");
  }

  return (
    <Form
      layout="vertical"
      name="register"
      onFinish={() => { }}
      onFinishFailed={() => { }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
          () => ({
            validator(rule, value){
              if(usernameStatus === "error"){
                return Promise.reject("Username Exists! Please choose another name.");
              }

              return Promise.resolve();
            }
          })
        ]}
        validateStatus={usernameStatus}
        hasFeedback
      >
        <Input onChange={setLoading} onBlur={checkUsernameExists}/>
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
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirm"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match');
            }
          })
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterForm;