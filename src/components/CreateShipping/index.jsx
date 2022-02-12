import React, { useState } from "react";
import { getDistance } from "geolib";
import { crearEnvio } from "../../api/data";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Index = () => {
  const [envio, setEnvio] = useState({
    peso: 0,
    idCategoria: "Z",
    idCiudadOrigen: "X",
    idCiudadDestino: "Y",
  });
  const navigate = useNavigate();

  const calcularCosto = (p, d) => {
    let prec = 50;
    // Hacer cálculo del precio total
    // Consultar profe que se hace si pesa 300 gramos, se redondea a 1kg igual?
    const pesoRedond = Math.round(p);
    prec += pesoRedond * 10;
    const distRedond = Math.round(d / 100);
    console.log("Dist redond:", distRedond);
    prec += distRedond * 50;
    return prec;
  };

  const handleEnvio = async (e) => {
    e.preventDefault();
    // TODO: Hacer búsqueda de las ciudades seleccionadas para obtener ubicación
    // Hacer llamada a la API para obtener distancia, la API devuelve metros
    const cO = {
      id: 129797,
      nombre: "Delta del Tigre",
      id_departamento: 3204,
      codigo_departamento: "SJ",
      id_pais: 235,
      codigo_pais: "UY",
      latitud: -34.76487999999999800593286636285483837127685546875,
      longitud: -56.36449999999999960209606797434389591217041015625,
      created_at: "2019-10-05 17:37:12",
      updated_at: "2019-10-05 17:37:12",
      bandera: 1,
      wikiDataId: "Q1184943",
    };
    const cD = {
      id: 129823,
      nombre: "Libertad",
      id_departamento: 3204,
      codigo_departamento: "SJ",
      id_pais: 235,
      codigo_pais: "UY",
      latitud: -34.6345900000000028740032576024532318115234375,
      longitud: -56.6173900000000003274180926382541656494140625,
      created_at: "2019-10-05 17:37:13",
      updated_at: "2019-10-05 17:37:13",
      bandera: 1,
      wikiDataId: "Q946150",
    };
    if (
      envio.idCiudadOrigen === "X" ||
      envio.idCiudadDestino === "Y" ||
      envio.idCategoria === "Z" ||
      envio.peso <= 0
    ) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    const distancia =
      getDistance(
        { latitude: cO.latitud, longitude: cO.longitud },
        { latitude: cD.latitud, longitude: cD.longitud }
      ) / 100;
    const precio = calcularCosto(envio.peso, distancia);
    const idUsuario = localStorage.getItem("userid");
    setEnvio({ ...envio, distancia, precio, idUsuario });

    const objetito = {
      ...envio,
      distancia: distancia,
      precio,
      idUsuario,
    };
    console.log("Objetito", objetito);

    const envioCreado = await crearEnvio(objetito);
    if (envioCreado.codigo === 200) {
      toast.success(
        `${envioCreado.mensaje}, número del envío: ${envioCreado.idEnvio}`
      );
      navigate("/lista-envios");
    } else {
      toast.error(`${envioCreado.mensaje}`);
    }
    console.log("Envio creado:", envioCreado);
  };

  return (
    <>
      <h1 style={{ margin: "40px", textAlign: "center" }}>Ingresar un envío</h1>
      <div className="create-shipping">
        <form>
          <div>
            <label>Ciudad de origen:</label>
            <select
              onChange={(e) =>
                setEnvio({ ...envio, [e.target.name]: e.target.value })
              }
              name="idCiudadOrigen"
            >
              <option value="X" selected disabled hidden>
                Seleccionar...
              </option>
              <option value="J">J</option>
            </select>
          </div>
          <div>
            <label>Ciudad de destino:</label>
            <select
              onChange={(e) =>
                setEnvio({ ...envio, [e.target.name]: e.target.value })
              }
              name="idCiudadDestino"
            >
              <option value="Y" selected disabled hidden>
                Seleccionar...
              </option>
              <option value="N">N</option>
            </select>
          </div>
          <div>
            <label>Categoría:</label>
            <select
              onChange={(e) =>
                setEnvio({ ...envio, [e.target.name]: e.target.value })
              }
              name="idCategoria"
            >
              <option value="Z" selected disabled hidden>
                Seleccionar...
              </option>
              <option value="Q">Q</option>
            </select>
          </div>
          <div>
            <label>Peso del paquete:</label>
            <input
              onChange={(e) =>
                setEnvio({ ...envio, [e.target.name]: e.target.value })
              }
              name="peso"
              type="number"
              placeholder="peso en kilogramos"
            />
          </div>
          <button onClick={handleEnvio}>Enviar</button>
        </form>
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default Index;
