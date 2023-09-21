import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
  return (
    <div className="navbar">
      <ul className="navbar-tabs">
        <li className="Bookstore-CMS">
          Bookstore CMS
        </li>
        <li>
          <NavLink className="navbar-books" to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink className="navbar-categories" to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <div className="signin">
        <FontAwesomeIcon icon="fas fa-user" />
      </div>
    </div>
  );
};

export default Navigation;
