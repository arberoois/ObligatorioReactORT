import React from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const departamentos = useSelector((state) => state.departamentos);
  const envios = useSelector((state) => state.envios);
  console.log(envios);
  const top = [];
  return (
    <div>
      <h1>Top 5 de Departamentos con más envíos</h1>
      <ul>
        {departamentos.map((departamento) => (
          <li> {departamento.nombre} </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
