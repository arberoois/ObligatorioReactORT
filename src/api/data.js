const baseURL = "https://envios.develotion.com/"

export const getDepartamentos = () => {
    const get = fetch(baseURL + 'departamentos.php', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "apikey": localStorage.getItem("apikey")
        },
    })
        .then(res => res.json)
        .then(result => result)
        .catch(e => e)
    return get
}

export const getCiudadesPorID = id => {
    const get = fetch(baseURL + `ciudades.php?idDepartamento=${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "apikey": localStorage.getItem("apikey")
        },
    })
        .then(res => res.json)
        .then(result => result)
        .catch(e => e)
    return get
}

export const getEnviosPorUser = id => {
    const get = fetch(baseURL + `envios.php?idUsuario=${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "apikey": localStorage.getItem("apikey")
        },
    })
        .then(res => res.json)
        .then(result => result)
        .catch(e => e)
    return get
}

export const crearEnvio = data => {
    const post = fetch(baseURL + `envios.php`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "apikey": localStorage.getItem("apikey")
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json)
        .then(result => result)
        .catch(e => e)
    return post
}

export const eliminarEnvio = data => {
    const del = fetch(baseURL + `envios.php`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "apikey": localStorage.getItem("apikey")
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json)
        .then(result => result)
        .catch(e => e)
    return del
}

export const getCategorias = () => {
    const get = fetch(baseURL + `categorias.php`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "apikey": localStorage.getItem("apikey")
        },
    })
        .then(res => res.json)
        .then(result => result)
        .catch(e => e)
    return get
}

