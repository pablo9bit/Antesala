import { Link } from "../Imports";

const HeaderAdmin = () => {
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
          <Link aria-label="Mi Perfil" to="/admin" className="dropdown-item">
            Panel Principal
          </Link>
        </li>
        <li>
          <Link aria-label="Mi Perfil" to="/admin" className="dropdown-item">
            Organizaciones
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <Link aria-label="Mi Perfil" to="/admin" className="dropdown-item">
          Tickets
        </Link>
      </ul>
    </li>
  );
};

export default HeaderAdmin;
