import { Link } from "../Imports";

const HeaderOrganizacion = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Mi Perfil
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <Link aria-label="Panel" to="/org" className="dropdown-item">
            Panel Principal
          </Link>
        </li>
        <li>
          <Link aria-label="Mi Perfil" to="/org/perfil" className="dropdown-item">
            Mi Organización
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <Link aria-label="Mis Eventos" to="/org/eventos" className="dropdown-item">
          Mis Eventos
        </Link>
      </ul>
    </li>
  );
};

export default HeaderOrganizacion;
