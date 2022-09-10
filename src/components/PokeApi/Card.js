import React from "react";
import "./Card.css";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    width: "60%",
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff"
  }
}))(LinearProgress);

function NoEncontrado() {
  return (
    <div >
      <h2>El Pokemon buscado no pudo ser encontrado</h2>
      <img
        className="noEncontradoIMG "
        alt="No encontrado"
        src="https://thumbs.dreamstime.com/b/error-p%C3%A1gina-no-encontrada-sitio-web-de-internet-concepto-vector-abajo-encontrado-icono-dise%C3%B1o-plano-simple-189912863.jpg"
      />
    </div>
  );
}

function Encontrado({ informacion }) {
  return (
    <div className="encontradoContainer">
      <div style={{ width: "45%" }}>
        <img
          className="imagen"
          style={{ width: "100%" }}
          alt="img"
          src={informacion.sprites.other.home.front_default}
        />
      </div>

      <div style={{ width: "55%" }}>
        <h2>{informacion.name}</h2>

        <div className="stats">
          <p>HP </p>
          <BorderLinearProgress
            variant="determinate"
            value={informacion.stats[0].base_stat}
          />
        </div>
        <div className="stats">
          <p>Atack</p>
          <BorderLinearProgress
            variant="determinate"
            value={informacion.stats[1].base_stat}
          />
        </div>
        <div className="stats">
          <p>Defense</p>
          <BorderLinearProgress
            variant="determinate"
            value={informacion.stats[2].base_stat}
          />
        </div>
      </div>
    </div>
  );
}

const Card = ({ encontro, informacion }) => {
  if (encontro) {
    return <Encontrado informacion={informacion}></Encontrado>;
  } else {
    return <NoEncontrado></NoEncontrado>;
  }
};

export default Card;
