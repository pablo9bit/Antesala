import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, onClose, isOpened }) =>
  isOpened
    ? ReactDOM.createPortal(
        <div
          style={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            display: "grid",
            justifyContent: "center",
            alignContent: "start",
            /* backgroundColor: "rgba(0,0,0,0.3)", */
            /* Height:"200%", */
            
          }}
          /*   onClick={()=>{onClose()}} */
        >
          <div
            style={{
              padding: 10,
              background: "#fff",
              borderRadius: "2px",
              display: "inline-block",
/*               minHeight: "500px", */
              margin: "1rem",
              position: "relative",
              minWidth: "500px",
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              justifySelf: "center",
            }}
          >
            {children}
            {/*<hr />
             <button
              onClick={() => {
                onClose();
              }}
            >
              Cerrar
            </button> */}
          </div>
        </div>,
        document.getElementById("portal-root")
      )
    : null;

export default Portal;
