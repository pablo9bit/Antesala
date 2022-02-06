import React, { useState } from "react";
import {
  Input,
  BotoneraForm,
  Select,
  TextArea,
} from "../../../../layout/FormsElements";
import Cobro from "./Cobro";

const Cobros = ({ DatosForm, LeerForm }) => {
  const [NewMedio, setNewMedio] = useState({
    cbu: "",
    cuil: "",
    situacionFiscal: "",
    id: "",
    estado: "",
    accion: "",
  });
  const [soloLectura, setSoloLectura] = useState(false);
  const { cuil, cbu, situacionFiscal, id, estado, accion } = NewMedio;
  /* 
  'idusuario',
  'situacionFiscal',
  'CBU',
  'CUIL',
  'estado' */

  // 'Responsable Inscripto','IVA Exento','Monotributo'

  const onChange = (e) => {
    setNewMedio({
      ...NewMedio,
      [e.target.name]: e.target.value,
    });
  };

  const agregar = () => {
    LeerForm({
      ...DatosForm,
      MediosCobros: [...DatosForm.MediosCobros, NewMedio],
    });
  };

  return (
    <div>
      <table>
        <tr>
          <td>
            <Input
              key={"cuil"}
              sets={{
                label: "CUIT",
                type: "text",
                name: "cuil",
                placeholder: " ",
                valor: cuil,
                disabled: soloLectura,
              }}
              onChange={onChange}
            />
          </td>
          <td>
            <Input
              key={"cbu"}
              sets={{
                label: "CBU",
                type: "text",
                name: "cbu",
                placeholder: " ",
                valor: cbu,
                disabled: soloLectura,
              }}
              onChange={onChange}
            />
          </td>
          <td>
            <button onClick={() => agregar()} type="button">
              Agregar
            </button>
          </td>
        </tr>
      </table>
      <br />
      Lista de Medios de Cobro:
      <br />
      <table style={{ width: "100%" }}>
        <tr>
          <th>CUIT</th>
          <th>CBU</th>
          <th>Situación Fiscal</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
        {DatosForm.MediosCobros.map((item) => (
          <Cobro medio={item} />
        ))}
      </table>
    </div>
  );
};

export default Cobros;
