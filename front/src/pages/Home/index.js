import React from "react";
import Actualidad from "./Sections/Actualidad/Actualidad";
import Apoyo from "./Sections/Apoyo/Apoyo";
import Calendar from "./Sections/Calendar/Calendar";
import Eventos from "./Sections/Eventos/Eventos";
import Header from "./Sections/Header/Header";
import News from "./Sections/News/News";
import Suscriptions from "./Sections/Suscriptions/Suscriptions";

const index = () => {
  return (
    <>
      <Header />
      <Calendar />
      <Eventos />
      <div style={{ marginTop: "300px" }}></div>
      <Actualidad />
      <News />
      <Apoyo />
      <Suscriptions />
    </>
  );
};

export default index;
