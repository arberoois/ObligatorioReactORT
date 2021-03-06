import React from "react";
import Top5 from "../../components/Top5";
import GrafCiudad from "../../components/GrafCiudad";
import GrafCategoria from "../../components/GrafCategoria";
import "./index.css";
const Index = () => {
  return (
    <div className="dashboard">
      <Top5 />
      <h1>Gráficas</h1>
      <div className="graficos">
        <GrafCiudad />
        <GrafCategoria />
      </div>
    </div>
  );
};

export default Index;
