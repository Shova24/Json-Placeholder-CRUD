import { Button, Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import AddUsers from "./Components/AddUsers";
import FormField from "./Components/Shared/FormField";
import UpdateUser from "./Components/UpdateUser";
import Users from "./Components/Users";
function App() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  // const handleAdd = async (values) => {
  //   await fetch("https://jsonplaceholder.typicode.com/users", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: Math.random(),
  //       name: values.name,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setUsers([...users, json]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
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
  const handleEdit = async (id) => {
    setIsModalOpen(true);
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        name: "Shova",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  const edit = false;

  return (
    <>
      <Card style={{ borderRadius: "15px", margin: "20px", display: "flex", justifyContent: "center" }}>
        <h1>Json Place Holder CRUD Operation</h1>
        <hr />

        <Row>
          <Col span={24}>
            {/* <AddUsers users={users} setUsers={setUsers} /> */}
            {edit ? <FormField handleFunction="Add" users="users" setUsers="setUsers" /> : <FormField handleFunction="Edit" users="users" setUsers="setUsers" />}
          </Col>
        </Row>
        <Row>{/* <UpdateUser setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} /> */}</Row>
        <Row>
          {users.map((el) => (
            <Col xs={24} md={12} lg={8}>
              <Users user={el} key={el.id} handleDelete={handleDelete} handleEdit={handleEdit} />
            </Col>
          ))}
        </Row>
      </Card>
    </>
  );
}

export default App;
