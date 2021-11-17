import ReactExport from "react-export-excel-fixed-xlsx";

const ExcelExport = ({ data }) => {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  

  if (data.length === 0) return <></>;

  return (
    <div className="row" style={{width:"100px"}}>
      <ExcelFile
        filename="Organizaciones"
        element={
          <button className="btn btn-block btn-success">Download Excel</button>
        }
      >
        <ExcelSheet data={data} name="Organizaciones">
          <ExcelColumn label="Nombre" value="nombre" />
          <ExcelColumn label="Razon Social" value="razon_social" />
          <ExcelColumn label="Ubicacion" value="ubicacion" />
          <ExcelColumn label="Email" value="email" />
          <ExcelColumn label="Telefono" value="telefono" />
          <ExcelColumn label="Estado" value="estado" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
};

export default ExcelExport;
