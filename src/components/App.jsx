import React from "react";

const app = () => {
  const usersData = [
    { name: "Camilo", email: "j.galvez@site.com", site: "camilo.tech.com" },
    {
      name: "Sebastian",
      email: "juan.bueno@usc.co",
      site: "sebastian.tech.com",
    },
    { name: "Lorena", email: "lorena@yaho.es", site: "lorena.da.com" },
  ];

  const ponerFilas = () => {
    return usersData.map((item, index) => (
        <tr key={item.name + item.email}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.site}</td>
        </tr>
    ));
  };

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
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

export default app;
