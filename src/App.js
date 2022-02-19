import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Shipments from "./pages/Shipments";
import ListaEnvios from "./pages/ListaEnvios";
import Distancia from "./pages/Distancia";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";
import ProtectedRoutes from "./ProtectedRoutes";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Shipments />} />
            <Route path="/lista-envios" element={<ListaEnvios />} />
            <Route path="/distancia" element={<Distancia />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </>
      </Routes>
    </div>
  );
};

export default App;
