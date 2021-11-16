import ReactExport from "react-export-excel-fixed-xlsx";

const ExcelExport = ({ data }) => {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  /* 
  nombre: "",
    apellido: "",
    cuil: "",
    matricula: "",
    email: "",
    estado: "",
    alias: "",
    telefono: "",
    tipo: "", */

  if (data.length === 0) return <></>;

  return (
    <div className="row" style={{width:"100px"}}>
      <ExcelFile
        filename="Usuarios"
        element={
          <button className="btn btn-block btn-success">Download Excel</button>
        }
      >
        <ExcelSheet data={data} name="Usuarios">
          <ExcelColumn label="Nombre" value="nombre" />
          <ExcelColumn label="Apellido" value="apellido" />
          <ExcelColumn label="Cuil" value="cuil" />
          <ExcelColumn label="Alias" value="alias" />
          <ExcelColumn label="Email" value="email" />
          <ExcelColumn label="Telefono" value="telefono" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
};

export default ExcelExport;
