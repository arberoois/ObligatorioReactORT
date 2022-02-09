import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { register } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Index = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
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
      const response = await register(data);
      if (response.codigo === 200) {
        toast.success("Usuario creado exitosamente!", {
          autoClose: 3000,
        });
        navigate("/login");
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
      <div className="register">
        <h1>Registro </h1>
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
          <button onClick={handleRegister}>Registrarme</button>
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default Index;
