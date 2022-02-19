import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import "./index.css";
const Index = () => {
  const envios = useSelector((state) => state.envios);
  const ciudades = useSelector((state) => state.ciudades);
  const ciudadesCantidad = ciudades.map((ciudad) => {
    const enviosCiudad = envios.filter(
      (envio) => envio.ciudad_destino === ciudad.id
    );
    const cantidad = enviosCiudad.length;
    return {
      nombre: ciudad.nombre,
      cantidad: cantidad,
    };
  });
  const ciudadesConEnvio = ciudadesCantidad.filter(
    (ciudad) => ciudad.cantidad > 0
  );
  const categoriesCiudades = ciudadesConEnvio.map((ciudad) => ciudad.nombre);
  const seriesCiudades = ciudadesConEnvio.map((ciudad) => ciudad.cantidad);

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: categoriesCiudades,
    },
  };

  const series = [
    {
      name: "series-1",
      data: seriesCiudades,
    },
  ];

  return (
    <div className="grafico-ciudad">
      <h1>Ciudades</h1>
      <p>Gráfico envíos por ciudades de destino. </p>
      <Chart type="bar" width="600" series={series} options={options} />
    </div>
  );
};

export default Index;
