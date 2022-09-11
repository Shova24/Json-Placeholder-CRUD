import { Button, Card, Col, Row } from "antd";
import React from "react";

export default function Users({ user, handleDelete, handleEdit }) {
  return (
    <Card style={{ borderRadius: "15px", margin: "10px" }}>
      <Row justify="space-between">
        <Col>{user?.id}</Col>
        <Col>{user?.name}</Col>

        <Col>
          <Button onClick={() => handleEdit(user.id)}>Edit</Button>
          <Button onClick={() => handleDelete(user.id)}>Delete</Button>
        </Col>
      </Row>
    </Card>
  );
}
