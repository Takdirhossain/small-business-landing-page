import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="https://icons.iconarchive.com/icons/atyourservice/service-categories/512/Car-Repair-icon.png" alt="" />
        </div>
        <input type="checkbox" id="checkbox" />
        <label for="checkbox" id="icon">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <ul>
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="dashboard">Dashboard</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
