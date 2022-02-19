import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Index = () => {
  return (
    <div className="error404">
      <h1>Error</h1>
      <p>Debes estar registrado para acceder a esta sección</p>
      <Link to="/register">Registrarme</Link>
    </div>
  );
};

export default Index;
