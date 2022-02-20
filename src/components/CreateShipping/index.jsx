/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { getDistance } from "geolib";
import { crearEnvio } from "../../api/data";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as typesReducer from "../../reducers/reducers";
import "./index.css";
const Index = () => {
  const [envio, setEnvio] = useState({});
  const [departamentoOrigen, setDepartamentoOrigen] = useState("");
  const [departamentoDestino, setDepartamentoDestino] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { apiKey, id } = useSelector((state) => state.auth);
  const ciudades = useSelector((state) => state.ciudades);
  const departamentos = useSelector((state) => state.departamentos);
  const categorias = useSelector((state) => state.categorias);
  const calcularCosto = (p, d) => {
    let prec = 50;
    // Hacer cálculo del precio total
    // Consultar profe que se hace si pesa 300 gramos, se redondea a 1kg igual?
    const pesoRedond = Math.round(p);
    prec += pesoRedond * 10;
    const distRedond = Math.round(d / 100);
    prec += distRedond * 50;
    return prec;
  };

  const handleEnvio = async (e) => {
    e.preventDefault();

    if (
      !envio.idCiudadOrigen ||
      !envio.idCiudadDestino ||
      !envio.idCategoria ||
      !envio.peso
    ) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (envio.peso < 0 || envio.peso > 1000) {
      toast.error("El peso no puede ser negativo ni mayor a 1000kg");
      return;
    }

    try {
      const ciudadOrigen = ciudades.find((c) => c.id == envio.idCiudadOrigen);
      const ciudadDestino = ciudades.find((c) => c.id == envio.idCiudadDestino);
      const distancia =
        getDistance(
          { latitude: ciudadOrigen.latitud, longitude: ciudadOrigen.longitud },
          { latitude: ciudadDestino.latitud, longitude: ciudadDestino.longitud }
        ) / 1000;

      const precio = calcularCosto(envio.peso, distancia);

      const envioFinal = {
        ...envio,
        distancia,
        precio,
        idUsuario: id,
      };
      envioFinal.idCategoria = Number(envioFinal.idCategoria);
      envioFinal.idCiudadDestino = Number(envioFinal.idCiudadDestino);
      envioFinal.idCiudadOrigen = Number(envioFinal.idCiudadOrigen);
      envioFinal.peso = Number(envioFinal.peso);
      const envioCreado = await crearEnvio(apiKey, envioFinal);
      if (envioCreado.codigo === 200) {
        const envioDispatch = {
          id: envioCreado.id,
          ciudad_origen: envioFinal.idCiudadOrigen,
          ciudad_destino: envioFinal.idCiudadDestino,
          peso: envioFinal.peso,
          distancia: envioFinal.distancia,
          precio: envioFinal.precio,
          id_categoria: envioFinal.idCategoria,
          id_usuario: envioFinal.idUsuario,
        };
        dispatch({
          type: typesReducer.typesEnvios.AGREGAR_ENVIO,
          payload: envioDispatch,
        });
        toast.success(
          `${envioCreado.mensaje}, número del envío: ${envioCreado.idEnvio}`
        );
        navigate("/lista-envios");
      } else {
        toast.error(`${envioCreado.mensaje}`);
      }
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <>
      <h1 style={{ margin: "40px", textAlign: "center" }}>Ingresar un envío</h1>
      <div className="create-shipping">
        <form>
          <div className="left">
            <label>Departamento Origen: </label>
            <select
              name="departamentoOrigen"
              onChange={(e) => setDepartamentoOrigen(e.target.value)}
            >
              <option value="x" disabled selected>
                -Seleccionar Departamento-
              </option>
              ;
              {departamentos.map((departamento) => {
                return (
                  <option key={departamento.id} value={departamento.id}>
                    {departamento.nombre}
                  </option>
                );
              })}
            </select>
            <label>Ciudad de origen:</label>
            <select
              onChange={(e) =>
                setEnvio({ ...envio, [e.target.name]: e.target.value })
              }
              name="idCiudadOrigen"
              disabled={!departamentoOrigen}
            >
              <option selected disabled>
                -Seleccionar Ciudad-
              </option>
              {departamentoOrigen &&
                ciudades
                  .filter(
                    (ciudad) => ciudad.id_departamento == departamentoOrigen
                  )
                  .map((ciudad) => {
                    return (
                      <option key={ciudad.id} value={ciudad.id}>
                        {ciudad.nombre}
                      </option>
                    );
                  })}
            </select>

            <label>Categoría:</label>
            <select
              onChange={(e) =>
                setEnvio({ ...envio, [e.target.name]: e.target.value })
              }
              name="idCategoria"
            >
              <option selected disabled>
                Seleccionar...
              </option>
              {categorias.length > 0 &&
                categorias.map((categoria) => {
                  return (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nombre}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="right">
            <label>Departamento Destino: </label>
            <select
              name="departamentoDestino"
              onChange={(e) => setDepartamentoDestino(e.target.value)}
            >
              <option value="x" disabled selected>
                -Seleccionar Departamento-
              </option>
              ;
              {departamentos.map((departamento) => {
                return (
                  <option key={departamento.id} value={departamento.id}>
                    {departamento.nombre}
                  </option>
                );
              })}
            </select>
            <label>Ciudad de destino:</label>
            <select
              disabled={!departamentoDestino}
              onChange={(e) =>
                setEnvio({ ...envio, [e.target.name]: e.target.value })
              }
              name="idCiudadDestino"
            >
              <option selected disabled>
                -Seleccionar Ciudad-
              </option>
              {departamentoDestino &&
                ciudades
                  .filter(
                    (ciudad) => ciudad.id_departamento == departamentoDestino
                  )
                  .map((ciudad) => {
                    return (
                      <option key={ciudad.id} value={ciudad.id}>
                        {ciudad.nombre}
                      </option>
                    );
                  })}
            </select>

            <label>Peso del paquete:</label>
            <input
              onChange={(e) =>
                setEnvio({ ...envio, [e.target.name]: e.target.value })
              }
              name="peso"
              type="number"
              placeholder="peso en kilogramos"
            />
          </div>
          <button onClick={handleEnvio}>Crear Envio</button>
        </form>
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default Index;
