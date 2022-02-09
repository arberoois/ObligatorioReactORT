const baseURL = "https://envios.develotion.com/";

export const register = (data) => {
  const post = fetch(baseURL + "usuarios.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => result)
    .catch((e) => e);
  return post;
};

export const login = (data) => {
  const post = fetch(baseURL + "login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => result)
    .catch((e) => e);
  return post;
};
