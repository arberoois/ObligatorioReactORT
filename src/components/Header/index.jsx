import React from "react";
import "./index.css";
import Logo from "../../assets/travelLogo.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  const handleSignOff = () => {
    localStorage.removeItem("apikey");
    window.location.reload();
  };
  return (
    <header className="header">
      <img src={Logo} alt="Logo Agencia" />
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/lista-envios">Lista de Envíos</Link>
          </li>
          <li>
            <Link to="/distancia">Calculo de distancias</Link>
          </li>
        </ul>
      </nav>
      <div className="actions">
        {localStorage.getItem("apikey") ? (
          <button onClick={handleSignOff}>Cerrar Sesión</button>
        ) : (
          <>
            <Link to="/register">Registro</Link>
            <Link to="/login">Iniciar Sesión</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Index;
