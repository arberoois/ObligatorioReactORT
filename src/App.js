import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Shipments from "./pages/Shipments";
import ListaEnvios from "./pages/ListaEnvios";
import Distancia from "./pages/Distancia";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";
import { useSelector } from "react-redux";
const App = () => {
  const navigate = useNavigate();
  const { apiKey } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!apiKey) {
      navigate("/login");
    }
  }, [navigate, apiKey]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Shipments />} />
        <Route path="/lista-envios" element={<ListaEnvios />} />
        <Route path="/distancia" element={<Distancia />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
