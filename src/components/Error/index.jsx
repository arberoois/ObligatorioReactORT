import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Index = () => {
  return (
    <div className="error404">
      <p>Error 404</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};

export default Index;
