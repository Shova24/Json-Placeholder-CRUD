import { Button, Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import AddUsers from "./Components/AddUsers";
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
  const handleDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card style={{ borderRadius: "15px", margin: "20px", display: "flex", justifyContent: "center" }}>
        <h1>Json Place Holder CRUD Operation</h1>
        <hr />

        <Row>
          <Col span={24}>
            <AddUsers users={users} setUsers={setUsers} />
          </Col>
        </Row>
        <Row>
          {users.map((el) => (
            <Col xs={24} md={12} lg={8}>
              <Users user={el} key={el.id} handleDelete={handleDelete} />
            </Col>
          ))}
        </Row>
      </Card>
    </>
  );
}

export default App;
