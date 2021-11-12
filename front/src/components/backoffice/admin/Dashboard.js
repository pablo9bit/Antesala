import { useContext } from "react";
import { FirebaseContext } from "../../layout/Imports";

const Dashboard = () => {
  const authContext = useContext(FirebaseContext);
  const { usuario } = authContext;

  return (
    <div className="d-flex justify-content-center" style={{ padding: "50px" }}>
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
