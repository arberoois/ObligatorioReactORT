import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Index = ({ precioFinal }) => {
  const precio = precioFinal();
  return (
    <div className="gasto">
      {precio > 0 ? (
        <>
          <p>Precio total: ${precio} </p>
          <span>Es el precio total de todos tus envíos.</span>
        </>
      ) : (
        <>
          <p>No has hecho envíos, ¿Qué esperás para hacer uno?</p>
          <Link to="/">Click Aquí</Link>
        </>
      )}
    </div>
  );
};

export default Index;
