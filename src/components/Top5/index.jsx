import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
const Index = () => {
  const departamentos = useSelector((state) => state.departamentos);
  const envios = useSelector((state) => state.envios);
  const ciudades = useSelector((state) => state.ciudades);

  const obtenerTop5 = () => {
    /// esta funcion devuelve la cantidad de envios por ciudad
    const ciudadesCantidad = ciudades.map((ciudad) => {
      const enviosCiudad = envios.filter(
        (envio) => envio.ciudad_destino === ciudad.id
      );
      const cantidad = enviosCiudad.length;

      return {
        nombre: ciudad.nombre,
        cantidad: cantidad,
        idDepartamento: ciudad.id_departamento,
      };
    });
    // esta funcion filtra la anterior para quedarse solamente con las ciudades que tienen envios
    const ciudadesConEnvio = ciudadesCantidad.filter(
      (ciudad) => ciudad.cantidad > 0
    );

    // Esta funcion devulve un array con los nombres de los departamentos y su cantidades
    const departamentosCantidad = ciudadesConEnvio.map((ciudad) => {
      const departamento = departamentos.find(
        (departamento) => departamento.id === ciudad.idDepartamento
      );
      return {
        nombre: departamento.nombre,
        cantidad: ciudad.cantidad,
      };
    });

    // Esta funcion devuelve un array sumalizando las cantidades de los departamentos
    const departamentosConEnvio = departamentosCantidad.reduce(
      (departamentos, departamento) => {
        const departamentoExistente = departamentos.find(
          (departamentoExistente) =>
            departamentoExistente.nombre === departamento.nombre
        );
        if (departamentoExistente) {
          departamentoExistente.cantidad += departamento.cantidad;
        } else {
          departamentos.push(departamento);
        }
        return departamentos;
      },
      []
    );
    // Esta funcion devuelve un array ordenado de mayor a menor cantidad de envios y topeados a 5
    const sort = departamentosConEnvio
      .sort((a, b) => b.cantidad - a.cantidad)
      .slice(0, 5);
    return sort;
  };

  const top5 = obtenerTop5();
  return (
    <div>
      <h1>Top 5 de Departamentos con más envíos</h1>
      <table>
        <thead>
          <tr>
            <th>Departamento</th>
            <th>Cantidad Envios s</th>
          </tr>
        </thead>
        <tbody>
          {top5.map((departamento, index) => (
            <tr key={index}>
              <td>{departamento.nombre}</td>
              <td>{departamento.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
