import Footer from "./Footer/Footer";
import BtnWhatsApp from "./BtnWhatsApp/BtnWhatsApp";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
      <BtnWhatsApp />
    </>
  );
};

export default Layout;
