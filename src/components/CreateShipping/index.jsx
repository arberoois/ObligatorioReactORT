import React, { useState } from 'react';
import { getDistance } from 'geolib';
import { crearEnvio } from "../../api/data"

const Index = () => {

    const [envio, setEnvio] = useState({})
    const handleEnvio = (e) => {
        e.preventDefault()

        // TODO: Hacer búsqueda de las ciudades seleccionadas para obtener ubicación
        // Hacer llamada a la API para obtener distancia
        // Hacer cálculo del precio total
        console.log('Enviando');
        const idUsuario = localStorage.getItem("userid")
        setEnvio({ ...envio, idUsuario })

        console.log(envio)
    }

    return <div>
        <h1>
            Ingresar un envío
        </h1>

        <form onSubmit={handleEnvio}>
            <div>
                <label>Ciudad de origen:</label>
                <select name="idCiudadOrigen" onChange={(e) => setEnvio({ ...envio, [e.target.name]: e.target.value })} >
                    <option value="" selected disabled hidden>Seleccionar...</option>
                    <option value="J">J</option>
                </select>
            </div>
            <div>
                <label>Ciudad de destino:</label>
                <select onChange={(e) => setEnvio({ ...envio, [e.target.name]: e.target.value })} name="idCiudadDestino">
                    <option value="" selected disabled hidden>Seleccionar...</option>
                    <option value="N">N</option>
                </select>
            </div>
            <div>
                <label>Categoría:</label>
                <select onChange={(e) => setEnvio({ ...envio, [e.target.name]: e.target.value })} name="idCategoria">
                    <option value="" selected disabled hidden>Seleccionar...</option>
                    <option value="Q">Q</option>
                </select>
            </div>
            <div>
                <label>Peso del paquete:</label>
                <input onChange={(e) => setEnvio({ ...envio, [e.target.name]: e.target.value })} name="peso" type="number" placeholder='peso en kilogramos' />
            </div>
            <button>Enviar</button>
        </form>
    </div >;
};

export default Index;
