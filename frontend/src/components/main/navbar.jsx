import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { TbLayoutList } from "react-icons/tb";
import { Link } from "react-router-dom";

import { logout } from "../../services/authService";
import "../../css/navbar.css";

const Navbar = ({ user }) => {
  const handleLogout = () => {
    logout();
    window.location = "/";
  };

  return (
    <nav className="navbar fixed-top myNavbar">
      <div className="container-fluid">
        <Link className="navbar-brand myBrand" to={"/"}>
          ToDoList
        </Link>
        <div>
          <Link className="myLink" to={"/"}>
            Dashboard
          </Link>
          <Link className="myLink" to={"/profile"}>
            Profile
          </Link>
          {!user && (
            <Link to={"/login"} id="login" className="hide">
              <IoIosLogIn size="1.75rem" />
            </Link>
          )}
          {user && (
            <span
              onClick={() => handleLogout()}
              id="login"
              className="hide myLogo"
            >
              <IoIosLogOut size="1.75rem" />
            </span>
          )}
        </div>
        <div
          className="myToggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <TbLayoutList size="1.5rem" color="#000" />
        </div>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title myBrand" id="offcanvasNavbarLabel">
              ToDoList
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body" style={{ paddingTop: "0" }}>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/"}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Profile
                </Link>
              </li>
              {!user && (
                <li className="nav-item">
                  <Link to={"/login"} id="login">
                    <IoIosLogIn size="1.75rem" />
                  </Link>
                </li>
              )}
              {user && (
                <li>
                  <span
                    onClick={() => handleLogout()}
                    id="login"
                    className="myLogo"
                  >
                    <IoIosLogOut size="1.75rem" />
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
