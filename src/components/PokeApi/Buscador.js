import React, { useState } from "react";
import "./Buscador.css";

function Buscador({ buscar }) {
  const [data, Setdata] = useState("");

  const handelData = (e) => {
    let valor = e.target.value;
    Setdata(valor);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!data) {
      alert("Rellene un dato");
    } else {
      buscar(data);
    }
  };
  return (
    <div>
      <form className="container" onSubmit={submit}>
       
        <input
          placeholder=" Poekemon"
          className="texto"
          type="text"
          onChange={handelData}
          name="pokemon"
          value={data}
        />
      </form>
    </div>
  );
}

export default Buscador;
