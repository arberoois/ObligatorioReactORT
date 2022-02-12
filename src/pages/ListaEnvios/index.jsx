import React, { useState, useEffect } from "react";
import { getEnviosPorUser, eliminarEnvio } from "../../api/data";
import toast, { Toaster } from "react-hot-toast";
import Envio from "../../components/Envio";
import Loading from "../../components/Loading";
import Gasto from "../../components/Gasto";
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

    const precioFinal = () => listaEnvios.reduce((previousValue, currentValue) => previousValue + currentValue.precio, 0);

    useEffect(() => {
        const obtenerEnvios = async () => {
            setLoading({ estado: true, mensaje: "Cargando envios..." });
            const llamada = await getEnviosPorUser(localStorage.getItem("userid"));
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
                    // Tendríamos que darle estilo a este <p>
                    <p>El usuario no tiene envíos</p>
                )}
            </div>
            <div>
                <Gasto precioFinal={precioFinal} />
            </div>
            <Toaster></Toaster>
        </>
    );
};

export default Index;
