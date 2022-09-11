import { Card, Form, Input, Button, Row } from "antd";
import React from "react";

export default function AddUsers({ users, setUsers }) {
  const [form] = Form.useForm();
  const addUser = async (values) => {
    console.log(users.length);
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        id: Math.random(),
        name: values.name,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers([...users, json]);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(users.length);
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
