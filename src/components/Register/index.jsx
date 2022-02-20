import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { register } from "../../api/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";
const Index = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { apiKey } = useSelector((state) => state.auth);
  const handleRegister = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || password.trim() === "") {
      toast.error("Usuario y contraseña son requeridos.", {
        duration: 5000,
      });
      return;
    } else {
      try {
        const data = {
          usuario: name,
          password,
        };
        const response = await register(data);
        if (response.codigo === 200) {
          toast.success("Usuario creado exitosamente!", {
            duration: 5000,
          });
          navigate("/login");
        } else {
          toast.error(response.mensaje, {
            duration: 5000,
          });
          setName("");
          setPassword("");
        }
      } catch (error) {
        toast.error(error);
      }
    }
  };

  return apiKey ? (
    <Navigate to="/" />
  ) : (
    <>
      <div className="register">
        <h1>Registro </h1>
        <form onSubmit={handleRegister}>
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
          <button>Registrarme</button>
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default Index;
