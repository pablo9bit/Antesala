import React from "react";
import styled from "@emotion/styled";
import { LiSinPunto } from "../../../layout/Estilos";
import { Link } from "../../../layout/Imports";
import "lazysizes";

const ItemCatalogo = ({ item, mostrar }) => {
  const BotonRedondo = styled.button`
    background-color: ${item.idestadoSubasta === "5" ? "gray" : "#002653"};
    color: white;
    border-color: #002653;
    border-radius: 20px;

    :hover {
      background-color: #c54436;
    }
  `;

  const DivCard = styled.div`
    margin-right: 20px;
    width: 270px;
    margin-bottom: 10px;
    background-color: ${item.idestadoSubasta === "5" ? "lightgray" : ""};
  `;

  const Divimagen = styled.div`
    background-image: url(${process.env.REACT_APP_URL_BASE_API_IMAGENES}${item.archivo});
    width: 270px;
    height: 300px;
    background-image: no-repeat;
    background-image: fixed;
    background-image: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: ${item.idestadoSubasta === "5" ? 0.2 : 1};
  `;

  const etiquetaBoton = (objeto) => {
    if (objeto.idestadoSubasta === null) return "Ver";
    if (objeto.idestadoSubasta === "1") return "Proximamente";
    if (objeto.idestadoSubasta === "2") return "Ofertar";
    if (objeto.idestadoSubasta === "3") return "Resultado";
    if (objeto.idestadoSubasta === "4") return "Ver";
    if (objeto.idestadoSubasta === "5") return "Vendida";
    if (objeto.idestadoSubasta === "6") return "Trastienda";
  };


  return (
    <LiSinPunto>
      <DivCard className="card">
        <Link
          to={`/subasta/${item.id}`}
          onClick={() => {
            mostrar(item.id);
          }}
        >
          <Divimagen></Divimagen>
        </Link>
        <div className="card-body">
          <h6 className="card-title">{item.titulo}</h6>
          <div className="card-text">
           {/*  <p>$ {valor()}</p> */}
          </div>
          <div className="justify-content-center">
            <BotonRedondo
              type="button"
              onClick={() => {
                mostrar(item.id);
              }}
            >
              <i className="fa fa-money"></i> {etiquetaBoton(item)}
            </BotonRedondo>
          </div>
        </div>
      </DivCard>
    </LiSinPunto>
  );
};

export default ItemCatalogo;
