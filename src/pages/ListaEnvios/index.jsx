import React, { useState, useEffect } from "react";
import { getEnviosPorUser, eliminarEnvio } from "../../api/data";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Envio from "../../components/Envio";
import Loading from "../../components/Loading";
import Gasto from "../../components/Gasto";
import "./index.css";

const Index = () => {
  const departamentos = [
    {
      id: 3203,
      nombre: "Flores",
      id_pais: 235,
      codigo_pais: "UY",
      codigo_fips: 6,
      iso2: "FS",
      tipo: null,
      latitud: -33.5733753,
      longitud: -56.8945028,
      created_at: "2019-10-05 12:48:53",
      updated_at: "2021-12-03 16:31:43",
      bandera: 1,
      wikiDataId: "Q16578",
    },
    {
      id: 3204,
      nombre: "San José",
      id_pais: 235,
      codigo_pais: "UY",
      codigo_fips: 16,
      iso2: "SJ",
      tipo: null,
      latitud: 37.3492968,
      longitud: -121.9056049,
      created_at: "2019-10-05 12:48:53",
      updated_at: "2021-12-03 16:31:43",
      bandera: 1,
      wikiDataId: "Q16579",
    },
    {
      id: 3205,
      nombre: "Artigas",
      id_pais: 235,
      codigo_pais: "UY",
      codigo_fips: 1,
      iso2: "AR",
      tipo: null,
      latitud: -30.6175112,
      longitud: -56.9594559,
      created_at: "2019-10-05 12:48:53",
      updated_at: "2021-12-03 16:31:43",
      bandera: 1,
      wikiDataId: "Q16603",
    },
    {
      id: 3206,
      nombre: "Maldonado",
      id_pais: 235,
      codigo_pais: "UY",
      codigo_fips: 9,
      iso2: "MA",
      tipo: null,
      latitud: -34.5597932,
      longitud: -54.8628552,
      created_at: "2019-10-05 12:48:53",
      updated_at: "2021-12-03 16:31:43",
      bandera: 1,
      wikiDataId: "Q331196",
    },
    {
      id: 3207,
      nombre: "Rivera",
      id_pais: 235,
      codigo_pais: "UY",
      codigo_fips: 13,
      iso2: "RV",
      tipo: null,
      latitud: -31.4817421,
      longitud: -55.2435759,
      created_at: "2019-10-05 12:48:53",
      updated_at: "2021-12-03 16:31:43",
      bandera: 1,
      wikiDataId: "Q16609",
    },
  ];

  const cuidades = [
    {
      id: 129787,
      nombre: "Cardona",
      id_departamento: 3219,
      codigo_departamento: "SO",
      id_pais: 235,
      codigo_pais: "UY",
      latitud: -33.87049,
      longitud: -57.36954,
      created_at: "2019-10-05 17:37:12",
      updated_at: "2019-10-05 17:37:12",
      bandera: 1,
      wikiDataId: "Q247843",
    },
    {
      id: 129799,
      nombre: "Dolores",
      id_departamento: 3219,
      codigo_departamento: "SO",
      id_pais: 235,
      codigo_pais: "UY",
      latitud: -33.53009,
      longitud: -58.21701,
      created_at: "2019-10-05 17:37:12",
      updated_at: "2019-10-05 17:37:12",
      bandera: 1,
      wikiDataId: "Q546964",
    },
    {
      id: 129889,
      nombre: "Villa Constitución",
      id_departamento: 3220,
      codigo_departamento: "SA",
      id_pais: 235,
      codigo_pais: "UY",
      latitud: -31.06913,
      longitud: -57.84946,
      created_at: "2019-10-05 17:37:13",
      updated_at: "2020-05-01 11:23:27",
      bandera: 1,
      wikiDataId: "Q1128223",
    },
  ];

  const [listaEnvios, setListaEnvios] = useState([]);
  const [loading, setLoading] = useState({ estado: false, mensaje: "" });
  const { apiKey, id } = useSelector((state) => state.auth);
  const handleEliminar = async (idEnvio) => {
    setLoading({ estado: true, mensaje: "Eliminando envio..." });
    const eliminado = await eliminarEnvio({ idEnvio });
    if (eliminado.codigo === 200) {
      setListaEnvios(listaEnvios.filter((envio) => envio.id !== idEnvio));
      toast.success(`${eliminado.mensaje}, id del envío: ${eliminado.idEnvio}`);
    } else {
      toast.error(`${eliminado.mensaje}`);
    }
    setLoading({ estado: false, mensaje: "" });
  };

  const precioFinal = () =>
    listaEnvios.reduce(
      (previousValue, currentValue) => previousValue + currentValue.precio,
      0
    );
  useEffect(() => {
    const obtenerEnvios = async () => {
      setLoading({ estado: true, mensaje: "Cargando envios..." });
      const userId = id;
      const llamada = await getEnviosPorUser(apiKey, userId);
      if (llamada.codigo === 200) {
        setListaEnvios(llamada.envios);
      } else {
        toast.error(llamada.mensaje);
      }
      setLoading({ estado: false, mensaje: "" });
    };

    if (apiKey) obtenerEnvios();
  }, [apiKey, id]);

  return loading.estado ? (
    <Loading texto={loading.mensaje} />
  ) : (
    <>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Lista de Envíos
      </h1>
      <div className="lista-envios">
        {listaEnvios.length > 0
          ? listaEnvios.map((envio) => (
              <Envio
                key={envio.id}
                envio={envio}
                handleEliminar={handleEliminar}
              />
            ))
          : null}
      </div>
      <div>
        <Gasto precioFinal={precioFinal} />
      </div>
      <Toaster />
    </>
  );
};

export default Index;
