import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [todo_list, setTodo_list] = useState([]);
  const [id, setId] = useState("");
  const [todo, setTodo] = useState("");

  const doChange = (e) => setTodo(e.target.value);
  const doChangeId = (e) => setId(e.target.value);

  useEffect(() => {
    const doGet = async () => {
      const resp = await axios.get("http://127.0.0.1:8000/todo");
      console.log(resp.data.todos);
      setTodo_list(resp.data.todos);
    };
    doGet();
  }, []);

  const doGet = async () => {
    const resp = await axios.get("http://127.0.0.1:8000/todo");
    console.log(resp.data.todos);
    setTodo_list(resp.data.todos);
    setId("");
    setTodo("");
  };

  const doSubmit = async () => {
    const data = { id: id, item: todo };
    const resp = await axios.post("http://127.0.0.1:8000/todo", data);
    console.log(resp.data);
    doGet();
  };

  const doDelete = async (e) => {
    const resp = await axios.delete(
      `http://127.0.0.1:8000/todo/${e.target.id}`
    );
    console.log(resp.data);
    doGet();
  };

  return (
    <>
      <div style={{ border: "1px solid blue" }}>
        아이디:
        <input type="text" onChange={doChangeId} value={id} />
        <br />
        아이템:
        <input type="text" onChange={doChange} value={todo} />
        <br />
        <input type="button" onClick={doSubmit} value="추가" />
      </div>
      <div style={{ background: "black", border: "1px solid black" }}>
        {todo_list.map((x) => (
          <p onClick={doDelete} id={x.id}>
            {x.item}
          </p>
        ))}
      </div>
    </>
  );
}
