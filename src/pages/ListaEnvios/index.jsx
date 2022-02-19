import React, { useState } from "react";
import { eliminarEnvio } from "../../api/data";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import * as typesReducer from "../../reducers/reducers";
import Envio from "../../components/Envio";
import Loading from "../../components/Loading";
import Gasto from "../../components/Gasto";
import "./index.css";

const Index = () => {
  const dispatch = useDispatch();
  const envios = useSelector((state) => state.envios);
  const { apiKey } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState({ estado: false, mensaje: "" });
  const handleEliminar = async (idEnvio) => {
    setLoading({ estado: true, mensaje: "Eliminando envio..." });
    const eliminado = await eliminarEnvio(apiKey, idEnvio);
    if (eliminado.codigo === 200) {
      dispatch({
        type: typesReducer.typesEnvios.ELIMINAR_ENVIO,
        payload: idEnvio,
      });
      toast.success(`${eliminado.mensaje}, id del envío: ${eliminado.idEnvio}`);
    } else {
      toast.error(`${eliminado.mensaje}`);
    }
    setLoading({ estado: false, mensaje: "" });
  };

  const precioFinal = () =>
    envios.reduce(
      (previousValue, currentValue) => previousValue + currentValue.precio,
      0
    );

  return loading.estado ? (
    <Loading texto={loading.mensaje} />
  ) : (
    <>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Lista de Envíos
      </h1>
      <div className="lista-envios">
        {envios.length > 0
          ? envios.map((envio) => (
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
