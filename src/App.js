import { Button, Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import Users from "./Components/Users";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Card style={{ borderRadius: "15px", margin: "20px", display: "flex", justifyContent: "center" }}>
        <h1>Json Place Holder CRUD Operation</h1>
        <hr />

        <Row>Add Item</Row>
        <Row>
          {users.map((el) => (
            <Col xs={24} md={12} lg={8}>
              <Users user={el} key={el.id} />
            </Col>
          ))}
        </Row>
        <Button>Click</Button>
        <Button>Click</Button>
        <Button>Click</Button>
      </Card>
    </>
  );
}

export default App;
