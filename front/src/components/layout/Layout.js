import Header from "./Headers/Header";
import Footer from "./Footer/Footer";
import BtnWhatsApp from "./BtnWhatsApp/BtnWhatsApp";

const Layout = ({ children }) => {
  const mostrarEntorno = () => {
    if (process.env.REACT_APP_URL_BASE_API_MODE === "DEVELOPMENT") {
      return "Entorno: DEVELOPMENT";
    } else {
      return "";
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid" style={{ minHeight: "600px" }}>
        <i>
          <b>{mostrarEntorno()}</b>
        </i>
        <div>{children}</div>
      </div>
      <Footer />
      <BtnWhatsApp />
    </>
  );
};

export default Layout;
