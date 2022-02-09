import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Index = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(name, password);
    if (name.trim() === "" || password.trim() === "") {
      toast.error("Usuario y contraseña son requeridos.", {
        autoClose: 3000,
      });
      return;
    } else {
      const data = {
        usuario: name,
        password,
      };
      const response = await login(data);
      if (response.codigo === 200) {
        toast.success("Bienvenido!", {
          autoClose: 3000,
        });
        localStorage.setItem("apikey", response.apiKey);
        navigate("/");
        window.location.reload();
      } else {
        toast.error(response.mensaje, {
          autoClose: 3000,
        });
        setName("");
        setPassword("");
      }
    }
  };
  return (
    <>
      <div className="login">
        <h1>Inicio de Sesión </h1>
        <form>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="usuario"
            placeholder="Nombre de Usuario"
            value={name}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={handleLogin}>Iniciar Sesión</button>
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default Index;
