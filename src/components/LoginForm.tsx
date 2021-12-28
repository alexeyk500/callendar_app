import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm:React.FC = () => {

  const {error, isLoading} = useTypedSelector(state => state.authReducer)
  const {login} = useActions()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onSubmit = () => {
    login(username, password)
  }

  return (
    <Form
      onFinish={onSubmit}
      autoComplete="off"
    >
      {
        error &&
          <div style={{color: 'red'}}>
            {error}
          </div>
      }
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          autoComplete={'off'}
          value={username}
          onChange={onChangeUsername}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          value={password}
          onChange={onChangePassword}
          type={'password'}
          autoComplete={'new-password'}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading} >
          Submit
        </Button>
      </Form.Item>

    </Form>
  );
};

export default LoginForm;
