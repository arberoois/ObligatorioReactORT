import React from "react";
import "./index.css";
import Logo from "../../assets/travelLogo.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo Agencia" />
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/">Agencias</Link>
          </li>
          <li>
            <Link to="/">Viajes</Link>
          </li>
        </ul>
      </nav>
      <div className="actions">
        <Link to="/register">Registro</Link>
        <Link to="/login">Iniciar Sesión</Link>
        <button>Cerrar Sesión</button>
      </div>
    </header>
  );
};

export default Index;
