import React, { Suspense, useState, lazy } from "react";
import ImgSlideTrap from "./ImgSlideTrap";
import styled from "@emotion/styled";

const MyYoutubeResponsive = lazy(() => import("../../pages/subasta/videos/YoutubeResponsive"));


const LinkTransparencia = styled.a`
  background-color: #002653;
  opacity: 0.1;
  width: 27px;

  :hover {
    background-color: #c54436;
    opacity: 0.1;
  }
`;

const Slider = ({ imagenes, video }) => {
  const [indice, setIndice] = useState(0);

  const paginar = (accion) => {
    let pagina = null;

    if (accion === "anterior") {
      pagina = indice - 1;
      if (pagina < 0) return;
    } else {
      pagina = indice + 1;
      if (pagina > imagenes.length - 1) return;
    }

    setIndice(pagina);
  };


  return (
    <>
      {video ? (
        <Suspense fallback={<div></div>}><MyYoutubeResponsive video={video}/></Suspense>
      ) : null}
      <br></br>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {imagenes.map((imagen, index) => (
            <div key={index}>
              {index === indice ? (
                <ImgSlideTrap key={imagen} imagen={imagen} activo={true} />
              ) : (
                <ImgSlideTrap key={imagen} imagen={imagen} activo={false} />
              )}
            </div>
          ))}
        </div>
        {indice > 0 ? (
          <LinkTransparencia
            onClick={() => {
              paginar("anterior");
            }}
            className="carousel-control-prev"
            role="button"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </LinkTransparencia>
        ) : null}

        {indice < imagenes.length - 1 ? (
          <LinkTransparencia
            onClick={() => {
              paginar("siguiente");
            }}
            className="carousel-control-next"
            role="button"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </LinkTransparencia>
        ) : null}
      </div>
    </>
  );
};
export default Slider;
