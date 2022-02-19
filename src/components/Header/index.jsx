import React from "react";
import "./index.css";
import Logo from "../../assets/travelLogo.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as typesReducer from "../../reducers/reducers";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { apiKey } = useSelector((state) => state.auth);
  const handleSignOff = () => {
    dispatch({
      type: typesReducer.typesEnvios.ELIMINAR_ENVIOS,
    });
    dispatch({
      type: typesReducer.typesAuth.ELIMINAR_USUARIO,
    });
    dispatch({
      type: typesReducer.typesCiudades.ELIMINAR_CIUDADES,
    });
    dispatch({
      type: typesReducer.typesDepartamentos.ELIMINAR_DEPARTAMENTOS,
    });
    dispatch({
      type: typesReducer.typesCategorias.ELIMINAR_CATEGORIAS,
    });
    navigate("/");
  };
  return (
    <header className="header">
      <img src={Logo} alt="Logo Agencia" />
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Crear Envío</Link>
          </li>
          <li>
            <Link to="/lista-envios">Lista de Envíos</Link>
          </li>
          <li>
            <Link to="/distancia">Calculo de distancias</Link>
          </li>
          <li>
            <Link to="/dashboard">Estadísticas</Link>
          </li>
          <li>
            <Link to="/login">L</Link>
          </li>
          <li>
            <Link to="/register">R</Link>
          </li>
          <li>
            <Link to="/asfasfas">xD</Link>
          </li>
        </ul>
      </nav>
      <div className="actions">
        {apiKey ? (
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
