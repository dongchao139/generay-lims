import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import './login.less';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import store from './store';

const Login = () => {
  const onFinish = (values: any) => {
    store.dispatch({
      type: 'login',
      payload: values
    });
  };

  return (
    <div className='login-container'>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item>
          <h3 style={{textAlign: 'center', fontSize: '1.5em'}}>请登录</h3>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
            </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
            Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;