import styled from "@emotion/styled";

export const BotonEditar = styled.button`
  background-color: #fe2e64;
  color: white !important;
  border-radius: 10px;
  :hover {
    background-color: darkred;
    color: white !important;
  }
`;

export const BuscadorDiv = styled.div`
width: 200px;

@media (max-width: 600px) {
  padding-left: 50px;
  width: 90% !important;
`;

export const BodyTabla = styled.tbody`
  background-color: "white";
`;

export const TituloTabla = styled.thead`
  background-color: #f9f9f9 !important;
  font-size: 13px !important;
  font-weight: normal !important;
  color: #5e5e5e;
`;

export const BotonTransparente = styled.button`
  background-color: #f9f9f9 !important;
  font-size: 16px !important;
  font-weight: bold !important;
  color: #5e5e5e;
  border: none;
  outline: none;
  text-decoration: none;
  display: inline-block;
`;

export const Imagen = styled.img`
margin: 20px;
`;

export const ImagenResponsive = styled.img`
width: 300px;

@media (max-width: 600px) {
  width: 90%;
`;

export const DivBorder = styled.div`
border: 1px solid #C00;
padding: 5px;
`;

export const LiSinPunto = styled.li`
list-style:none;
`;

export const Cursiva = styled.span`
  font-style:italic;
`;


export const BotonCancelar = styled.button`
background-color: #d8d8d8;
border-color: #d8d8d8;

:hover {
  background-color: #c54436;
}
`;


 // metalarte
export const Boton = styled.button`
  background-color: #cc621c;
  color: white;
  border-color: #cc621c;

  :hover {
    background-color: #c54436;
  }
`;


export const BotonRedondo = styled.button`
  background-color: #002653;
  color: white;
  border-color: #002653;
  border-radius: 20px;

  :hover {
    background-color: #c54436;
  }
`;

export const DivBuscador = styled.div`
  margin-top: 10px;
  padding-top: 5px;
  padding-bottom : 10px;
  height: 150px !important;
`;

export const DivformBuscador = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  margin: 0 auto;
  float: none;
`;

export const DivCard = styled.div`
  margin-right: 20px;
  width: 270px;
  margin-bottom: 10px;

`;

export const BotonAceptar = styled.button`
  background-color: #002653;
  color: white;
  border-color: #002653;

  :hover {
    background-color: #c54436;
  }
`;

export const BotonQuitar = styled.button`
  border: none;
  background-color: lightgray;
  color: red;
  border-radius: 20px;
  margin: 5px;
`;