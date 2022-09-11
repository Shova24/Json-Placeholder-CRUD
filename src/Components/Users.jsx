import { Card, Col, Row } from "antd";
import React from "react";

export default function Users({ user }) {
  return (
    <Card style={{ borderRadius: "15px", margin: "10px" }}>
      <Row justify="space-between">
        <Col>{user.id}</Col>
        <Col>{user.name}</Col>
        {/* <Col>{user.email}</Col>
        <Col>{user.city}</Col> */}
      </Row>
    </Card>
  );
}
