import "./Style.css";
import React, { useState } from "react";
import Buscador from './Buscador'
import Card from './Card'
import Encontrado from './Encontrado'
import Footer from './Footer'
import Loader from './Loader'
import Divider from "@material-ui/core/Divider";
export default function Poke() {
  const [loader, setLoader] = useState(false);
  const [encontrado, setEcontrado] = useState(false);
  const [informacion, SetInformacion] = useState([]);

  const buscar = async (pokemon) => {
    try {
      setLoader(true);
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
      let informacion = await data.json();
      SetInformacion(informacion);
      console.log(informacion);
      setLoader(false);
      setEcontrado(true);
    } catch (error) {
      console.log(error);
      setEcontrado(false);
      SetInformacion([]);
      setLoader(false);
    }
  };

  return (
    <div className="App">
      <Buscador buscar={buscar}></Buscador>
      <Divider variant="middle" />
      {loader ? (
        <Loader></Loader>
      ) : (
        <Card encontro={encontrado} informacion={informacion}></Card>
      )}
      <Divider variant="middle" />
      <Footer></Footer>
    </div>
  );
}
