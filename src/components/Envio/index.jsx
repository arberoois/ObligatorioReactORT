import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
const Index = ({ envio, handleEliminar }) => {
  console.log(envio, "el envio");
  const ciudades = useSelector((state) => state.ciudades);
  console.log(ciudades);
  const { nombre: nombreCiudadOrigen } = ciudades.find(
    (ciudad) => ciudad.id === envio.ciudad_origen
  );
  const { nombre: nombreCiudadDestino } = ciudades.find(
    (ciudad) => ciudad.id === envio.ciudad_destino
  );
  return (
    <div className="envio">
      <p>Ciudad origen: {nombreCiudadOrigen}</p>
      <p>Ciudad destino: {nombreCiudadDestino}</p>
      <p>Distancia: {envio.distancia} Km</p>
      <p>Precio: $ {envio.precio}</p>
      <button onClick={() => handleEliminar(envio.id)}>Eliminar</button>
    </div>
  );
};

export default Index;
