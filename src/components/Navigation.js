import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navigation.css';

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
        <FontAwesomeIcon className="faUser" icon={faUser} />
      </div>
    </div>
  );
};

export default Navigation;
