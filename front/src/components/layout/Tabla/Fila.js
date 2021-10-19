
const Fila = ({ item, columnas, AccionesListar }) => {

  return (
    <tr>
      <td style={{width:"15%"}} >
          <AccionesListar item={item}/>
      </td>
      {columnas.map((columna) => (
          <td key={columna.nombre}>{item[columna.nombre]}</td>
        ))}
    </tr>
  );
};

export default Fila;
