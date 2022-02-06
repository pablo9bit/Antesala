import React from "react";

const Cobro = ({medio}) => {
  return (
    <tr>
      <td>{medio.cuil}</td>
      <td>{medio.cbu}</td>
      <td>Mexico</td>
    </tr>
  );
};

export default Cobro;
