import { Card, Form, Input, Button, Row } from "antd";
import React from "react";

export default function FormField({ handleFunction }) {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    handleFunction(values);
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
