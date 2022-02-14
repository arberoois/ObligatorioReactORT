import React from 'react'

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
            wikiDataId: "Q16578"
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
            wikiDataId: "Q16579"
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
            wikiDataId: "Q16603"
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
            wikiDataId: "Q331196"
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
            wikiDataId: "Q16609"
        }
    ]

    return (
        <div>
            <h1>Top 5 de Departamentos con más envíos</h1>
            <ul>
                {departamentos.map((departamento) => <li> {departamento.id} </li>)}
            </ul>
        </div>
    )
}

export default Index
