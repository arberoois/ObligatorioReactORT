import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import "./index.css";

const Index = () => {
  const categorias = useSelector((state) => state.categorias);
  const envios = useSelector((state) => state.envios);
  const categoriasOptions = categorias.map((categoria) => categoria.nombre);
  const categoriasData = categorias.map((categoria) => {
    const enviosCategoria = envios.filter(
      (envio) => envio.id_categoria === categoria.id
    );
    return enviosCategoria.length;
  });

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: categoriasOptions,
    },
  };

  const series = [
    {
      name: "series-1",
      data: categoriasData,
    },
  ];

  return (
    <div className="grafico-categorias">
      <h1>Categorías</h1>
      <p>Gráfico envíos por categorías. </p>
      <Chart type="bar" width="600" series={series} options={options} />
    </div>
  );
};

export default Index;
