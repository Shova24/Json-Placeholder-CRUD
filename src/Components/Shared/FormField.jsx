import { Card, Form, Input, Button, Row } from "antd";
import React from "react";

export default function FormField({ handleFunction, users, setUsers }) {
  const [form] = Form.useForm();
  const handleAdd = async (values) => {
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
  };
  const handleEdit = () => {
    console.log("Edit");
  };
  const onFinish = async (values) => {
    if (handleFunction === "add") {
      handleAdd(values);
    } else {
      handleEdit();
    }

    form.resetFields();
  };

  return (
    <Card style={{ borderRadius: "15px", margin: "20px" }}>
      <Form form={form} onFinish={onFinish}>
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
