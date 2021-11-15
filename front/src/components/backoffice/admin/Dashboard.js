import { useContext, useEffect, useState } from "react";
import { FirebaseContext, useHistory } from "../../layout/Imports";

const Dashboard = () => {
  const history = useHistory();
  const authContext = useContext(FirebaseContext);
  const { usuarioLocal, noPermitido } = authContext;

  const [permitido, setPermitido] = useState(null);

  useEffect(() => {
    if (usuarioLocal !== null) {
      if (usuarioLocal.tipousuario === "1") {
        //  getOrganizacion(usuarioLocal.id, setLoadingLocal, setAlerta);
      }
      noPermitido("9", setPermitido, history);
    }
  }, [usuarioLocal]);

  if (permitido === null) return <></>;
  if (permitido === "si")
    return (
      <div
        className="d-flex justify-content-center"
        style={{ padding: "50px" }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/assets/images/organizaciones.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Organizaciones</h5>
            <h2 className="card-text">1500</h2>
            <div className="row" style={{ padding: "10px" }}>
              <button className="btn btn-block btn-primary">Ver Detalle</button>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
          <img
            src="/assets/images/eventos.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Eventos</h5>
            <h2 className="card-text">1500</h2>
            <div className="row" style={{ padding: "10px" }}>
              <button className="btn btn-block btn-primary">Ver Detalle</button>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
          <img
            src="/assets/images/expectadores.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Expectadores</h5>
            <h2 className="card-text">1500</h2>
            <div className="row" style={{ padding: "10px" }}>
              {/* <button className="btn btn-block btn-primary">Ver Detalle</button> */}
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
          <img
            src="/assets/images/tickets.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Tickets</h5>
            <h2 className="card-text">1500</h2>
            <div className="row" style={{ padding: "10px" }}>
              <button className="btn btn-block btn-primary">Ver Detalle</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
