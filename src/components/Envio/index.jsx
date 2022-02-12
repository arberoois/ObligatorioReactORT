import React from "react";
import "./index.css";
const Index = ({ envio, handleEliminar }) => {
  return (
    <div className="envio">
      <p>Ciudad origen: {envio.ciudad_origen}</p>
      <p>Ciudad destino: {envio.ciudad_destino}</p>
      <p>Distancia: {envio.distancia} Km</p>
      <p>Precio:${envio.precio}</p>
      <button onClick={() => handleEliminar(envio.id)}>Eliminar</button>
    </div>
  );
};

export default Index;
