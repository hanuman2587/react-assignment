import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__brand">BlogSphere</span>

      <ul className="navbar__links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        {/* Bonus */}
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
}