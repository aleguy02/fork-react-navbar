// Importing components from react-router-dom for navigation
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>

        {/* <a href="/pricing">Pricing</a>
        <a href="/about">About</a> */}
      </ul>
    </nav>
  );
}
