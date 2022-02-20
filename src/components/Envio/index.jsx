import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
const Index = ({ envio, handleEliminar }) => {
  const ciudades = useSelector((state) => state.ciudades);
  const { nombre: nombreCiudadOrigen } = ciudades.find(
    (ciudad) => ciudad.id === envio.ciudad_origen
  );
  const { nombre: nombreCiudadDestino } = ciudades.find(
    (ciudad) => ciudad.id === envio.ciudad_destino
  );
  return (
    <div className="envio">
      <ul>
        <li>
          <span>Ciudad de origen: </span>
          <span> {nombreCiudadOrigen}</span>
        </li>
        <li>
          <span>Ciudad de destino: </span>
          <span> {nombreCiudadDestino}</span>
        </li>
        <li>
          <span>Costo: ${envio.precio}</span>
        </li>
        <li>
          <span>Distancia: {Math.round(envio.distancia, 2)} Kms</span>
        </li>
        <li>
          <button onClick={() => handleEliminar(envio.id)}>Eliminar</button>
        </li>
      </ul>
    </div>
  );
};

export default Index;
