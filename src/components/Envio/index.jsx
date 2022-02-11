import React from 'react'

const Index = ({ envio, handleEliminar }) => {
    return (
        <li>
            Ciudad origen:
            {envio.ciudad_origen}
            Ciudad destino:
            {envio.ciudad_destino}
            Distancia:
            {envio.distancia}
            Precio:
            {envio.precio}
            <button onClick={() => handleEliminar(envio.id)}>Eliminar</button>
        </li>
    )
}

export default Index
