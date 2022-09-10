import React, { useState } from "react";
import "./Task.css";

function Task({ update, del, id, valor }) {
  const [edit, SetEdit] = useState(false);
  const [neww, SetNeww] = useState(valor);
  const eliminar = () => {
    del(id);
  };

  const edi = () => {
    SetEdit(true);
    SetNeww(valor);
  };

  const updates = () => {
    update(id, neww);
    SetEdit(false);
  };

  return (
    <div className="containerTask">
      <div style={{ width: "60%" }}>
        {edit ? (
          <input
            className="pres"
            type="text"
            onChange={(e) => SetNeww(e.target.value)}
            value={neww}
          ></input>
        ) : (
          <input className="pres" type="text" value={valor}></input>
        )}
      </div>
      <div className="containerButton">
        {edit ? (
          <button className="but" onClick={updates}>
            update
          </button>
        ) : (
          <>
            <button className="but upd" onClick={edi}>
              Edit
            </button>
            <button className="but dele" onClick={eliminar}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Task;
