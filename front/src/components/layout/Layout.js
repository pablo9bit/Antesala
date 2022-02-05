import Footer from "./Footer/Footer";
import BtnWhatsApp from "./BtnWhatsApp/BtnWhatsApp";
import Navbar from "./Headers/Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <BtnWhatsApp />
    </>
  );
};

export default Layout;
