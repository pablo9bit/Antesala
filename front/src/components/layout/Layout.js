import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "@emotion/styled";

const ContenedorForm = styled.div`
  @media (min-width: 800px) {
    width: 95%;
    margin: auto;
    min-height: 600px;
  }
`;

const Layout = ({ children }) => {

  const mostrarEntorno = ()=>{
    if(process.env.REACT_APP_URL_BASE_API_MODE === "DEVELOPMENT" ){
      return "Entorno: DEVELOPMENT"
    }else{
      return ""
    }
  }
  return (
    <>
      <Header />
      <div className="container-fluid">
       <i><b>{mostrarEntorno()}</b></i>
        <ContenedorForm>{children}</ContenedorForm>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
