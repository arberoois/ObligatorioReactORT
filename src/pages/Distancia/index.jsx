/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { getDistance } from "geolib";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import "./index.css";

const Index = () => {
  const [ciudadOrigen, setCiudadOrigen] = useState("");
  const [ciudadDestino, setCiudadDestino] = useState("");
  const [departamentoOrigen, setDepartamentoOrigen] = useState("");
  const [departamentoDestino, setDepartamentoDestino] = useState("");
  const ciudades = useSelector((state) => state.ciudades);
  const departamentos = useSelector((state) => state.departamentos);
  const handleDistancia = async (e) => {
    e.preventDefault();
    // TODO: Hacer búsqueda de las ciudades seleccionadas para obtener ubicación
    // Hacer llamada a la API para obtener distancia, la API devuelve metros
    if (!ciudadOrigen || !ciudadDestino) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    const cO = ciudades.find((c) => c.id == ciudadOrigen);
    const cD = ciudades.find((c) => c.id == ciudadDestino);
    const distanciaCalculada =
      getDistance(
        { latitude: cO.latitud, longitude: cO.longitud },
        { latitude: cD.latitud, longitude: cD.longitud }
      ) / 1000;
    toast.success(
      "La distancia entre las ciudades seleccionadas es de: " +
        Math.round(distanciaCalculada, 2) +
        " Km",
      {
        autoClose: 5000,
        style: {
          textAlign: "center",
        },
      }
    );
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Cálculo de distancia
      </h1>
      <div className="distance">
        <form>
          <div>
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
                  <option value={departamento.id}>{departamento.nombre}</option>
                );
              })}
            </select>
            <label>Ciudad de origen:</label>
            <select
              onChange={(e) => setCiudadOrigen(e.target.value)}
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
                    return <option value={ciudad.id}>{ciudad.nombre}</option>;
                  })}
            </select>
          </div>
          <hr />
          <div>
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
                  <option value={departamento.id}>{departamento.nombre}</option>
                );
              })}
            </select>
            <label>Ciudad de destino:</label>
            <select
              disabled={!departamentoDestino}
              onChange={(e) => setCiudadDestino(e.target.value)}
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
                    return <option value={ciudad.id}>{ciudad.nombre}</option>;
                  })}
            </select>
          </div>
          <button onClick={handleDistancia}>Calcular Distancia</button>
        </form>
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default Index;
