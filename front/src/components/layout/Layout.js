import Header from "./Header";
import Footer from "./Footer/Footer";

/* const ContenedorForm = styled.div`
  @media (min-width: 800px) {
    width: 95%;
    margin: auto;
    min-height: 600px;
  }
`; */

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
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
