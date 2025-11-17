import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logos/santry-logo.png';
import './Header.css';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          <img src={logo} alt="Santry Logo" className="logo-image" />
        </Link>

        <ul className="nav-links">
          {isHome && (
            <>
              <li>
                <a href="#problem">Problem</a>
              </li>
              <li>
                <a href="#mission">Mission</a>
              </li>
            </>
          )}
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>

        <a href={isHome ? "#waitlist" : "/#waitlist"} className="download-button">
          Join Waitlist
        </a>
      </nav>
    </header>
  );
}

export default Header;

