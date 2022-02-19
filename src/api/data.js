const baseURL = "https://envios.develotion.com/";
export const getDepartamentos = (apiKey) => {
  const get = fetch(baseURL + "departamentos.php", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
  })
    .then((res) => res.json())
    .then((result) => result)
    .catch((e) => e);
  return get;
};

export const getCiudades = (apiKey) => {
  const get = fetch(baseURL + `ciudades.php`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
  })
    .then((res) => res.json())
    .then((result) => result)
    .catch((e) => e);
  return get;
};

export const getCiudadesPorID = (apiKey, id) => {
  const get = fetch(baseURL + `ciudades.php?idDepartamento=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
  })
    .then((res) => res.json())
    .then((result) => result)
    .catch((e) => e);
  return get;
};

export const getEnviosPorUser = (apiKey, id) => {
  const get = fetch(baseURL + `envios.php?idUsuario=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
  })
    .then((res) => res.json())
    .then((result) => result)
    .catch((e) => e);
  return get;
};

export const crearEnvio = (apiKey, data) => {
  const post = fetch(baseURL + `envios.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => result)
    .catch((e) => e);
  return post;
};

export const eliminarEnvio = (apiKey, data) => {
  console.log(apiKey, data);
  const del = fetch(baseURL + `envios.php`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
    body: JSON.stringify({ idEnvio: data }),
  })
    .then((res) => res.json())
    .then((result) => result)
    .catch((e) => e);
  return del;
};

export const getCategorias = (apiKey) => {
  const get = fetch(baseURL + `categorias.php`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
  })
    .then((res) => res.json())
    .then((result) => result)
    .catch((e) => e);
  return get;
};
