import React from "react";
import 'lazysizes';



const ImgSlideTrap = ({ imagen, activo }) => {
  return (
    <>
      {activo ? (
        <div className="carousel-item active">
          <img
            alt="imagen"
            data-src={`${process.env.REACT_APP_URL_BASE_API_IMAGENES}${imagen.archivo}`}
            className="d-block w-100 lazyload"
            src="https://remate54.com/assets/images/loading-cargando.gif"
          />

        </div>
      ) : (
        <div className="carousel-item ">
          <img
            className="d-block w-100 lazyLoad"
            data-src={`${process.env.REACT_APP_URL_BASE_API_IMAGENES}${imagen.archivo}`}
            alt="First slide"
            src="https://remate54.com/assets/images/loading-cargando.gif"
          />
        </div>
      )}
    </>
  );
};

export default ImgSlideTrap;
