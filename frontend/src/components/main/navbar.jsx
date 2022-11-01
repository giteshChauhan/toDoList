import { HiQueueList } from "react-icons/hi2";
import { IoIosLogIn } from "react-icons/io";
import "../../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top myNavbar">
      <div className="container-fluid">
        <a className="navbar-brand myBrand" href="#">
          ToDoList
        </a>
        <div>
          <a className="myLink" href="#">
            Dashboard
          </a>
          <a className="myLink" href="#">
            Profile
          </a>
          <a href="#" id="login" className="hide">
            <IoIosLogIn size="1.75rem" />
          </a>
        </div>
        <div
          className="myToggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <HiQueueList size="1.5rem" color="#000" />
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
                <a className="nav-link" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a href="#" id="login">
                  <IoIosLogIn size="1.75rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
