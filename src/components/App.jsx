import React from "react";

const app = () => {
  const ponerFilas = () => [
    <tr>
      <td>Sebastian</td>
      <td>cgmail</td>
      <td>sebastian.com</td>
    </tr>,
    <tr>
      <td>camilo</td>
      <td>cgmail</td>
      <td>camilo.com</td>
    </tr>,
  ];

  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {ponerFilas()}
        </tbody>
      </table>
    </div>
  );
};

export default app;
