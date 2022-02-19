import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import {
  getEnviosPorUser,
  getCiudades,
  getDepartamentos,
  getCategorias,
} from "../../api/data";
import { useDispatch, useSelector } from "react-redux";
import * as typesReducer from "../../reducers/reducers";
import Loading from "../Loading";
import "./index.css";
const Index = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || password.trim() === "") {
      toast.error("Usuario y contraseña son requeridos.", {
        autoClose: 3000,
      });
      return;
    } else {
      const data = {
        usuario: name,
        password,
      };

      const response = await login(data);
      if (response.codigo === 200) {
        setLoading(true);
        dispatch({
          type: typesReducer.typesAuth.CARGAR_USUARIO,
          payload: response,
        });
        const envios = await getEnviosPorUser(response.apiKey, response.id);
        if (envios.codigo === 200) {
          dispatch({
            type: typesReducer.typesEnvios.CARGAR_ENVIOS,
            payload: envios.envios,
          });
        } else {
          toast.error(envios.mensaje);
        }
        const ciudades = await getCiudades(response.apiKey);

        if (ciudades.codigo === 200) {
          dispatch({
            type: typesReducer.typesCiudades.CARGAR_CIUDADES,
            payload: ciudades.ciudades,
          });
        } else {
          toast.error(ciudades.mensaje);
        }
        const departamentos = await getDepartamentos(response.apiKey);
        if (departamentos.codigo === 200) {
          dispatch({
            type: typesReducer.typesDepartamentos.CARGAR_DEPARTAMENTOS,
            payload: departamentos.departamentos,
          });
        } else {
          toast.error(departamentos.mensaje);
        }
        const categorias = await getCategorias(response.apiKey);
        if (categorias.codigo === 200) {
          dispatch({
            type: typesReducer.typesCategorias.CARGAR_CATEGORIAS,
            payload: categorias.categorias,
          });
        } else {
          toast.error(categorias.mensaje);
        }
        if (envios.envios.length > 0) {
          navigate("/lista-envios");
        } else {
          navigate("/");
        }
      } else {
        toast.error(response.mensaje, {
          autoClose: 3000,
        });
        setName("");
        setPassword("");
      }
      setLoading(false);
    }
  };
  return loading ? (
    <Loading texto="Iniciando sesión..." />
  ) : (
    <>
      <div className="login">
        <h1>Inicio de Sesión </h1>
        <form onSubmit={handleLogin}>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="usuario"
            placeholder="Nombre de Usuario"
            value={name}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button>Iniciar Sesión</button>
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default Index;
