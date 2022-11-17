import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
     const navigate = useNavigate();
     const onFinish = (values) => {
          console.log("Success:", values);
     };

     const onFinishFailed = (errorInfo) => {
          console.log("Failed:", errorInfo);
     };

     return (
          <div className="login-container">
               <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrLoginerCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
               >
                    <Form.Item
                         label="Ism"
                         name="username"
                         rules={[
                              {
                                   required: true,
                                   message: "Please input your username!",
                              },
                         ]}
                    >
                         <Input />
                    </Form.Item>
                    <Form.Item
                         label="Parol"
                         name="password"
                         rules={[
                              {
                                   required: true,
                                   message: "Please input your password!",
                              },
                         ]}
                    >
                         <Input.Password />
                    </Form.Item>
                    <Form.Item
                         label="Passport/ID"
                         name="passport"
                         rules={[
                              {
                                   required: true,
                                   message: "Iltimos passport/id ma'lumotingizni kiriting!",
                              },
                         ]}
                    >
                         <Input />
                    </Form.Item>
                    <Form.Item
                         name="remember"
                         valuePropName="checked"
                         wrLoginerCol={{ offset: 8, span: 16 }}
                    >
                         <Checkbox>Eslab qol!</Checkbox>
                    </Form.Item>
                    <Form.Item wrLoginerCol={{ offset: 8, span: 16 }}>
                         <Button type="primary" htmlType="submit">
                              Ro'yxatdan o'tish
                         </Button>
                         <Button type="primary" htmlType="submit">
                              Kirish
                         </Button>
                         <Button
                              type="danger"
                              htmlType="submit"
                              onClick={() => navigate("/")}
                         >
                              O'tkazib yuborish
                         </Button>
                    </Form.Item>
               </Form>
          </div>
     );
};

export default Login;
