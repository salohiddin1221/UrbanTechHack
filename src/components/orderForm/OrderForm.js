import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Link from "antd/lib/typography/Link";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./orderForm.css";

const OrderForm = () => {
     const navigate = useNavigate();
     const onFinish = (values) => {
          console.log("Success:", values);
     };

     const onFinishFailed = (errorInfo) => {
          console.log("Failed:", errorInfo);
     };

     return (
          <div className="order-form-container">
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
                                   message: "Bemorni ismini kiriting!",
                              },
                         ]}
                    >
                         <Input />
                    </Form.Item>
                    <Form.Item
                         label="Familiya"
                         name="username"
                         rules={[
                              {
                                   required: true,
                                   message: "Bemorni familiyasini kiriting!",
                              },
                         ]}
                    >
                         <Input />
                    </Form.Item>

                    <Form.Item
                         label="Passport/ID"
                         name="passport"
                         rules={[
                              {
                                   required: true,
                                   message: "Iltimos, bemorni passport/id ma'lumotingizni kiriting!",
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
                              Chaqiruv
                         </Button>
                    </Form.Item>
                    <p>Manzilni O'zgartirish</p>
               </Form>
          </div>
     );
};

export default OrderForm;
