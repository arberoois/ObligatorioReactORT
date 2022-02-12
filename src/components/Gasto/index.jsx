import React from 'react'

const Index = ({ precioFinal }) => {
    console.log(precioFinal)
    return (
        <div>Precio final: {precioFinal()} </div>
    )
}

export default Index
