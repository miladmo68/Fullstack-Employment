import { Link } from "react-router-dom";
import AddUser from "../users/AddUser";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            Full Stack App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/AddUser" className="btn btn-outline-light">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
