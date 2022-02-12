import React, { useState, useEffect } from "react";
import { getEnviosPorUser, eliminarEnvio } from "../../api/data";
import toast, { Toaster } from "react-hot-toast";
import Envio from "../../components/Envio";
import Loading from "../../components/Loading";
import "./index.css";
const Index = () => {
  const [listaEnvios, setListaEnvios] = useState([]);
  const [loading, setLoading] = useState({ estado: false, mensaje: "" });
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

  useEffect(() => {
    const obtenerEnvios = async () => {
      setLoading({ estado: true, mensaje: "Cargando envios..." });
      const llamada = await getEnviosPorUser(localStorage.getItem("userid"));
      console.log(llamada);
      if (llamada.codigo === 200) {
        setListaEnvios(llamada.envios);
      } else {
        toast.error("Error al cargar la lista de envíos");
      }
      setLoading({ estado: false, mensaje: "" });
    };
    obtenerEnvios();
  }, []);

  return loading.estado ? (
    <Loading texto={loading.mensaje} />
  ) : (
    <>
      <div className="lista-envios">
        {listaEnvios.length > 0 ? (
          listaEnvios.map((envio) => (
            <Envio
              key={envio.id}
              envio={envio}
              handleEliminar={handleEliminar}
            />
          ))
        ) : (
          <p>El usuario no tiene envíos</p>
        )}
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default Index;
