import { Button, Card, Col, Row } from "antd";
import React from "react";

export default function Users({ user, handleDelete }) {
  return (
    <Card style={{ borderRadius: "15px", margin: "10px" }}>
      <Row justify="space-between">
        <Col>{user?.id}</Col>
        <Col>{user?.name}</Col>
        {/* <Col>{user.email}</Col>
        <Col>{user.city}</Col> */}
        <Col>
          <Button onClick={() => handleDelete(user.id)}>Delete</Button>
        </Col>
      </Row>
    </Card>
  );
}
