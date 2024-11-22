import { NavLink } from "react-router-dom";
import '../navbar/Navbar.css'; 

export default function Navbar(){
    return(
        <>
         <nav className="navbar">
      <div className="logo">
        <NavLink to="/" className="nav-logo">MyLogo</NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item" activeClassName="active-link" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-item" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="nav-item" activeClassName="active-link">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
        </>
    )
}