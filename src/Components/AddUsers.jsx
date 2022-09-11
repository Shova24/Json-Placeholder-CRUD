import { Card, Form, Input, Button, Row } from "antd";
import React from "react";

export default function AddUsers({ users, setUsers }) {
  const [form] = Form.useForm();
  const addUser = (values) => {
    const newUser = {
      id: users.length + 1,
      name: values.name,
    };
    setUsers([newUser, ...users]);
    form.resetFields();
  };
  return (
    <Card style={{ borderRadius: "15px", margin: "20px" }}>
      <Form form={form} onFinish={addUser}>
        <Form.Item name="name" label="Name">
          <Input placeholder="Enter Name" />
        </Form.Item>
        <Row justify="end">
          <Button htmlType="submit"> Add User</Button>
        </Row>
      </Form>
    </Card>
  );
}
