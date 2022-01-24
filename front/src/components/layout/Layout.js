import Footer from "./Footer/Footer";
import BtnWhatsApp from "./BtnWhatsApp/BtnWhatsApp";
import Navbar from "./../../pages/Home/Sections/Header/Navbar";
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
