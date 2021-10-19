import React, { useContext } from "react";
import { Link, AuthContext } from "../layout/Imports";

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { usuario } = authContext;

  return (
    <div>
      <br></br>
      <div className="row">
        <div className="col-sm text-center">
          <img
            src={`${process.env.PUBLIC_URL} /assets/images/undraw_dashboard_nklg.svg `}
            width="90%"
            alt="dashboard"
          />
        </div>
        <div className="col-sm text-center">
          <h2>Hola {usuario.nombre}!</h2>
          <br></br>
          <h3>Estos son tus Accesos</h3>

          {usuario.tipousuario === "2" && usuario.aprobado === "1" ? ( // martillero
            <div className="justify-content-center text-center">
              Tipo Usuario: Martillero<br></br>
              <br></br>
              <Link aria-label="Mis Articulos" to="/bienes">
                Mis Articulos
              </Link>
              <br></br>
              (Liste y Gestione Articulos a Subastar. Inicie y Cancele Subastas)
              <br></br>
              <br></br>
            </div>
          ) : (
            <>
              {usuario.tipousuario === "2" && usuario.aprobado !== "1" ? (
                <div className="justify-content-center text-center">
                  Recuerde que para poder operar, debe ser habilitado por la
                  Administracion del Sitio.
                </div>
              ) : null}
            </>
          )}

          {usuario.tipousuario === "1" ? ( // comprador
            <div className="justify-content-center text-center">
              Tipo Usuario: Oferente<br></br>
            </div>
          ) : null}

          {usuario.tipousuario === "9" ? ( //administrador
            <div className="justify-content-center text-center">
              Tipo Usuario: Administrador<br></br>
              <br></br>
              <Link aria-label="Usuarios" to="/admin/usuarios">
                Usuarios (Martilleros y Oferentes)
              </Link>
              <br></br>
              Consulte y Liste Oferentes.<br></br>
              Permita/Deniegue Oferentes para Ofertar en las Subastas Activas.
              <br></br>
              Consulte y Liste Martilleros.<br></br>
              <br></br>
              <br></br>
              <Link aria-label="Subastas" to="/admin/subastas">
                Subastas
              </Link>
              <br></br>
              Consulte, Liste y Gestione Subastas. <br></br>
              Liste Ganadores.<br></br>
              Seguimiento de Subastas. <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          ) : null}

          <div className="justify-content-center text-center">
            <br></br>
            <Link aria-label="Cambiar Contraseña" to="/cambiarpassword">
              Cambiar Contraseña
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
