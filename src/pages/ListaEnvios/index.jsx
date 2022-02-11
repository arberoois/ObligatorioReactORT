import React, { useState, useEffect } from 'react'
import { getEnviosPorUser, eliminarEnvio } from "../../api/data"
import toast, { Toaster } from 'react-hot-toast';
import Envio from '../../components/Envio'

const Index = () => {
    const [listaEnvios, setListaEnvios] = useState([])

    const handleEliminar = async (idEnvio) => {
        const eliminado = await eliminarEnvio({ idEnvio })
        console.log('Eliminado:', eliminado)
        if (eliminado.codigo === 200) {
            setListaEnvios(listaEnvios.filter(envio => envio.id !== idEnvio))
            toast.success(`${eliminado.mensaje}, id del envío: ${eliminado.idEnvio}`)
        } else {
            toast.error(`${eliminado.mensaje}`)
        }
    }

    useEffect(() => {
        const obtenerEnvios = async () => {
            const llamada = await getEnviosPorUser(localStorage.getItem("userid"))
            console.log('Llamada', llamada)
            if (llamada.codigo === 200) {
                setListaEnvios(llamada.envios)
            } else {
                toast.error("Error al cargar la lista de envíos")
            }
        }
        obtenerEnvios()
    }, [])

    return (
        <>
            <div>Index</div>
            <ul>
                {listaEnvios.length > 0 ? listaEnvios.map((envio) => <Envio key={envio.id} envio={envio} handleEliminar={handleEliminar} />) : <p>El usuario no tiene envíos</p>}
            </ul>
            <Toaster></Toaster>
        </>
    )
}

export default Index