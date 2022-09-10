import Task from "./Task";
import { useState } from "react";
import "./Main.css";

function Main() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [tarea, setTarea] = useState("");

  const handleTarea = (e) => {
    setTarea(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    let aux = {
      id: count,
      task: tarea
    };
    data.push(aux);
    setCount(count + 1);
    console.log(data);
  };

  const update = (id, neww) => {
    let arrayU = data.map((p) => (p.id === id ? { ...p, task: neww } : p));
    setData(arrayU);
  };

  const del = (id) => {
    console.log(id);
    let nw = data.filter((el) => el.id !== id);
    setData(nw);
  };

  return (
    <div className="containerMain">
      <div className="header">
        <h2>To do</h2>
        <form className="forms" onSubmit={add}>
          <input
            type="text"
            name="tarea"
            value={tarea}
            onChange={handleTarea}
          ></input>
          <input type="submit"></input>
        </form>
      </div>

      <hr style={{ marginBottom: "10px", marginTop: "10px" }} />

      <div style={{ width: "100%" }}>
        {data.map((el) => (
          <Task update={update} del={del} id={el.id} valor={el.task}></Task>
        ))}
      </div>
    </div>
  );
}

export default Main;
