import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Index = () => {
  return (
    <div className="error404">
      <h1>Error 404</h1>
      <img
        src="https://media.giphy.com/media/3o7bu0zqQXyQQqQq2U/giphy.gif"
        alt="error 404"
      />
      <p>
        <Link to="/">Volver al inicio</Link>
      </p>
    </div>
  );
};

export default Index;
