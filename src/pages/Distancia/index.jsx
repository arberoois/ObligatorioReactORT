import React, { useState } from "react";
import { getDistance } from "geolib";
import toast, { Toaster } from "react-hot-toast";
import "./index.css";

const Index = () => {
  const [distancia, setDistancia] = useState({
    idCiudadOrigen: "X",
    idCiudadDestino: "Y",
  });

  const handleDistancia = async (e) => {
    e.preventDefault();
    // TODO: Hacer búsqueda de las ciudades seleccionadas para obtener ubicación
    // Hacer llamada a la API para obtener distancia, la API devuelve metros
    const cO = {
      id: 129797,
      nombre: "Delta del Tigre",
      id_departamento: 3204,
      codigo_departamento: "SJ",
      id_pais: 235,
      codigo_pais: "UY",
      latitud: -34.76487999999999800593286636285483837127685546875,
      longitud: -56.36449999999999960209606797434389591217041015625,
      created_at: "2019-10-05 17:37:12",
      updated_at: "2019-10-05 17:37:12",
      bandera: 1,
      wikiDataId: "Q1184943",
    };
    const cD = {
      id: 129823,
      nombre: "Libertad",
      id_departamento: 3204,
      codigo_departamento: "SJ",
      id_pais: 235,
      codigo_pais: "UY",
      latitud: -34.6345900000000028740032576024532318115234375,
      longitud: -56.6173900000000003274180926382541656494140625,
      created_at: "2019-10-05 17:37:13",
      updated_at: "2019-10-05 17:37:13",
      bandera: 1,
      wikiDataId: "Q946150",
    };
    if (distancia.idCiudadOrigen === "X" || distancia.idCiudadDestino === "Y") {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    const distanciaCalculada =
      getDistance(
        { latitude: cO.latitud, longitude: cO.longitud },
        { latitude: cD.latitud, longitude: cD.longitud }
      ) / 100;
    toast.success(
      "La distancia entre las ciudades seleccionadas es de: " +
        distanciaCalculada +
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
            <label>Ciudad de origen:</label>
            <select
              onChange={(e) =>
                setDistancia({ ...distancia, [e.target.name]: e.target.value })
              }
              name="idCiudadOrigen"
            >
              <option value="X" selected disabled hidden>
                Seleccionar...
              </option>
              <option value="J">J</option>
            </select>
          </div>
          <div>
            <label>Ciudad de destino:</label>
            <select
              onChange={(e) =>
                setDistancia({ ...distancia, [e.target.name]: e.target.value })
              }
              name="idCiudadDestino"
            >
              <option value="Y" selected disabled hidden>
                Seleccionar...
              </option>
              <option value="N">N</option>
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