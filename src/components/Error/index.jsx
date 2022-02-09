import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Index = () => {
  return (
    <div className="error404">
      <h1>Error 404</h1>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};

export default Index;
